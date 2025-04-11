import Markdown from "react-markdown";
import highlight from "remark-sugar-high";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function MarkdownBox({ markdown }: { markdown: string }) {
  return (
    <Markdown remarkPlugins={[gfm, highlight]} rehypePlugins={[rehypeRaw]}>
      {markdown}
    </Markdown>
  );
}
