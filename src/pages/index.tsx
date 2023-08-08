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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
