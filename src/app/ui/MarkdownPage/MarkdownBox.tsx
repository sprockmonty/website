import Markdown from "react-markdown";
import highlight from "remark-sugar-high";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import Image from "next/image";

export default function MarkdownBox({ markdown }: { markdown: string }) {
  return (
    <Markdown
      remarkPlugins={[gfm, highlight]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => (
          <h1 className="font-bold text-4xl text-[#0307ab] my-3">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="font-bold text-3xl text-[#2c2b30] my-3">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="font-bold text-2xl text-[#0307ab] my-3">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="font-bold text-xl text-[#2c2b30] my-3">{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className="font-bold text-lg text-[#0307ab] my-3">{children}</h5>
        ),
        h6: ({ children }) => (
          <h6 className="font-bold text-lg text-[#2c2b30] my-3">{children}</h6>
        ),
        a: ({ children, href }) =>
          href == null ? (
            <p>{children}</p>
          ) : (
            <Link href={href} className="italic hover:underline text-[#080b9a]">
              {children}
            </Link>
          ),
        blockquote: ({ children }) => (
          <div className="italic bg-gray-300 border-l-4 pl-2 py-1 my-3 border-gray-500">
            {children}
          </div>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside my-1">{children}</ol>
        ),
        ul: ({ children }) => (
          <ol className="list-disc list-inside my-1">{children}</ol>
        ),
        hr: () => (
          <div className="relative my-5">
            <hr className="m-5 border-gray-300 border-1" />

            <div className="-top-4 absolute px-4 -translate-x-1/2 bg-slate-200 left-1/2 ">
              <Image src="/hr.svg" alt="" width={150} height={75} />
            </div>
          </div>
        ),
        code: ({ children, node, ...rest }) => (
          <div className="my-3 p-2 bg-gray-300 overflow-auto max-w-screen">
            <code {...rest}>{children}</code>
          </div>
        ),
      }}
    >
      {markdown}
    </Markdown>
  );
}
