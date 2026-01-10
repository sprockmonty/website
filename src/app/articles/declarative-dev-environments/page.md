# Declarative Developer Environments

## TLDR
Learn to set up your own portable dockerized dev environment, similar idea to a
declarative OS (e.g. NixOS), but (mostly) OS agnostic. Save your setup in a
single repo, and then deploy it where you need it. An environment in a
suitcase, take it wherever you want!

## Motivation?

I like change, but usually only change that adds something worthwhile to my
existence. For example, moving from the city into the country side is a nice,
soul beneficial change. Increased proximity to nature, and distance from the
pangs and ceaseless scurrying of Babylon feed the spirit wholesome nutrients.

Changing dev tools, operating system or workplace for no other reason but
necessity however, is a tax on the soul. These changes fatigue us. We have only
so much focus time per day, and as time goes on I prefer to spend less and less
of it relearning how to make the same dish in a different kitchen.

Nowadays, I have a workflow, and tools I've gotten used to. They aren't the
best tools, but not the worst either, they work for me, and I know them well.
Some of these tools depend on other tools. Some of these tools require specific
configurations, things I've scavenged off the far corners of forums now lost to
the aeons of history. When I swap operating system, or machine, I have to
reinstall these tools, and re-remember all the funky dependencies and hacks I
employed to get my goldielocks developer environment. Wouldn't it be great to
encode this knowledge and setup process in one place, make it deterministic so
it's guaranteed to succeed almost every time?

What I'm looking for, specifically, is a set of files in a repo which describe
exactly what my developer environment should look like. All I have to do is
press a button and my environment will deploy exactly how I want it, which all
the applications and configs set up to my liking.

