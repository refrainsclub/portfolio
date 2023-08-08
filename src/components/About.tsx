import { motion } from "framer-motion";
import Button from "./Button";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto p-8 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="leading-0 text-center text-5xl font-bold tracking-tight">
            <Link id="about" href="#about">
              About Me
            </Link>
          </h1>
        </motion.div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="mb-8 text-xl leading-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae quos ipsa accusamus ex eos nisi saepe nobis non harum
            consectetur reiciendis a tempora, provident, autem veritatis
            nesciunt dolores dolore delectus!
          </p>
          <p className="mb-8 text-xl leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            atque, officiis quibusdam commodi assumenda veritatis tempora
            explicabo expedita eum sequi id, esse optio in corrupti quo, laborum
            nostrum necessitatibus sed?
          </p>
          <p className="text-xl leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            maxime quaerat et explicabo labore. Dolores, eius quaerat libero
            sint fugiat nesciunt deleniti porro dolorum autem, cupiditate quas
            accusamus. Aut, aspernatur?
          </p>
          <div className="mx-auto mt-12 w-fit">
            <Button href="#projects">Projects</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
