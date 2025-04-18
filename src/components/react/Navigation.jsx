import React from "react";
import { cn } from "../../lib/utils";

const options = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navigation({ currentPath }) {
  const pathList = ["/", "/projects", "/contact"];
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 mx-auto mt-8 flex w-fit justify-center">
      <ul className="flex items-center justify-center rounded-full px-3 backdrop-blur-xl transition duration-500">
        {options.map((item) => (
          <li
            key={item.title}
            className="z-10 rounded-full px-1 py-2 transition duration-100 es:py-1 md:px-2"
          >
            <a
              href={item.href}
              className={cn(
                "lg:hover:text-dark-text inline-block cursor-pointer px-3 py-1 transition-all hover:rounded-full hover:bg-opacity-50 es:p-1 lg:hover:bg-primary",
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
