import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section id="home" className="min-h-screen flex items-center pt-16">
          <Hero />
        </section>

        <section id="work" className="py-32">
          <Projects />
        </section>

        <section id="experience" className="py-32">
          <Experience />
        </section>

        <section id="stack" className="py-32">
          <Skills />
        </section>

        <section id="contact" className="min-h-screen flex flex-col justify-center py-32">
          <Contact />
        </section>
      </main>
    </>
  );
}