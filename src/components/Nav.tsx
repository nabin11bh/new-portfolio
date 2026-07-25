"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const links = [
  { href: "#work", label: "/work" },
  { href: "#stack", label: "/stack" },
  { href: "#contact", label: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 z-50 w-full transition-colors duration-300 ${scrolled || menuOpen ? "bg-bg/90 backdrop-blur border-b border-border" : ""}`}>
      <Container>
        <nav className="flex h-16 items-center justify-between font-mono text-sm">
          <a href="#" onClick={() => setMenuOpen(false)} className="text-text hover:text-accent transition-colors z-50 relative">
            ~/Nabin Bhattarai
          </a>

          <div className="hidden md:flex items-center gap-8">
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

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-text z-50 relative" aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      <div
        onClick={() => setMenuOpen(false)}
        className={`md:hidden fixed inset-0 top-16 z-30 bg-black/50 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      <div
        className={`md:hidden fixed top-16 right-0 z-40 w-[60%] max-w-70 bg-bg border-l border-border transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"}`}
        style={{ height: "calc(100dvh - 4rem)" }}
      >
        <div className="flex flex-col gap-1 px-6 pt-8 h-full">
          {links.map((link, i) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }} className={`font-display text-xl font-semibold text-text py-3 border-b border-border transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              {link.label}
            </a>
          ))}
          <span className="flex items-center gap-2 text-muted font-mono text-xs pt-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-highlight opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-highlight" />
            </span>
            open to work
          </span>
        </div>
      </div>
    </header>
  );
}