Yes that sounds nice, and I'm sure it already exists in a billion and one
install.sh scripts. My experience however (and feel free to disagree), is that
these scripts are not as deterministic as I would want them to be. First of
all, different operating systems have different package mangers, and usually
package names. Sometimes (if you're on a work machine), your company has set up
your OS in just the right way to brake some dependency. Your script would have
to account for (and debug), all these different use cases. But I like the idea
of the script, just in itself, it's not enough. 

So why not use a declarative OS like [NixOS](https://nixos.org/)? Well what if
I want Ubuntu, or Arch?

The answer is containers! They make things portable right? Just stick it all in
docker container, and suddenly all your dev tools are portable. Then they'll
run on any OS running docker or podman!

This is the way (at least for me). But now how do I get the stuff on my OS into
the container, or how do I get the programs in my container out to my OS? I guess to share files I could run:

```
$ docker run -v /:/ dev-env
```

Will that work? What about networking? I guess I could add:
```
$ docker run -v /:/ --network=host dev-env
```

What about GUI applications? What about, instead of doing it all ourselves, we use [Distrobox](https://distrobox.it/)!

## Distrobox

Distrobox is an attempt to take a container, and make is less... containing.
What if we just expose everything on the host to our container? Network, UI, audio, files, childhood secrets? Answer: Distrobox!

Bless the man who created it.

Obviously don't expect this to be secure, this post does not come with ANY guarantees of anything. Check your company policy etc etc cool lets play with Distrobox.

But sorry I got carried away, practically, what is it? We'll it's... containers
with all the above and more docker flags configured to expose everything
(almost) to the host. You're running Ubuntu but really miss pacman? Just
`distrobox create --name dev-env --image archlinux:base-devel` and voilà,
pacman!

So, in other words, if you can install docker/podman/lilipod on your OS, and
Distrobox, then you now have near instant access to any other OS. And this
becomes especially useful when you create and use your own images, which is the
secret sauce I want to show you today.

## Enough chatter, show me how!

Here's a list of ingredients for our recipe. You will need:
* A linux OS with [docker](https://docs.docker.com/engine/install/) installed and
running, or your own favourite Distrobox compatible container system.
* [Distrobox](https://distrobox.it/#installation).
* Some minor shell scripting knowledge.

First, we're going to build our docker image with all the dev tools I like to use.
On the host OS, let's create a new folder called `build` in some forsaken part
of our drive, and start editing our Dockerfile. 

```bash
mkdir build
vi build/Dockerfile
```

I'm going to use arch for my container base OS (by the way), as it generally
has more up to date package versions in the main package repo, and I like to
live close to the edge with those day zeros. There are two main images
available, `base` and `base-devel`. Base is missing a few build packages which
I need for compiling neovim packages (`which`, `make` etc.), so I'll go with
`base-devel`.

```Dockerfile
# ... inside build/Dockerfile
FROM archlinux:base-devel
```

Note: you could also use the [arch-toolbox](https://quay.io/toolbx/arch-toolbox:latest)
image, which is specifically designed for desktop use, but I only discovered
this recently and haven't had a chance to test it yet.

I'll then add my preferred terminal emulator
([kitty](https://sw.kovidgoyal.net/kitty/)), text editor
([neovim](https://neovim.io/)), and shell ([fish](https://fishshell.com/)), as
well as some dependencies for some neovim packages and additional quality of
life tools.

```Dockerfile
# ... inside build/Dockerfile
RUN pacman -Syu --noconfirm kitty neovim fish starship git startup-notification fzf bat ripgrep fd go nodejs jq nnn

# Allow copying and pasting from container
RUN pacman -S --noconfirm xsel wlroots
```

We can also add browsers, GUI applications, and maybe even VLC for the occasional movie.
```Dockerfile
# ... inside build/Dockerfile
# Libreoffice
RUN pacman -S --noconfirm libreoffice-fresh hunspell-en_gb

# dbeaver
RUN pacman -S --noconfirm jdk-openjdk dbeaver

# VLC
RUN pacman -S --noconfirm vlc
# Other codecs if you need them to play videos.
RUN pacman -S --noconfirm ffmpeg vlc-plugin-ffmpeg

# Firefox
RUN pacman -S --noconfirm firefox
```

Some of these applications have additional dependencies, often not required,
but useful to have (e.g. VLC). Because it's all in the same docker file, we are
confident that each time we spin up a new env, we'll have all the tools
configured exactly how we want them.

Except we're missing our configs, which is where the next part comes in: the
shell script.

## Which comes first, the shell script, or the shell?

So we've got all our package dependencies for our dev environment patiently
waiting in our `Dockerfile`, but man does not develop on packages alone, we
need some config! Neovim, fish, kitty, various other applications usually have
some config which sits in our `/home/${USER}/.config` folder. We'll need to
bring these along with us. And frankly, it would be nice to streamline the
startup process too, so all we need to do is run an install script and jump
right into our new environment.

So, our shell script needs to:
* Bootstrap our dev environment from our Dockerfile.
* Copy various software configs.
* Export apps to host (this will be explained).

Lets start with the first two steps.

## Bootstrapping

Inside our build folder, lets create our start script:

```bash
touch build/start.sh && chmod +x build/start.sh
vi build/start.sh
```

Inside the `start.sh` script, we'll start by building our image we created in
our `Dockerfile`. The point of this whole exercise it to make our environment
as host agnostic as possible, with the only dependencies being Distrobox, and a
supported containterizer. Many host OSs either come with docker or podman, so
we'll check for both and build with the first one we find.

```bash
# ...inside build/start.sh
#!/bin/bash
if docker -h ; then 
	docker build --tag 'dev-env' .
else
	podman build --tag 'dev-env' .
fi
```

There is one additional dependency. We'll need flatpack for executing `distrobox-host-exec` (which we discuss a little later), so let's add a check for this:
```bash
# ...inside build/start.sh
if ! flatpak -h ; then
	echo "flatpak should be installed on host, install this first before starting container"
	exit 1
fi
```

---

With our image built, we can create the distrobox container. There are a couple of ways to do this, either run the command `distrobox create --name dev-env --image dev-env`, or we can create a `distrobox.ini` file. I prefer the latter method, because I'm a sucker for a config file. Stop editing the `start.sh` file, create a new `distrobox.ini` file, and place the following inside:
```ini
# ...inside build/distrobox.ini
[dev-env]
image=dev-env
replace=true
```

The `replace=true` part tells distrobox to replace an already existing
container with a new one every time `distrobox assemble create` is run, which
is what we want, as we're rebuilding the image every time we run this script. 

And as we just mentioned, `distrobox assemble create` is the command used to spin up our distrobox container, so we should add that to `start.sh`:
```bash
# ...inside build/start.sh
distrobox assemble create
```

Lets have a test. Execute the following commands to spin up the environment and enter it for the first time:
```bash
./start.sh
distrobox enter dev-env
```

You can take a moment to poke around. The astute among you will realise that
the home directory is shared with the host, but not much else. This is
generally a good thing, we don't tend to need much else and `rm -r /` will only
delete my precious memories and not my beloved host OS. If you however want to
share more than this, can specify that as one of the [container
flags](https://distrobox.it/usage/distrobox-assemble/) (left as an exercise to
the reader).

## Copying config
So, we have our container with our favourite programs installed, but we need to
configure them all to play nicely with each other. This post is already too
long to go though a complete sensible config for each and every tool you may
use, but I'll get you started with a few lines that you can add to your *already
existing* configs.

> Clearly our host OS and Distrobox are very closely coupled. The goal here is
> not to have a machine with multiple isolated dev sandboxes. If you want this,
> I'm sure there are many flavours of containers, VMs and namespacy things to
> suite your needs. My idea was simply to make starting from scratch on a new
> machine as simple as running an install script, but with the robustness of a
> docker container. Sure, you can follow this process and end up with multiple
> envs, but considering they all share the same host filesystem and config, don't
> be surprised if applications start tripping over each other. 

We'll start by creating a config directory to store our files.

```bash
mkdir config
```

Next, we want a quick way to launch into terminal which has all our fresh
applications. One way to do it would simply be to export the terminal app to
our host OS, but since I'm using i3 (installed on the
host), I can create a quick launch shortcut to start a kitty terminal session.
Copy an already existing i3 config to our new `config` dir, and add/replace the
following line:

```bash
# ... inside config/i3/config
bindsym $mod+Return exec distrobox enter dev-env -- kitty --single-instance
```

Note the use of the `distrobox enter -- [command]`, which is one way we can run
commands inside our distrobox environment from our host. Now the assumption
here is that any host OS I'm planning on using has i3 installed as a
prerequisite, and granted that might not always be the case. If you want to
truly be as host agnostic as possible, I would probably recommend just
exporting the kitty (or your terminal emulator of choice) app to the host OS,
and using whatever application launcher to start it and other apps. I just give
this as an example entry point. Incidently, if you want to run even your window
manager in distrobox, the brave [can do that
too](https://cloudyday.tech.blog/2022/05/14/distrobox-is-awesome/).

Once we're in our kitty term, we'll want to open our favourite shell. Since we
installed fish in our Dockerfile, we will use that. At this point, kitty is
already running inside our distrobox env, so we don't need to use `distrobox
enter` this time to begin our session, we can simply call the fish command
directly. We'll add the following to a copied kitty.conf file:

```
# ... inside config/kitty/kitty.conf
shell "fish"
```

At this point, you can put any other configs you'll want to take with you
inside our `config` dir. Stuff like fish configs, neovim configs, really
anything you'd usually put in `~/.config`. The next step will be, in our `start.sh` script, to copy all these files from the `config` dir to `~/.config`:
```bash
# ... inside build/start.sh 
cp -r ../config/* ~/.config/
mkdir -p ~/bin && cp -r ../bin/* ~/bin/
cp ../.gitconfig ~/.gitconfig
mkdir -p ~/.local/share/fonts && cp -r ../fonts/* ~/.local/share/fonts
```
I brought a couple of other things with me too, like some fonts (shoutout to
the lovely [maple mono](https://github.com/subframe7536/maple-font)), my
gitconfig, and some useful custom shell scripts I keep in a bin folder. We
probably want to add this bin folder to our system path, and since we're using
fish, we can just add that to our fish config:

```bash
# ... inside config/fish/config.fish
	export PATH="$HOME/bin:$PATH"
```

## From Host to Box and Box to Host

> In this section I refer to the box as the distrobox developer environment
> we defined and in our docker file and spun up, and the host as the host OS we
> are running the dev environment on.

This part of our little setup is a tad bit 'unrefined', shall we say, but for
the most part it works. I say this, because something about piggybacking our
host's docker and using it within a container that's running on it, feels a
little Matryoshkaesque. Regardless, the answer I am drawn to to the question "should this run on the box or the host" is "why not both"?

Running is a little misleading, a process either runs inside our contained dev
env, or on the host. But using some distrobox magic, we can blur the lines
between where exactly we need to spawn these processes from.

### Box to host
Abstracts aside, distrobox provides an easy way to export programs and binaries
to the host OS, in the form of `distrobox-export`. For example, you can run
this command inside the box:

```bash
distrobox-export --app vlc
```

Now vlc is available on our host. When we open the app from the host, vlc still
runs in our dev container, but now we have a way of starting it from the host
system launcher (whatever that might be, in my case I use rofi, or dmenu, or
whatever i3 comes with, I think?). 

Under the hood, distrobox copies the program `.desktop` files to your home dir,
and prepends a `distrobox-enter` command, which executes the specified app in
your box. Kind of neat, we can re-use the host OS launchers for starting
applications and the likes, but have the applications themselves run in our
box container.

You can do the same with the binaries themselves, e.g. 
```bash
distrobox-export --bin /usr/bin/nvim --export-path ~/bin/nvim
```

Which will place a link to nvim in `~/bin/nvim` on our host.

### Host to Box

We can also go the other way around. Distrobox provides an inverse command,
`distrobox-host-exec`, which we can use to execute host commands, but from
inside our box. The command itself is running on the host (using
[host-spawn](https://github.com/1player/host-spawn)), but other programs which
may require it as a dependency can still use it from within our box, provided
we symlink the command correctly. Lets have ourselves an example.

Say we want to break some k8s clusters, but because we have a family, we decide to do it locally first.
We install minikube on our box, and run `minikube start`:

```
Exiting due to PROVIDER_DOCKER_NOT_FOUND: The 'docker' provider was not found: exec: "docker": executable file not found in $PATH
```

Cool, well we already have docker, since we needed it to spin up our box in the
first place, so we might as well use the host command instead of installing
docker again on the box. I mean, we could install docker on the box, but it's
[a little
complicated](https://distrobox.it/useful_tips/#using-docker-inside-a-distrobox)
and I don't like it. One docker is enough thank you very much.
So, to import the host docker command into our box, we can create a symlink to the docker binary:
```bash
ln -s /usr/bin/distrobox-host-exec /usr/local/bin/docker
```

Now when we run `minikube start`, it works as expected (I hope it does for you too).
But it's kind of funny, we can run `docker ps` and inspect our own container from inside our container:
```bash
docker ps
CONTAINER ID   IMAGE      COMMAND                  CREATED        STATUS      PORTS     NAMES
0bee5655adad   dev-env   "/usr/bin/entrypoint…"   6 months ago   Up 3 days             dev-env
```

What happens if we kill it? Left as an exercise for the reader.

---

There's a handy bash/fish function which allows us to run `distrobox-host-exec`
automatically  for any command not found by our shell. Just copy and paste [one
of these functions](https://distrobox.it/posts/execute_commands_on_host/) into
your `.profile` or fish function folder in our `config` dir.

## Importing and exporting apps on creation
The goal was to have one script to stat them all, so clearly we want to do the above importing and exporting of our apps deterministically. Distrobox provides a handy way to to this out of the box, in our `distrobox.ini` file. We'll add the following export commands to our `[dev-env]` descriptor:

```ini
# ...inside build/distrobox.ini
exported_apps="kitty vlc libreoffice dbeaver firefox"
exported_bins="/usr/bin/nvim"
exported_bins_path="~/bin"
```

Finally, to import some commands from the host, we can use a post creation distrobox init hook:

```ini
# ...inside build/distrobox.ini
init_hooks=ln -s /usr/bin/distrobox-host-exec /usr/local/bin/docker;
```

## Altogether now

And that's my setup for creating a portable dev environment. Now whatever OS
I decide to switch to in future, all I need to do is install docker, flatpack,
i3, and run the `start.sh` script. Actually, that's more dependencies than I promised initially. Oops.

Here are the final configs:

### build/Dockerfile
```Dockerfile
FROM archlinux:base-devel

RUN pacman -Syu --noconfirm kitty neovim fish starship git startup-notification fzf bat ripgrep fd go nodejs jq nnn

# Allow copying and pasting from container
RUN pacman -S --noconfirm xsel wlroots

# Libreoffice
RUN pacman -S --noconfirm libreoffice-fresh hunspell-en_gb

# dbeaver
RUN pacman -S --noconfirm jdk-openjdk dbeaver

# VLC
RUN pacman -S --noconfirm vlc
# Other codecs if you need them to play videos.
RUN pacman -S --noconfirm ffmpeg vlc-plugin-ffmpeg

# Firefox
RUN pacman -S --noconfirm firefox
```

### build/start.sh
```bash
#!/bin/bash
if docker -h ; then 
	docker build --tag 'dev-env' .
else
	podman build --tag 'dev-env' .
fi

if ! flatpak -h ; then
	echo "flatpak should be installed on host, install this first before starting container"
	exit 1
fi

distrobox assemble create

cp -r ../config/* ~/.config/
mkdir -p ~/bin && cp -r ../bin/* ~/bin/
cp ../.gitconfig ~/.gitconfig
mkdir -p ~/.local/share/fonts && cp -r ../fonts/* ~/.local/share/fonts
```

## Nice, but have you considered this much better way of doing the same thing?
Afraid not and I don't like change. This works for me, but that doesn't mean it will
work for you. Maybe you just use VS code and don't see why I'm making such a
fuss. I don't really know either, but here we are.
