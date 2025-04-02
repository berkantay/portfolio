"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import SvgGrid from "@/components/ui/svg-grid";

const whoamiParagraph1 = (
  <>
    I’m a{" "}
    <span className="font-bold text-lime-300">
      27-years-old <span className=" text-zinc-400 font-normal"> and </span>{" "}
      software engineer
    </span>{" "}
    based in Berlin with a passion for crafting innovative products. With a
    generalist mindset, I bring a broad range of experience spanning over{" "}
    <span className="font-bold text-lime-300">6 years</span>, navigating from
    bare metal to cloud-based solutions. My journey began with hardware design
    which naturally evolved into a deep appreciation for{" "}
    <span className="font-bold text-lime-300"> software craftsmanship</span>,
    across various systems.
  </>
);

const whoamiParagraph2 = (
  <>
    Throughout my career, I have worked across multiple domains, including{" "}
    <span className="font-bold text-lime-300">
      consumer electronics, defense, factory automation, and adtech
    </span>
    . Currently, I’m focused on building a product to address{" "}
    <span className="font-bold text-lime-300">
      digital adoption challenges for SaaS companies
    </span>
    , blending my diverse experience with a commitment to enhancing user
    experiences and driving growth.
  </>
);

export default function About() {
  return (
    <div className="bg-black bg-gradient-to-t from-zinc-900/0 min-h-screen flex flex-col items-center justify-start">
      <div className="px-6 pt-20 mx-auto space-y-8 lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto lg:mx-0 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About
          </h2>
          <h2 className="text-lg font-semibold tracking-tight text-lime-300 mt-4">
            Who am I.
          </h2>
          <p className="mt-4 text-zinc-400 w-full">{whoamiParagraph1}</p>
          <p className="mt-4 text-zinc-400 w-full">{whoamiParagraph2}</p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
      </div>

      <div className="relative mt-4"></div>
      <div>
        <div className="mt-8 grid grid-cols-1 gap-4">
          <CardContainer className="inter-var hover:glow-border">
            <CardBody className="bg-zinc-800 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <div className="mb-8">
                <CardItem
                  translateZ="50"
                  className="text-4xl font-bold  justify-center mb-4 text-lime-300 dark:text-zinc-300"
                >
                  Backpack
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white dark:text-zinc-300"
                >
                  Languages
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-zinc-300 font-semibold text-sm max-w-sm mt-2 dark:text-neutral-300"
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
                  className="text-2xl font-bold text-white dark:text-zinc-300"
                >
                  Databases
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-zinc-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
                  className="text-2xl font-bold text-white dark:text-zinc-300"
                >
                  Event streams
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-zinc-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
                  className="text-2xl font-bold text-white dark:text-zinc-300"
                >
                  Utilities
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-zinc-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
                  className="text-2xl font-bold text-white dark:text-zinc-300"
                >
                  Frameworks
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-zinc-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
}
