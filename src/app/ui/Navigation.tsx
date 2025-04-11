"use client";

import Dropdown from "./Dropdown";

const fileItems = [
  {
    name: "option1",
    onClick: () => {
      console.log("hi");
    },
  },
  someButton(),
];

function someButton() {
  return <button onClick={() => console.log("meme")}>hi</button>;
}

export default function Navigation() {
  return (
    <div className="flex flex-col m-x-3 w-full">
      <h1 className="font-bold text-greyterm bg-linear-to-r from-gray-500 to-gray-400 px-1">
        Welcome!
      </h1>
      <div className="flex flex-row px-2">
        <Dropdown menuItems={fileItems} name="File" />
        <Dropdown menuItems={fileItems} name="File" />
      </div>
    </div>
  );
}
