import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconBrandSuperhuman,
  IconRoad,
  IconBrandX,
  IconBrandGithub,
} from "@tabler/icons-react";
import Image from "next/image";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-white dark:text-white" />,
      href: "#",
    },

    {
      title: "About",
      icon: (
        <IconBrandSuperhuman className="h-full w-full text-white dark:text-white" />
      ),
      href: "about",
    },
    {
      title: "Experience",
      icon: <IconRoad className="h-full w-full text-white dark:text-white" />,
      href: "experience",
    },
    {
      title: "LinkedIn",
      icon: (
        <Image
          src="/images/linkedin.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "https://www.linkedin.com/in/berkantay",
    },

    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-white dark:text-white" />,
      href: "https://twitter.com/berkantay2",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white dark:text-white" />
      ),
      href: "https://github.com/berkantay",
    },
  ];
  return (
    <div className="fixed bottom-20 left-0 right-0 flex items-center justify-center h-20 w-full bg-black">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
