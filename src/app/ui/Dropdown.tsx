"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Button from "./Button";

interface DropdownProps {
  name: string;
  className?: string;
  menuItems: MenuItem[];
}

type MenuItem = MenuItemAction | ReactNode;

export interface MenuItemAction {
  name: string;
  onClick: () => void;
}

function isMenuItemAction(item: MenuItem): item is MenuItemAction {
  return (item as MenuItemAction).onClick !== undefined;
}

export default function Dropdown({
  name,
  className,
  menuItems,
}: DropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Close dropdown menu if click happens outside.
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        setIsExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, setIsExpanded]);

  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      <Button
        className={"border-raised"}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {name}
      </Button>
      {isExpanded && (
        <div className="flex flex-col absolute bg-greyterm size-max z-10 left-0 border-raised">
          {menuItems.map((menuItem, index) => {
            return (
              <div key={index}>
                {isMenuItemAction(menuItem) ? (
                  <Button
                    className={"text-left w-full"}
                    onClick={() => {
                      setIsExpanded(false);
                      menuItem.onClick();
                    }}
                  >
                    {menuItem.name}
                  </Button>
                ) : (
                  <div onClick={() => setIsExpanded(false)}>{menuItem}</div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
