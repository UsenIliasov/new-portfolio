"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

export default function Languages() {
  const t = useTranslations("languages");

  const languagesList = [
    { name: t("items.0.name"), level: t("items.0.level"), percent: 90, flag: t("items.0.flag") },
    { name: t("items.1.name"), level: t("items.1.level"), percent: 100, flag: t("items.1.flag") },
    { name: t("items.2.name"), level: t("items.2.level"), percent: 100, flag: t("items.2.flag") },
    { name: t("items.3.name"), level: t("items.3.level"), percent: 60, flag: t("items.3.flag") },
    { name: t("items.4.name"), level: t("items.4.level"), percent: 55, flag: t("items.4.flag") },
  ];

  return (
    <section id="languages" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">{t("title")}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-16" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languagesList.map((lang, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="glass rounded-2xl p-6 text-center group hover:border-accent/30 transition-all"
            >
              <div className="text-4xl mb-3">{lang.flag}</div>
              <h3 className="text-lg font-bold text-white mb-1">{lang.name}</h3>
              <p className="text-accent text-sm mb-4">{lang.level}</p>

              <div className="relative w-24 h-24 mx-auto">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-800"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <motion.path
                    className="text-accent"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${lang.percent}, 100`}
                    initial={{ strokeDasharray: "0, 100" }}
                    whileInView={{ strokeDasharray: `${lang.percent}, 100` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 + i * 0.1 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold">{lang.percent}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
