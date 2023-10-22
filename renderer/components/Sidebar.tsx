"use client";

import Logo from "./Logo";
import menu from "../config/menu.json";
import Link from "next/link";
import config from "../config/config.json";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

//  child navigation link interface
export interface IChildNavigationLink {
  name: string;
  url: string;
}

// navigation link interface
export interface INavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: IChildNavigationLink[];
}
type SidebarProps = {
  index: number; // Parameter berupa angka
};

const Sidebar: React.FC<SidebarProps> = ({index}) => {
  const { main }: { main: INavigationLink[] } = menu;
  // get current path
  const pathname = usePathname();
  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <ul className="mt-4 overflow-x-hidden">
      {main[index].children?.map((child, i) => (
        <li className="lg:mb-1" key={`menu-${i}`}>
          <Link
            href={child.url}
            className={`bg-white block py-2 px-4 text-gray-500 hover:text-gray-700 ${
              (pathname === `${child.url}/` || pathname === child.url) &&
              "border rounded-t py-2 px-4 text-gray-900 bold"
            }`}>
            {child.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
