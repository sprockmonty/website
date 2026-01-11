import Dropdown from "@/app/ui/Dropdown";
import Breadcrumbs from "@/app/ui/Navigation/Breadcrumbs";
import Button from "@/app/ui/Button";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex flex-col m-x-3 w-full">
      <Breadcrumbs
        className="text-greyterm bg-linear-to-r from-gray-500 to-gray-400 px-1"
        home="Nathan Davey"
      />
      <div className="flex flex-row px-2">
        <Dropdown name="File" menuItems={[
          <Button key={0}><Link href={"/articles"}>Articles...</Link></Button>,
          <Button key={0}><Link href={"/resume"}>Resume</Link></Button>
        ]} />
        {/* TODO: keep this alive when dropdown disappears using global state, rather than by just hiding component, as is currently implemented */}
      </div>
    </div>
  );
}
