import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
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