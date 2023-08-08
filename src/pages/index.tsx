import Head from "next/head";
import About from "~/components/About";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>James Blair</title>
        <meta name="description" content="James Blair's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
