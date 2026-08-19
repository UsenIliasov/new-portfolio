"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

export default function Skills() {
  const t = useTranslations("skills");

  const skillsList = [
    { name: t("list.0.name"), level: 90 },
    { name: t("list.1.name"), level: 85 },
    { name: t("list.2.name"), level: 70 },
    { name: t("list.3.name"), level: 80 },
    { name: t("list.4.name"), level: 85 },
    { name: t("list.5.name"), level: 75 },
    { name: t("list.6.name"), level: 90 },
    { name: t("list.7.name"), level: 85 },
  ];

  const tags = [
    t("tags.0"), t("tags.1"), t("tags.2"), t("tags.3"), t("tags.4"),
    t("tags.5"), t("tags.6"), t("tags.7"), t("tags.8"), t("tags.9"),
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            {t("title")} <span className="text-gradient">{t("title_highlight")}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-16" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsList.map((skill, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="mb-2">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-accent font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-accent rounded-full"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.05, type: "spring" }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 glass rounded-full text-sm text-gray-300 hover:border-accent/50 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
