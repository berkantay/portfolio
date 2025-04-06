"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import SvgGrid from "@/components/ui/svg-grid";
import Link from "next/link";

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
];

const whoamiParagraph1 = (
  <>
    Hey! I'm a{" "}
    <span className="font-bold text-pink-500 bg-white px-1 rounded">
      28-years-old <span className="text-white font-normal"> and </span>{" "}
      software engineer
    </span>{" "}
    calling Berlin my home. I love building cool stuff and diving into new tech
    challenges. Being a generalist at heart, I've spent the last{" "}
    <span className="font-bold text-pink-500 bg-white px-1 rounded">
      8+ years
    </span>{" "}
    working on everything from bare metal to cloud solutions. It all started
    with tinkering with hardware, which got me hooked on{" "}
    <span className="font-bold text-pink-500 bg-white px-1 rounded">
      crafting elegant software solutions
    </span>{" "}
    across different platforms.
  </>
);

const whoamiParagraph2 = (
  <>
    My journey has taken me through some exciting territories -{" "}
    <span className="font-bold text-pink-500 bg-white px-1 rounded">
      from consumer electronics and defense to factory automation and adtech
    </span>
    . These days, I'm pouring my energy into{" "}
    <span className="font-bold text-pink-500 bg-white px-1 rounded">
      building AI Agents for in-product demos
    </span>
    . It's pretty exciting stuff - I get to mix all my past experience with
    cutting-edge tech to create something that really makes a difference in how
    people interact with products.
  </>
);

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start font-[family-name:var(--font-geist-mono)]">
      <div className="w-full px-6 pt-4 sm:px-20 sm:pt-4 flex justify-between items-center">
        <nav className="mb-8">
          <ul className="flex flex-wrap gap-6 text-lg">
            {routes.map((route) => (
              <li key={route.title}>
                {route.external ? (
                  <a
                    href={route.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500 transition-colors duration-200 font-bold"
                  >
                    {route.title}
                  </a>
                ) : (
                  <Link
                    href={route.href}
                    className={`transition-colors duration-200 font-bold ${
                      route.href === "/about"
                        ? "text-pink-500"
                        : "text-white hover:text-pink-500"
                    }`}
                  >
                    {route.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="px-6 mx-auto space-y-8 lg:px-8 md:space-y-16">
        <div className="max-w-7xl mx-auto lg:mx-0 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About
          </h2>
          <h2 className="text-lg font-semibold tracking-tight text-pink-500 bg-white px-2 py-1 rounded inline-block mx-auto mt-4">
            Who am I.
          </h2>
          <p className="mt-4 text-white w-full">{whoamiParagraph1}</p>
          <p className="mt-4 text-white w-full">{whoamiParagraph2}</p>
        </div>
        <div className="w-full h-px bg-pink-500" />
      </div>

      <div className="relative mt-4"></div>
      <div>
        <div className="mt-8 grid grid-cols-1 gap-4">
          <CardContainer className="inter-var hover:glow-border">
            <CardBody className="bg-zinc-800 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-pink-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <div className="mb-8">
                <CardItem
                  translateZ="50"
                  className="text-4xl font-bold justify-center mb-4 text-pink-500 bg-white px-2 py-1 rounded"
                >
                  Backpack
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white dark:text-white"
                >
                  Languages
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white font-semibold text-sm max-w-sm mt-2 dark:text-white"
                >
                  Feel myself confident while crafting
                </CardItem>
                <CardItem translateZ="100" rotateX={20} className="w-full mt-4">
                  <SvgGrid
                    svgs={[
                      "images/svg/golang.svg",
                      "images/svg/python.svg",
                      "images/svg/js.svg",
                      "images/svg/typescript.svg",
                      "images/svg/c-plus-plus.svg",
                      "images/svg/terraform.svg",
                    ]}
                  />
                </CardItem>
              </div>
              <div className="mb-8">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white dark:text-white"
                >
                  Databases
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-sm max-w-sm mt-2 dark:text-white"
                >
                  Used for persistence purposes
                </CardItem>
                <CardItem translateZ="100" rotateX={20} className="w-full mt-4">
                  <SvgGrid
                    svgs={[
                      "images/svg/postgresql.svg",
                      "images/svg/mysql.svg",
                      "images/svg/mongo.svg",
                      "images/svg/redis.svg",
                      "images/svg/influx.svg",
                      "images/svg/sqlite.svg",
                      "images/svg/timescale.svg",
                    ]}
                  />
                </CardItem>
              </div>
              <div className="mb-8">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white dark:text-white"
                >
                  Event streams
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-sm max-w-sm mt-2 dark:text-white"
                >
                  Used for real-time data processing
                </CardItem>
                <CardItem translateZ="100" rotateX={20} className="w-full mt-4">
                  <SvgGrid
                    svgs={[
                      "images/svg/kafka.svg",
                      "images/svg/pubsub.svg",
                      "images/svg/sqs.svg",
                    ]}
                  />
                </CardItem>
              </div>
              <div className="mb-8">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white dark:text-white"
                >
                  Utilities
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-sm max-w-sm mt-2 dark:text-white"
                >
                  Such as CI/CD, monitoring, cloud provides and more
                </CardItem>
                <CardItem translateZ="100" rotateX={20} className="w-full mt-4">
                  <SvgGrid
                    svgs={[
                      "images/svg/github.svg",
                      "images/svg/prometheus.svg",
                      "images/svg/grafana.svg",
                      "images/svg/otel.svg",
                      "images/svg/aws.svg",
                      "images/svg/gcp.svg",
                      "images/svg/docker.svg",
                      "images/svg/kubernetes.svg",
                    ]}
                  />
                </CardItem>
              </div>
              <div className="mb-8">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white dark:text-white"
                >
                  Frameworks
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-sm max-w-sm mt-2 dark:text-white"
                >
                  Libraries and other tools
                </CardItem>
                <CardItem translateZ="100" rotateX={20} className="w-full mt-4">
                  <SvgGrid
                    svgs={[
                      "images/svg/qt.svg",
                      "images/svg/nextjs.svg",
                      "images/svg/tailwind.svg",
                      "images/svg/prisma.svg",
                      "images/svg/pytorch.svg",
                    ]}
                  />
                </CardItem>
              </div>
              <div className="mb-4">
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-sm max-w-sm mt-2 italic"
                >
                  Note: This is an old list - I used way more tools, keeping
                  this card just because it is too fun to play with! 🎮. Didn't
                  have time to update 🧑‍💻
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
}
