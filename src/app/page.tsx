import Nav from "@/components/Nav";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section id="home" className="min-h-screen flex items-center pt-16">
          <Hero />
        </section>

        <section id="work" className="min-h-screen py-32">
          <Container>
            <p className="font-mono text-muted">{/* projects section */}</p>
          </Container>
        </section>

        <section id="stack" className="min-h-screen py-32">
          <Container>
            <p className="font-mono text-muted">{/* skills section */}</p>
          </Container>
        </section>

        <section id="contact" className="min-h-screen py-32">
          <Container>
            <p className="font-mono text-muted">{/* contact section */}</p>
          </Container>
        </section>
      </main>
    </>
  );
}