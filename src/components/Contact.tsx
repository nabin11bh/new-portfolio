"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Container from "./Container";

export default function Contact() {
  return (
    <Container>
      <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-mono text-sm text-highlight mb-2">
        get in touch
      </motion.p>

      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="font-display text-3xl md:text-5xl font-semibold text-text mb-6 max-w-2xl">
        Open to junior fullstack roles.
      </motion.h2>

      <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted max-w-lg mb-10">
        If you&apos;re hiring, or just want to talk about something I built, my inbox is the fastest way to reach me.
      </motion.p>

      <motion.a
        href="mailto:nabinbhattarai214@gmail.com"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-display font-semibold text-text hover:text-accent transition-colors w-fit mb-14"
      >
        <Mail size={26} />
        nabinbhattarai214@gmail.com
        <ArrowUpRight size={22} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-between border-t border-border pt-6 font-mono text-xs text-muted"
      >
        <span>© {new Date().getFullYear()} Nabin Bhattarai</span>
        <div className="flex items-center gap-5">
          <a href="https://github.com/nabin11bh" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nabin-bhattarai-nbn" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </Container>
  );
}