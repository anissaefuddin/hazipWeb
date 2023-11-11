"use client";
import menu from "../config/menu.json";
import Link from "next/link";
import config from "../config/config.json";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import IconHeader from "./IconHeader";

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

const Header = () => {
  // distructuring the main menu from menu object
  const { main }: { main: INavigationLink[] } = menu;
  const { settings } = config;
  // get current path
  const pathname = usePathname();

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <header
      className={`header bg-emerald-600 z-30 ${settings.sticky_header && "sticky top-0 "}`}>
      <ul className="flex bg-emerald-600">
        {main.map((menu, i) => (
          <li className="-mb-px mr-1" key={`menu-${i}`}>
            <Link
              href={menu.url}
              className={`inline-flex items-center h-10 px-2 py-2 -mb-px text-center sm:px-4 -px-1  whitespace-nowrap text-300  bg-emerald-600 text-black-500 hover:text-neutral-200 font-semibold ${
                (pathname === `${menu.url}/` ||
                  pathname === menu.url ||
                  menu.children?.map(({ url }) => url).includes(pathname) ||
                  menu.children
                    ?.map(({ url }) => `${url}/`)
                    .includes(pathname)) &&
                " rounded-t py-2 px-4 text-white bg-emerald-950"
              }`}>
              <IconHeader menu={menu.name}></IconHeader>
              <span className="mx-1 text-sm sm:text-base">{menu.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
