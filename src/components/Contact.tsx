import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto p-8 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="leading-0 text-center text-4xl font-bold tracking-tight md:text-5xl">
            <Link id="contact" href="#contact">
              Contact Me
            </Link>
          </h1>
        </motion.div>
        <p className="mx-auto my-12 max-w-2xl text-center text-xl">
          Here you can contact me here for business inquires or questions. Your
          response will be sent to me directly.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
