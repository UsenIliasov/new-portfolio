import { setRequestLocale } from "next-intl/server";

import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Languages from "./sections/Languages";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Languages />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}