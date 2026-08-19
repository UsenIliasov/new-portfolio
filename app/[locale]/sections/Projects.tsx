"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const t = useTranslations("projects");

  const projectsList = [
    {
      title: t("items.0.title"),
      description: t("items.0.description"),
      role: t("items.0.role"),
      tech: [t("items.0.tech.0"), t("items.0.tech.1"), t("items.0.tech.2")],
      link: t("items.0.link"),
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: t("items.1.title"),
      description: t("items.1.description"),
      role: t("items.1.role"),
      tech: [t("items.1.tech.0"), t("items.1.tech.1"), t("items.1.tech.2")],
      link: t("items.1.link"),
      color: "from-blue-500/20 to-cyan-500/20",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            {t("title")} <span className="text-gradient">{t("title_highlight")}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-16" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsList.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10 }}
                className="block glass rounded-3xl overflow-hidden group hover:border-accent/30 transition-all h-full"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-secondary/10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <ExternalLink size={40} className="text-white/50 group-hover:text-white/80 transition-colors relative z-10" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-gray-500 group-hover:text-accent transition-colors mt-1"
                    />
                  </div>

                  <p className="text-accent text-sm font-medium mb-3">
                    {project.role}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
