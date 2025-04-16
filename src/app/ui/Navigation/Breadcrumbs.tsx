"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface breadcrumbsProps {
  home: string;
  className?: string;
}

export default function Breadcrumbs({ home, className }: breadcrumbsProps) {
  // filter here removes the empty home path created by the first "/" in the path after the split.
  const crumbs = usePathname()
    .split("/")
    .filter((path) => path);
  crumbs.unshift(home);
  return (
    <ol className={`flex flex-row ${className}`}>
      {crumbs.map((crumb, index) => {
        const href = `/${crumbs.slice(1, index + 1).join("/")}`;
        const isLastCrumb = index === crumbs.length - 1;
        crumb = crumb
          .replaceAll("-", " ")
          .toLowerCase()
          .replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());
        return (
          <li className="flex flex-row" key={href}>
            {isLastCrumb ? (
              <Link href={href}>{crumb}</Link>
            ) : (
              <>
                <Link className="font-bold hover:underline" href={href}>
                  {crumb}
                </Link>
                <div className="mx-1">
                  <p>/</p>
                </div>
              </>
            )}
          </li>
        );
      })}
    </ol>
  );
}
