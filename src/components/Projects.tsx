import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Button from "./Button";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  description: string;
  url?: string;
}

const projects: Project[] = [
  {
    id: 0,
    name: "Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores incidunt excepturi quod provident qui, dignissimos voluptatibus quos alias non veritatis. Nulla dolorem totam, amet itaque nostrum hic magnam nihil?",
    url: "https://example.com/",
  },
  {
    id: 1,
    name: "Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores incidunt excepturi quod provident qui, dignissimos voluptatibus quos alias non veritatis. Nulla dolorem totam, amet itaque nostrum hic magnam nihil?",
    url: "https://example.com/",
  },
  {
    id: 2,
    name: "Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores incidunt excepturi quod provident qui, dignissimos voluptatibus quos alias non veritatis. Nulla dolorem totam, amet itaque nostrum hic magnam nihil?",
    url: "https://example.com/",
  },
  {
    id: 3,
    name: "Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores incidunt excepturi quod provident qui, dignissimos voluptatibus quos alias non veritatis. Nulla dolorem totam, amet itaque nostrum hic magnam nihil?",
    url: "https://example.com/",
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
          <h1 className="leading-0 mb-2 text-center text-5xl font-bold tracking-tight">
            <Link id="projects" href="#projects">
              My Projects
            </Link>
          </h1>
        </motion.div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-xl">
          These are my past and ongoing projects
        </p>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={variants}
          viewport={{ once: true }}
          className="mt-12 grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2"
        >
          {projects.map((project) => (
            <Project {...project} key={project.id} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const variants: Variants = {
  offscreen: {
    y: 100,
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
      variants={variants}
      className="flex flex-col items-start rounded-lg border border-gray-700 p-8 text-white"
    >
      <h1 className="leading-0 mb-2 text-3xl font-bold tracking-tight">
        {project.name}
      </h1>
      <p className="mb-6 text-lg leading-8">{project.description}</p>
      {project.url ? (
        <Button href={project.url} target="_blank">
          Learn more
        </Button>
      ) : null}
    </motion.div>
  );
}
