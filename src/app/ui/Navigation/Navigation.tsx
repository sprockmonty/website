import Breadcrumbs from "./Breadcrumbs";

export default function Navigation() {
  return (
    <div className="flex flex-col m-x-3 w-full">
      <Breadcrumbs
        className="text-greyterm bg-linear-to-r from-gray-500 to-gray-400 px-1"
        home="Nathan Davey"
      />
      <div className="flex flex-row px-2"></div>
    </div>
  );
}
