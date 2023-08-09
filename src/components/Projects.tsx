import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Button from "./Button";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  description: string;
  cta?: CallsToAction[];
}

interface CallsToAction {
  id: number;
  name: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 0,
    name: "Refrains",
    description:
      "Refrains (refrains.club) was a Minecraft server that I ran from 2020 to 2022. We ammased a community of players from all over the world, but mostly from Oceania (Australia and New Zealand) and Asia. MLG Rush was an emerging game mode around this time, but there were no servers for the Oceania community. Refrains stepped in, giving the community and content creators a space to play and create.\n\nWe had a lot of fun, but unfortunately the server is now closed. It was a great experience and I learned a lot from it. I learned how to administrate a server, how to manage a community, and how to work with others. I also learned a lot about myself and what I want to do in the future. I am very grateful for the experience and I hope to do something like it again in the future.\n\nA server called Quadflame has continued the legacy of Refrains, and I am very grateful for that. I am currently volunteering as a developer there, helping them create new plugins for their server. Make sure to watch the video from bamsi where he plays on Refrains.",
    cta: [
      {
        id: 0,
        name: "Watch Video",
        url: "https://www.youtube.com/watch?q=qJyfUYPI0as",
      },
      { id: 1, name: "Quadflame", url: "https://discord.quadflame.com/" },
    ],
  },
  {
    id: 1,
    name: "Fast Builder",
    description:
      "Fast Builder is a Minecraft plugin that helps player learn how to bridge. It is a very complex for a Minecraft plugin, featuring a proprietary packet timer that calculates the time it takes them to bridge to the end island, and a system that allows them to paste maps into the game. This plugin took me months of development, in collaboration with Quadflame and speedcubing.\n\nDeveloping this plugin has taught me a lot of the fundamentals of Java, including object oriented programming, and how to use the Spigot API. I have also learned a lot about how Minecraft works, and how to use the Minecraft protocol to my advantage. There has been many problems which I have had to overcome, such as timing players accurately despite connection problems and ticks per second spikes when the server lags.\n\nI created this plugin for Quadflame, the server that has continued the legacy of Refrains. I am very proud of it, and I hope to continue to work on it in the future. You can play the game mode by yourself by joining the server and selecting the gamemode in the Server Selector.",
    cta: [
      {
        id: 0,
        name: "Watch Video",
        url: "https://www.youtube.com/watch?v=7L4PJtZjQ4U",
      },
      {
        id: 1,
        name: "Quadflame",
        url: "https://discord.quadflame.com/",
      },
    ],
  },
  {
    id: 2,
    name: "Block Clutches",
    description:
      "Block Clutch practice was a very popular game mode on Refrains. It was a game mode that allowed players to practice block clutches, a technique used in Minecraft to save yourself from falling into the void.\n\nI created this plugin for Refrains by popular demand, and it became popularized by the YouTubers bamsi, Tric7 and iMouse. It was a very simple plugin, but it was very effective. It was a great learning experience for me, as it was one of the first plugins that I created for Refrains. Originally, the game mode was coded in a scripting language known as Skript. However, this scripting language was very slow and had many limitations. So I later coded it in Java so that I could expand the plugin further.\n\nI am very proud of this plugin to this day, however it is no longer in use as Refrains has closed. Coding this plugin had kickstarted by passion for Spigot development. You can play a recreation of the game mode on Quadflame, however it is not the same as the original. You can still find videos of the original by the creators I have mentioned already.",
    cta: [
      {
        id: 0,
        name: "Watch Video",
        url: "https://www.youtube.com/watch?v=iBQ0sQiPl00",
      },
      {
        id: 1,
        name: "Quadflame",
        url: "https://discord.quadflame.com/",
      },
    ],
  },
  {
    id: 3,
    name: "Rentool",
    description:
      "Rentool is a Puna Wānanga project that I started in high school with my co-founder. We are serving New Zealanders with a tool hirage platform that allow locals to hire and rent from each other for cash. This should help reduce the barrier of entry for using tools, and reduce the production of tools that are only used once or twice.\n\nWe are currently in the process of developing our platform, working hard and learning a lot. We are hoping to launch our platform in the next few months, and we are very excited to see how it goes. We think that our passion project could be beneficial to the kiwis of Aotearoa, and we hope that it will be successful and keep serving.\n\nTo keep up to date with our progress, you can follow our social media. Our main platform is Instagram, so we suggest you follow us there. As I said in the beginning, this is a Puna Wānanga project, so you could also drop them a follow to see what other projects the students are working on. We hope you will stick around for the journey!",
    cta: [
      {
        id: 0,
        name: "Instagram",
        url: "https://www.instagram.com/rentool.nz/",
      },
      {
        id: 1,
        name: "Puna Wānanga",
        url: "https://www.instagram.com/rshs_pw/",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto p-8 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="leading-0 mb-2 text-center text-4xl font-bold tracking-tight md:text-5xl">
            <Link id="projects" href="#projects">
              My Projects
            </Link>
          </h1>
        </motion.div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-xl">
          Here you can find my past and ongoing projects.
        </p>
        <div className="mt-12 grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Project {...project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

const variants: Variants = {
  offscreen: {
    y: 150,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

function Project(project: Project) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={variants}
      className="flex flex-col items-start justify-between rounded-lg border border-gray-700 p-8 text-white"
    >
      <div>
        <h1 className="leading-0 mb-2 text-3xl font-bold tracking-tight">
          {project.name}
        </h1>
        <p className="mb-6 whitespace-pre-wrap text-lg leading-8">
          {project.description}
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {project.cta?.map((cta) => (
          <Button
            asChild
            key={cta.id}
            variant={cta.id == 0 ? "primary" : "secondary"}
          >
            <Link href={cta.url} target="_blank">
              {cta.name}
            </Link>
          </Button>
        ))}
      </div>
    </motion.div>
  );
}
