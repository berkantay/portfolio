"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Experience() {
  const data = [
    {
      title: "2024 May - Present",
      content: (
        <div>
          <ul className="list-disc text-white font-semibold dark:text-neutral-200 text-xs md:text-sm  mb-4">
            <li>
              Joined to pyne as a founding engineer. Pyne is backed by{" "}
              <b className="text-[#E9FFAE]">Lightspeed </b>
              and
              <b className="text-[#E9FFAE]"> Sequoia Capital partners</b>.
              Currently building in-product AI agents to help PLG & Sales Led
              companies increase their user activations and conversions.
            </li>
            <li>
              Building AI agents for in-product demos to showcase product
              capabilities and enhance user onboarding experience.{" "}
            </li>
            <div className="mt-4"></div>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/webp/pyne_ai.webp"
              alt="startup template"
              width={700}
              height={700}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <iframe
              src="https://www.youtube.com/embed/VVseDXKJfjg"
              title="Pyne AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2023-May 2024",
      content: (
        <div>
          <ul className="list-disc text-white font-semibold dark:text-neutral-200 text-xs md:text-sm  mb-8">
            <li>
              Worked in AdTech domain, fully focused on writing scalable and
              error prone services on core bidding and integration projects.
              Redefined the architecture of backend services to Hexagonal
              Architecture which serves 4 million requests per day approx.
            </li>
            <div className="mt-4"></div>
            <li>
              Built{" "}
              <LinkPreview url="https://portfoy.io" className="font-bold">
                portfoy.io
              </LinkPreview>{" "}
              as side project to help people to track and manage their fund and
              commodity investments.
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/webp/firefly.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/webp/portfoy.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 Aug - 2021 Aug",
      content: (
        <div>
          <ul className="list-disc text-white font-semibold dark:text-neutral-200 text-xs md:text-sm  mb-4">
            <li>
              Designed and built successor of the legacy application broadly
              used in factory automation industry called <b>DiagMonitor</b>.
              Adapted old system into new technologies and introduced Golang to
              my team. Heavly focused on high concurrency and performance. Also
              designed event driven architecture to make the system more
              reliable and scalable. Here there are more information about{" "}
              <LinkPreview
                url="https://www.siemens.com/de/de/produkte/automatisierung/pc-based/simatic-ipc-orcla.html"
                className="font-bold"
                color="#00CCCC"
              >
                Simatic IPC ORCLA
              </LinkPreview>
            </li>
            <div className="mt-4"></div>
            <li>
              Developed{" "}
              <LinkPreview
                url="https://sote.app"
                className="font-bold"
                color="#E9FFAE"
              >
                sote.app
              </LinkPreview>{" "}
              as a side project. Sote is a mobile application where you can find
              thounsands of recipes based on your items in your fridge.
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/webp/sote.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/webp/sote_in_app.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021 Aug - 2019 Nov",
      content: (
        <div>
          <ul className="list-disc text-white font-semibold dark:text-neutral-200 text-xs md:text-sm  mb-4">
            <li>
              I was in AI Resaerch & Development team. Worked with my partner on
              human detection and tracking project. Planned and executed each
              layer of this project from dataset generation, labeling, transfer
              learning, deployment and testing. I cannot share further details
              due to NDA.
            </li>
            <div className="mt-4"></div>
          </ul>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2019 Nov - 2018 Aug",
      content: (
        <div>
          <ul className="list-disc text-white font-semibold dark:text-neutral-200 text-xs md:text-sm  mb-4">
            <li>
              It was my first company. Joined as an intern, promoted to
              part-time, and received a full-time offer upon graduation.
              Developed hardware for wireless device antenna measurements and
              contributed to the certification process of wireless routers for
              AT&T. Worked with bare metal mostly.
            </li>
            <div className="mt-4"></div>
          </ul>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
