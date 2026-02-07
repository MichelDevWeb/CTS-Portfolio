"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  projects,
  PROJECT_TYPES,
  getProjectsByType,
  type Project,
  type ProjectType,
} from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div variants={item}>
      <Link
        href={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span
            className={cn(
              "absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
              "bg-background/90 text-foreground backdrop-blur-sm"
            )}
          >
            {project.type}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-card-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {project.shortDescription}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectsGrid() {
  const [filter, setFilter] = useState<ProjectType | "all">("all");
  const filtered = filter === "all" ? projects : getProjectsByType(filter);

  return (
    <section id="projects" className="scroll-mt-20 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Websites, mobile apps, Chrome extensions, and games — a selection of
            what we build.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {[
            { value: "all" as const, label: "All" },
            ...PROJECT_TYPES,
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                "hover:scale-[1.02] active:scale-[0.98]",
                filter === value
                  ? "bg-primary text-primary-foreground shadow"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={filter}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              filtered.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))
            ) : (
              <motion.p
                variants={item}
                className="col-span-full py-12 text-center text-muted-foreground"
              >
                No projects in this category yet.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
