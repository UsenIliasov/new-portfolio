"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import TimelineItem from "@/components/TimelineItem";

export default function Experience() {
  const t = useTranslations("experience");

  const items = [
    {
      title: t("items.0.title"),
      subtitle: t("items.0.subtitle"),
      period: t("items.0.period"),
      description: [
        t("items.0.description.0"),
        t("items.0.description.1"),
        t("items.0.description.2"),
        t("items.0.description.3"),
      ],
      link: t("items.0.link"),
    },
    {
      title: t("items.1.title"),
      subtitle: t("items.1.subtitle"),
      period: t("items.1.period"),
      description: [
        t("items.1.description.0"),
        t("items.1.description.1"),
        t("items.1.description.2"),
        t("items.1.description.3"),
      ],
      link: t("items.1.link"),
    },
    {
      title: t("items.2.title"),
      subtitle: t("items.2.subtitle"),
      period: t("items.2.period"),
      description: [
        t("items.2.description.0"),
        t("items.2.description.1"),
        t("items.2.description.2"),
        t("items.2.description.3"),
      ],
      link: t("items.2.link"),
    },
    {
      title: t("items.3.title"),
      subtitle: t("items.3.subtitle"),
      period: t("items.3.period"),
      description: [
        t("items.3.description.0"),
        t("items.3.description.1"),
        t("items.3.description.2"),
      ],
      link: null,
    },
    {
      title: t("items.4.title"),
      subtitle: t("items.4.subtitle"),
      period: t("items.4.period"),
      description: [
        t("items.4.description.0"),
        t("items.4.description.1"),
        t("items.4.description.2"),
        t("items.4.description.3"),
      ],
      link: null,
    },
    {
      title: t("items.5.title"),
      subtitle: t("items.5.subtitle"),
      period: t("items.5.period"),
      description: [
        t("items.5.description.0"),
        t("items.5.description.1"),
        t("items.5.description.2"),
      ],
      link: null,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
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
            {items.map((exp, i) => (
              <TimelineItem
                key={i}
                title={exp.title}
                subtitle={exp.subtitle}
                period={exp.period}
                description={exp.description}
                link={exp.link || undefined}
                index={i}
                tPrefix="experience"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
