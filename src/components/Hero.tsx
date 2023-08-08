import { motion } from "framer-motion";
import Button from "./Button";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative text-white">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-50 h-full w-full object-cover object-center"
        src="/background.svg"
        priority={true}
        alt=""
      />
      <div className="bg-gradient-to-b from-black/75 to-gray-900/100">
        <Navbar />
        <div className="container mx-auto flex flex-col items-center p-8 py-24 text-center lg:items-start lg:py-72 lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="leading-0 mb-2 text-4xl font-bold tracking-tight md:text-8xl">
              Kia Ora!
            </h1>
          </motion.div>
          <p className="my-12 max-w-2xl text-xl leading-8">
            My name is James Blair. I am a 16 year old software developer from
            New Zealand, interested in Computer Science.
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            <Button asChild>
              <Link href="#about">About</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
