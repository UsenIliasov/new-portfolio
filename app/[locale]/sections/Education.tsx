"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  const t = useTranslations("education");

  const items = [
    {
      degree: t("items.0.degree"),
      school: t("items.0.school"),
      location: t("items.0.location"),
      period: t("items.0.period"),
      description: t("items.0.description"),
    },
    {
      degree: t("items.1.degree"),
      school: t("items.1.school"),
      location: t("items.1.location"),
      period: t("items.1.period"),
      description: t("items.1.description"),
    },
    {
      degree: t("items.2.degree"),
      school: t("items.2.school"),
      location: t("items.2.location"),
      period: t("items.2.period"),
      description: t("items.2.description"),
    },
  ];

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            {t("title")} <span className="text-gradient">{t("title_highlight")}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-16" />
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-secondary" />

          <div className="space-y-12">
            {items.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-12 md:pl-0"
              >
                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-2 w-5 h-5 rounded-full bg-dark border-4 border-accent z-10" />

                <div
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="glass rounded-2xl p-6 hover:border-accent/30 transition-colors"
                  >
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <GraduationCap size={18} className="text-accent" />
                      <span className="text-accent text-sm font-semibold">{edu.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <div className={`flex items-center gap-2 text-gray-400 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <MapPin size={14} />
                      <span className="text-sm">{edu.school}, {edu.location}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
