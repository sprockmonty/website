"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface breadcrumbsProps {
  home: string;
  className?: string;
}

export default function Breadcrumbs({ home, className }: breadcrumbsProps) {
  // filter here removes the empty home path created by the first "/" in the path after the split.
  let crumbs = usePathname()
    .split("/")
    .filter((path) => path);
  crumbs.unshift(home);
  return (
    <ol className={`flex flex-row ${className}`}>
      {crumbs.map((crumb, index) => {
        const href = `/${crumbs.slice(1, index + 1).join("/")}`;
        const isLastCrumb = index !== crumbs.length - 1;
        return (
          <li className="flex flex-row" key={href}>
            <Link className={isLastCrumb ? "font-bold" : ""} href={href}>
              {crumb}
            </Link>
            <div className="mx-1">{isLastCrumb && <p>/</p>}</div>
          </li>
        );
      })}
    </ol>
  );
}
