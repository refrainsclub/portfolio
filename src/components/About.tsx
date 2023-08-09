import { motion } from "framer-motion";
import Button from "./Button";
import Link from "next/link";
import Container from "./Container";

export default function About() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="leading-0 text-center text-4xl font-bold tracking-tight md:text-5xl">
          <Link id="about" href="#about">
            About Me
          </Link>
        </h1>
      </motion.div>

      <div className="mx-auto mt-12 max-w-2xl text-center">
        <p className="mb-8 text-xl leading-8">
          Hey there! I am James, a 16 year old software developer from Hamilton,
          New Zealand. I have a passion for STEM subjects, such as Computer
          Science and Mathematics. I am currently studying towards my NCEA and
          am looking to study Computer Science at the University of Auckland
          once I graduate from high school here.
        </p>
        <p className="text-xl leading-8">
          Working towards my goal of a software engineer, I have put a lot of
          effort into learning new skills and technologies. I have experience in
          a wide range of languages and frameworks, and have had opportunities
          to work on amazing projects. I am always looking for new opportunities
          to learn and grow as a developer and a person.
        </p>
        <div className="mx-auto mt-12 w-fit">
          <Button asChild>
            <Link href="#projects">Projects</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
