"use client";

import { EvervaultCard } from "@/components/ui/evervault-card";
import React from "react";
import {
  IconBrandGithub,
  IconBrandSuperhuman,
  IconBrandX,
  IconHome,
  IconRoad,
} from "@tabler/icons-react";
import Image from "next/image";
import { Dock } from "./dock";
import { DomainList } from "./components/DomainList";

export default function Home() {
  return (
    <div className="bg-black grid grid-rows-[20px_1fr_240px] h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute top-8 left-8 sm:top-20 sm:left-20 flex items-center gap-4">
        <div className="text-white text-2xl font-bold tracking-wider">
          BERKANT AY
        </div>
        <div className="text-neutral-400 text-lg">
          <DomainList />
        </div>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start overflow-hidden">
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-lg mx-auto p-4 relative h-full">
          <EvervaultCard
            imageSrc="./images/me.png"
            className="w-full h-full mb-4"
          />
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-white text-5xl font-bold tracking-wider">
              BERKANT
            </div>
            <div className="text-white text-4xl font-semibold">AY</div>
          </div>

          <div className="flex justify-center items-center px-4 mt-8">
            <div className="text-xl mx-auto font-medium text-gray-300 dark:text-neutral-400">
              AY <br />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Dock />
      </footer>
    </div>
  );
}
