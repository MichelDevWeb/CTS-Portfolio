"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border/40 bg-muted/30 py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("p1")}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {t("p2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
