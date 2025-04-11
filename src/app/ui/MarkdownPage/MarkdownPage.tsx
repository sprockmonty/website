import fs from "node:fs";
import MarkdownBox from "./MarkdownBox";

export default async function MarkdownPage({ path }: { path: string }) {
  let pageMarkdown: string;
  try {
    pageMarkdown = fs.readFileSync(
      `./src/app/${path === "" ? "" : path + "/"}page.md`,
      "utf8",
    );
  } catch (err) {
    console.error("failed to load markdown page");
    return <>Something went wrong!</>;
  }
  return (
    <main className="flex flex-col p-5">
      <MarkdownBox markdown={pageMarkdown} />
    </main>
  );
}
