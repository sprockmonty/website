import Link from "next/link";

export default async function Home() {
  return (
    <div className="p-5 flex flex-col">
      <h1 className="text-4xl font-thin text-[#0307ab] mb-1">Nathan Davey</h1>
      <div className="grid grid-cols-2 my-1 gap-1 text-center">
        <p className="italic col-span-2 px-5">
          Experienced and versatile engineer with 3 years industry experience in
          building scalable, cloud systems and full-stack applications.
        </p>

        <p className="px-1">Native English Speaker</p>

        <p className="px-1">UK/EU citizen with right to work in UK/Europe</p>
        <Link
          className="col-span-2 px-1 italic hover:underline text-[#080b9a]"
          href="mailto:ndavey-enquiries@outlook.com"
        >
          ndavey-enquiries@outlook.com
        </Link>

      </div>
      <h1 className="text-2xl font-thin text-[#2c2b30] mt-1">
        WORK EXPERIENCE
      </h1>

      <div className="my-4 flex flex-col">
        <div className="grid grid-cols-3 gap-4">
          <h2 className="col-span-2 text-base text-wrap text-[#0307ab]">
            Full-stack Engineer | Contractor
          </h2>
          <div className="flex justify-end">
            <h2 className="text-base text-[#0307ab]">
              Dec 2024 --{">"} Present
            </h2>
          </div>
        </div>
        <ul className="list-outside list-disc pl-7">
          <li>
            Leveraged serverless architecture design principles for Azure cloud
            doctor&#39;s appointment system.
          </li>

          <li>
            Cost optimization by developing system for detecting resource
            underutilization.
          </li>

          <li>Supervised Golang Workshops.</li>
        </ul>
        <div className="flex flex-row gap-1 flex-wrap mt-1 ml-3">
          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Azure</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Azure Functions</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Azure SignalR</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Azure Static Web Apps</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Azure Service Bus</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Azure VMs</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Azure Monitor</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Azure IOT</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Azure Communications Service</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Azure SQL Server</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Microsoft Entra ID</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">SQLite</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Elasticsearch</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Gitlabs CICD</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Golang</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Docker</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Websockets</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Bazel</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Typescript</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Tailwind</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">React</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Next.js</p>
          </div>
        </div>
      </div>

      <div className="my-4 flex flex-col">
        <div className="grid grid-cols-3 gap-4">
          <h2 className="col-span-2 text-base text-wrap text-[#0307ab]">
            Farmer | Farm in England
          </h2>
          <div className="flex justify-end">
            <h2 className="text-base text-[#0307ab]">
              Jun 2023 --{">"} Jun 2024
            </h2>
          </div>
        </div>
        <ul className="list-outside list-disc pl-7">
          <li>
            Managed team projects for corporate volunteer days and trained new
            workers.
          </li>

          <li>
            NPTC Level 2 Competency in Tractor Driving and Related Operations.
          </li>
        </ul>
        <div className="flex flex-row gap-1 flex-wrap mt-1 ml-3">
          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Tractors</p>
          </div>
        </div>
      </div>

      <div className="my-4 flex flex-col">
        <div className="grid grid-cols-3 gap-4">
          <h2 className="col-span-2 text-base text-wrap text-[#0307ab]">
            Backend Engineer | Fintech Banking Startup
          </h2>
          <div className="flex justify-end">
            <h2 className="text-base text-[#0307ab]">
              Sep 2020 --{">"} May 2023
            </h2>
          </div>
        </div>
        <ul className="list-outside list-disc pl-7">
          <li>
            Delivered cloud-based, distributed financial systems for processing
            and investigating multiple payments schemes (card payments, BACS
            direct debits).
          </li>

          <li>Designed microservice performance tests.</li>

          <li>
            Designed and implemented Elasticsearch DB, Golang and React system
            of engagement for interacting with payments processor.
          </li>

          <li>
            Contributed DevEx tools, documentation, and libraries for faster
            testing and development.
          </li>

          <li>
            Developed cloud-abstracted Pub/Sub architecture with Websockets for
            future-proof and bespoke messaging solution.
          </li>

          <li>Code reviewer for multiple projects.</li>
        </ul>
        <div className="flex flex-row gap-1 flex-wrap mt-1 ml-3">
          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">BACS</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Golang</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Kubernetes</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Websockets</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">React</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Typescript</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Elasticsearch</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Vault Core</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Vault Payments</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">PostgreSQL</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">AWS SQS</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">AWS SNS</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Please Build</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">GraphQL</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">Kafka</p>
          </div>

          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">gRPC</p>
          </div>
        </div>
      </div>

      <div className="my-4 flex flex-col">
        <div className="grid grid-cols-3 gap-4">
          <h2 className="col-span-2 text-base text-wrap text-[#0307ab]">
            Undergraduate Computing Teaching Assistant | University
          </h2>
          <div className="flex justify-end">
            <h2 className="text-base text-[#0307ab]">
              Oct 2019 --{">"} Dec 2019
            </h2>
          </div>
        </div>
        <ul className="list-outside list-disc pl-7">
          <li>
            Assisted students’ learning through knowledge of coding paradigms
            and debugging experience.
          </li>

          <li>Authored MATLAB revision document used by students.</li>
        </ul>
        <div className="flex flex-row gap-1 flex-wrap mt-1 ml-3">
          <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
            <p className="text-white">MATLAB</p>
          </div>
        </div>
      </div>

      <div className="my-2">
        <h1 className="text-2xl font-thin text-[#2c2b30]">EDUCATION</h1>

        <div className="my-1 flex flex-col">
          <div className="grid grid-cols-3 gap-4">
            <h2 className="col-span-2 text-base text-wrap text-[#0307ab]">
              MEng Aeronautics with Spacecraft Engineering | University
            </h2>
            <div className="flex justify-end">
              <h2 className="text-base text-[#0307ab]">
                Oct 2016 --{">"} Jul 2020
              </h2>
            </div>
          </div>
          <ul className="list-outside list-disc pl-7">
            <li>Grade: Upper Second-className Honours (2:1)</li>

            <li>
              Masters Thesis: Dynamic Optimisation Using the Julia Programming
              Language
            </li>

            <li>
              Prototyped bespoke theory of pseudospectral interpolating
              function-based optimization
            </li>

            <li>
              Leveraged metaprogramming for fast polynomial fitting in Julia.
            </li>
          </ul>
          <div className="flex flex-row gap-1 flex-wrap"></div>
        </div>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-thin text-[#2c2b30]">SKILLS</h1>

        <div className="my-1 flex flex-col">
          <h2 className="text-base text-wrap text-[#0307ab]">
            Programming Languages
          </h2>
          <div className="flex flex-row gap-1 flex-wrap ml-3">
            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Golang</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Javascript</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Typescript</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Python</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">MATLAB</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Julia</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Bash</p>
            </div>
          </div>
        </div>

        <div className="my-1 flex flex-col">
          <h2 className="text-base text-wrap text-[#0307ab]">Databases</h2>
          <div className="flex flex-row gap-1 flex-wrap ml-3">
            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">MySQL</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">PostgreSQL</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">SQL Server</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">SQLite</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Elasticsearch</p>
            </div>
          </div>
        </div>

        <div className="my-1 flex flex-col">
          <h2 className="text-base text-wrap text-[#0307ab]">Cloud</h2>
          <div className="flex flex-row gap-1 flex-wrap ml-3">
            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Kubernetes</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Azure</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Azure Functions</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Azure SignalR</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Azure Static Web Apps</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Azure SQL Server</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Azure Service Bus</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Azure VMs</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Azure Monitor</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Azure IOT</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Azure Communications Service</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">AWS</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">AWS SQS</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">AWS SNS</p>
            </div>
          </div>
        </div>

        <div className="my-1 flex flex-col">
          <h2 className="text-base text-wrap text-[#0307ab]">Frontend</h2>
          <div className="flex flex-row gap-1 flex-wrap ml-3">
            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">React</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Next.js</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Tailwind</p>
            </div>
          </div>
        </div>

        <div className="my-1 flex flex-col">
          <h2 className="text-base text-wrap text-[#0307ab]">Other</h2>
          <div className="flex flex-row gap-1 flex-wrap ml-3">
            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Node.js</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Docker</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Docker Compose</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Bazel</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Please Build</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">GraphQL</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">gRPC</p>
            </div>

            <div className="bg-greyterm flex flex-row gap-1 px-1 items-center">
              <p className="text-white">Apache Echarts</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-thin text-[#2c2b30]">
          HIGHLIGHTED PROJECTS
        </h1>

        <div className="my-1 flex flex-col">
          <h2 className="col-span-2 text-base text-wrap text-[#0307ab]">
            Serverless doctor appointment booking
          </h2>
          <p className="italic pl-2">
            Doctors appointment online booking and management portal, leveraging
            serverless architecture. Patients can book online by viewing synced
            doctors calendar, and then check-in to clinic using QR code and IOT
            device.
          </p>
          <ul className="list-outside list-disc pl-7">
            <li>
              Designed and implemented complete end to end serverless
              architecture (Azure Functions, Service Bus, Static Web Apps etc.).
            </li>

            <li>
              Protected endpoints with OAuth login and Azure Managed Identities.
            </li>

            <li>Implemented CICD Pipelines.</li>

            <li>Implemented frontend with realtime updates.</li>
          </ul>
          <div className="flex flex-row gap-1 flex-wrap"></div>
        </div>

        <div className="my-1 flex flex-col">
          <h2 className="col-span-2 text-base text-wrap text-[#0307ab]">
            Cloud resource underutilization alerting
          </h2>
          <p className="italic pl-2">
            System for logging multi-deployment cloud resource metrics and
            alerting when resources are being underutilized.
          </p>
          <ul className="list-outside list-disc pl-7">
            <li>
              Developed CLI tool for fetching and visualizing cloud resource
              metrics in the terminal.
            </li>

            <li>
              Implemented resource metrics scraping from both Azure and AWS
              cloud resources.
            </li>

            <li>
              Designed and implemented system and configuration for resource
              underutilization alerts and alert reports.
            </li>

            <li>Programmed metrics aggregation transformations.</li>
          </ul>
          <div className="flex flex-row gap-1 flex-wrap"></div>
        </div>

        <div className="my-1 flex flex-col">
          <h2 className="col-span-2 text-base text-wrap text-[#0307ab]">
            Scheme agnostic payments processing engine
          </h2>
          <p className="italic pl-2">
            Cloud based distributed multiple payment scheme processing engine
            with data insights. Supports both card and non card payment schemes.
            Customizable for multiple and varied scheme journeys and API calls.
            High throughput processing, with system-of-engagement off the hot
            path. Supports ISO 20022.
          </p>
          <ul className="list-outside list-disc pl-7">
            <li>Designed data recovery and migrations strategies.</li>

            <li>Designed system-of-engagement UI and payment repair paths.</li>

            <li>Designed resource shape of system-of-engagement documents.</li>

            <li>Designed and implemented GraphQL error logging system.</li>

            <li>Integrations with core banking engine.</li>

            <li>
              Implemented business logic for multi day direct debit payment
              settlements.
            </li>

            <li>Implemented Go DB layer for both PSQL and Elasticsearch.</li>

            <li>Implemented frontend elements and tests.</li>

            <li>End to end testing.</li>
          </ul>
          <div className="flex flex-row gap-1 flex-wrap"></div>
        </div>

        <div className="my-1 flex flex-col">
          <h2 className="col-span-2 text-base text-wrap text-[#0307ab]">
            Cloud abstracted WebSocket Pub/Sub
          </h2>
          <p className="italic pl-2">
            Custom WebSocket interface for managing streaming between internal
            services, backed up by swappable message broker. The goal of this
            project was to abstract implementation details of the broker away
            from the services, and use a standard WebSocket API for all
            services, such that the backing broker could be hot swapped
            depending on client requirements. SQS/SNS was used in this
            implementation, but GCP Pub/ Sub and Azure service bus could also be
            used.
          </p>
          <ul className="list-outside list-disc pl-7">
            <li>Implemented connection to message brokers.</li>

            <li>Setup testing environment.</li>
          </ul>
          <div className="flex flex-row gap-1 flex-wrap"></div>
        </div>
      </div>
    </div>
  );
}
