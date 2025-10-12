import MarkdownPage from "@/app/ui/MarkdownPage/MarkdownPage";
import pagemd from "./page.md"

export default async function Home() {
  return <MarkdownPage pageMarkdown={pagemd} />;
}
