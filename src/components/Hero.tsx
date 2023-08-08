import { motion } from "framer-motion";
import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="bg-[url('/background.svg')] bg-cover bg-fixed text-white">
      <div className="bg-gradient-to-b from-black/75 to-gray-900/100">
        <Navbar />
        <div className="container mx-auto flex flex-col items-center p-8 py-24 text-center lg:items-start lg:py-72 lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="leading-0 mb-2 text-5xl font-bold tracking-tight md:text-8xl">
              Kia Ora!
            </h1>
          </motion.div>
          <p className="mb-12 max-w-2xl text-xl leading-8">
            My name is James Blair. I am a 16 year old software developer from
            Aotearoa, interested in Computer Science.
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            <Button href="#about">About</Button>
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
