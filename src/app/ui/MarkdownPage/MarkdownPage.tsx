import MarkdownBox from "./MarkdownBox";

export default async function MarkdownPage({ pageMarkdown }: { pageMarkdown: string }) {
  return (
    <main className="flex flex-col p-5">
      <MarkdownBox markdown={pageMarkdown} />
    </main>
  );
}
