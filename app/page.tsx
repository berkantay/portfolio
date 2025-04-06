"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DomainList } from "@/app/components/DomainList";

const routes = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/berkantay",
    external: true,
  },
  { title: "Twitter", href: "https://twitter.com/berkantay2", external: true },
  { title: "GitHub", href: "https://github.com/berkantay", external: true },
  { title: "Let's Chat", href: "#", action: "openCalendar", external: false },
];

export default function Home() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen p-4 sm:p-10 font-[family-name:var(--font-geist-mono)]">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-row gap-8">
          <div className="flex flex-col items-center gap-24">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden">
              <Image
                src="/images/me.png"
                alt="Profile"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <nav className="pb-10">
              <ul className="flex flex-col gap-4 text-xl">
                {routes.map((route) => (
                  <li key={route.title}>
                    {route.external ? (
                      <a
                        href={route.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-pink-500 hover:bg-white px-3 py-1 rounded transition-all duration-200 font-bold"
                      >
                        {route.title}
                      </a>
                    ) : route.action === "openCalendar" ? (
                      <button
                        onClick={openCalendar}
                        className="text-white bg-pink-500 hover:text-pink-500 hover:bg-white px-3 py-1 rounded transition-all duration-200 font-bold"
                      >
                        {route.title}
                      </button>
                    ) : (
                      <Link
                        href={route.href}
                        className="text-white hover:text-pink-500 hover:bg-white px-3 py-1 rounded transition-all duration-200 font-bold"
                      >
                        {route.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-4 sm:mt-0">
            <div className="text-white text-2xl font-bold tracking-wider font-mono">
              berkant ay
            </div>
            <div className="text-neutral-400 text-lg">
              <DomainList />
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1"></main>

      {isCalendarOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden max-w-6xl w-full h-[80vh] relative">
            <button
              onClick={closeCalendar}
              className="absolute top-4 right-4 text-black bg-white rounded-full p-2 hover:bg-gray-100 z-10"
            >
              ✕
            </button>
            <iframe
              src="https://cal.com/berkantay"
              className="w-full h-full border-0"
              title="Book a meeting with Berkant"
            />
          </div>
        </div>
      )}
    </div>
  );
}
