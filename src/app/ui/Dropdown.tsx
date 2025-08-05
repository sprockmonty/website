"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

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

export const buttonTags =
  "px-1 hover:underline cursor-pointer hover:bg-blue-800 hover:text-white";

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
      <button
        className={`border-raised ${buttonTags}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {name}
      </button>
      {isExpanded && (
        <div className="flex flex-col absolute bg-greyterm size-max z-10 left-0 border-raised">
          {menuItems.map((menuItem, index) => {
            return (
              <div key={index}>
                {isMenuItemAction(menuItem) ? (
                  <button
                    className={`text-left w-full ${buttonTags}`}
                    onClick={() => {
                      setIsExpanded(false);
                      menuItem.onClick();
                    }}
                  >
                    {menuItem.name}
                  </button>
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
