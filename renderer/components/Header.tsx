"use client";
import menu from "../config/menu.json";
import Link from "next/link";
import config from "../config/config.json";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

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
  const {settings } = config;
  // get current path
  const pathname = usePathname();

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <header
      className={`header z-30 ${settings.sticky_header && "sticky top-0"}`}>
      {/* <div className="order-0">
        <Logo />
      </div> */}
      <ul className="flex border-b">
        {main.map((menu, i) => (
          <li className="-mb-px mr-1" key={`menu-${i}`}>
            <Link
              href={menu.url}
              className={`bg-white inline-block py-2 px-4 text-black-500 hover:text-gray-800 font-semibold ${
                (pathname === `${menu.url}/` || pathname === menu.url || menu.children?.map(({ url }) => url).includes(pathname) ||
                menu.children?.map(({ url }) => `${url}/`).includes(pathname)) &&
                "border-l border-t border-r rounded-t py-2 px-4 text-gray-700"
              }`}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
