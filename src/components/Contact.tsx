import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto p-8 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="leading-0 text-center text-5xl font-bold tracking-tight">
            <a id="contact">Contact Me</a>
          </h1>
        </motion.div>
        <p className="mx-auto my-12 max-w-2xl text-center text-xl">
          Contact me for business inquires
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
