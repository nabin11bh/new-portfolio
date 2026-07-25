"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { skills } from "@/lib/skills";

export default function Skills() {
  return (
    <Container>
      <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-mono text-sm text-highlight mb-2">
        stack
      </motion.p>

      <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="font-display text-3xl md:text-4xl font-semibold text-text mb-12">
        What I work with
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="border-t border-border pt-4"
          >
            <h3 className="font-mono text-xs text-muted uppercase tracking-wide mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-text bg-surface border border-border rounded-md px-3 py-1.5 hover:border-accent transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}