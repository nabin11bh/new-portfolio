"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <Container>
      <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-mono text-sm text-highlight mb-2">
        selected work
      </motion.p>

      <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="font-display text-3xl md:text-4xl font-semibold text-text mb-12">
        Things I&apos;ve built
      </motion.h2>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-8 py-8 border-t border-border">
            <span className="font-mono text-sm text-muted">{project.date}</span>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-text">{project.title}</h3>
                <span className="font-mono text-xs text-muted">{project.tagline}</span>
              </div>

              <p className="text-muted leading-relaxed max-w-2xl">{project.description}</p>

              <div className="rounded-md border border-border bg-surface px-4 py-3">
                <p className="font-mono text-xs text-highlight mb-1">worth asking about</p>
                <p className="text-sm text-text leading-relaxed">{project.highlight}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {project.stack.map((tech) => (
                  <span key={tech} className="font-mono text-xs text-muted border border-border rounded px-2 py-1">{tech}</span>
                ))}
              </div>
                 
                 <div className="flex flex-wrap items-center gap-5 pt-1">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-accent hover:opacity-80 transition-opacity w-fit">
                    Live
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {project.links && project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-accent hover:opacity-80 transition-opacity w-fit">
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
             
              
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}