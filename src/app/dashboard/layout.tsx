"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "accordion", href: "accordion" },
  { name: "alert dialog", href: "alert-dialog" },
  { name: "alert", href: "alert" },
  { name: "avatar", href: "avatar" },
  { name: "badge", href: "badge" },
  { name: "button", href: "button" },
  { name: "calendar", href: "calendar" },
  { name: "card", href: "card" },
  { name: "carousel", href: "carousel" },
  { name: "checkbox", href: "checkbox" },
  { name: "combobox", href: "combobox" },
  { name: "command", href: "command" },
  { name: "context menu", href: "context-menu" },
  { name: "datatable", href: "datatable" },
  { name: "dialog", href: "dialog" },
  { name: "form", href: "form" },
  { name: "input OTP", href: "input-otp" },
  { name: "menu bar", href: "menu-bar" },
  { name: "progress", href: "progress" },
  { name: "sheet", href: "sheet" },
  { name: "skeleton", href: "skeleton" },
  { name: "slider", href: "slider" },
  { name: "sonner", href: "sonner" },
  { name: "tabs", href: "tabs" },
  { name: "toast", href: "toast" },
  { name: "theme", href: "theme" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <nav className="bg-white border-b border-gray-200 fixed z-30 w-full dark:bg-slate-900 dark:border-slate-800">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setSidebar(!sidebar)}
                id="toggleSidebarMobile"
                aria-expanded="true"
                aria-controls="sidebar"
                className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
              >
                <svg
                  id="toggleSidebarMobileHamburger"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  className="w-6 h-6 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <a
                href="#"
                className="text-xl font-bold flex items-center lg:ml-2.5"
              >
                {/* Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="h-6 w-6"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="208"
                    y1="128"
                    x2="128"
                    y2="208"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <line
                    x1="192"
                    y1="40"
                    x2="40"
                    y2="192"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                </svg>
                <span className="self-center whitespace-nowrap ml-2">
                  {" "}
                  Shadcn/ui
                </span>
              </a>
            </div>
            <div className="flex items-center">
              {/* User Avatar */}
              <Avatar>
                <AvatarImage
                  src="https://github.com/matiasagbenitez.png"
                  alt="@shadcn"
                />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex overflow-hidden bg-white pt-16 dark:bg-slate-900">
        <aside
        hidden={!sidebar}
          id="sidebar"
          className="fixed z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 borderR border-gray-200 bg-white pt-0 dark:bg-slate-900">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 bg-white dark:bg-slate-900 divide-y space-y-1">
                <ul className="space-y-2 pb-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-base capitalize text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group dark:text-gray-100 dark:hover:bg-slate-800"
                      >
                        <span className="ml-3">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64 dark:bg-slate-800"
        >
          <main className="bg-gray-50 dark:bg-slate-800 h-full">
            <div className="pt-6 px-4">
              {/* <div className="w-full min-h-[calc(100vh-4rem)]"> */}
              <div className="w-full min-h-[calc(100vh-88px)]">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 dark:bg-slate-900">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
