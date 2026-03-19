import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Volunteering from "../components/Volunteering";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Experience />
      <Testimonials />
      <Education />
      <Skills />
      <Volunteering />
      <Contact />
    </>
  );
}
