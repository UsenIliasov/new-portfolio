"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Mail, Phone, Calendar } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { label: t("stat_years"), value: "2+" },
    { label: t("stat_projects"), value: "5+" },
    { label: t("stat_countries"), value: "3" },
    { label: t("stat_languages"), value: "5" },
  ];

  const infoItems = [
    { icon: MapPin, label: t("location"), value: "Kyrgyzstan" },
    { icon: Mail, label: t("email"), value: "iliasovusenbek@gmail.com" },
    { icon: Phone, label: t("phone"), value: "+996 550 855 936" },
    { icon: Calendar, label: t("exp_label"), value: "2+" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            {t("title")} <span className="text-gradient">{t("title_highlight")}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-12" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold mb-4">{t("whoami_title")}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{t("whoami_p1")}</p>
              <p className="text-gray-300 leading-relaxed">{t("whoami_p2")}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {infoItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 glass rounded-xl p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                    <item.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <motion.h4
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                className="text-3xl md:text-4xl font-bold text-gradient mb-2"
              >
                {stat.value}
              </motion.h4>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
