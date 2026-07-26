"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { experience } from "@/lib/experience";

export default function Experience() {
  return (
    <Container>
      <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-mono text-sm text-highlight mb-2">
        experience
      </motion.p>

      <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="font-display text-3xl md:text-4xl font-semibold text-text mb-12">
        Where I&apos;ve worked
      </motion.h2>

      <div className="flex flex-col">
        {experience.map((job, i) => (
          <motion.div key={job.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 py-8 border-t border-border">
            <span className="font-mono text-sm text-muted">{job.duration}</span>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-text">{job.role}</h3>
                <span className="font-mono text-xs text-accent">{job.company}</span>
              </div>

              <p className="text-muted leading-relaxed max-w-2xl">{job.description}</p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {job.stack.map((tech) => (
                  <span key={tech} className="font-mono text-xs text-muted border border-border rounded px-2 py-1">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}