"use client";

import { useEffect, useState } from "react";
import Container from "./Container";

const links = [
  { href: "#work", label: "/work" },
  { href: "#stack", label: "/stack" },
  { href: "#contact", label: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur border-b border-border" : ""
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between font-mono text-sm">
          <a href="#" className="text-text hover:text-accent transition-colors">
            ~/your-name
          </a>

          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-muted hover:text-text transition-colors">
                {link.label}
              </a>
            ))}
            <span className="flex items-center gap-2 text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-highlight opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-highlight" />
              </span>
              open to work
            </span>
          </div>
        </nav>
      </Container>
    </header>
  );
}