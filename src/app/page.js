"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useRef } from "react";
export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <main>
      <div>
        <Hero
          scrollToAbout={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToSkills={() =>
            skillsRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToProjects={() =>
            projectsRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToContact={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
        <About ref={aboutRef}/>
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </div>
    </main>
  );
}
