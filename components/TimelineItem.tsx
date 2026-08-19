"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  link?: string | null;
  index: number;
  tPrefix: string;
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  description,
  link,
  index,
  tPrefix,
}: TimelineItemProps) {
  const t = useTranslations(tPrefix);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="relative pl-8 md:pl-0"
    >
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-4 h-4 rounded-full bg-gradient-accent border-4 border-dark z-10" />

      <div
        className={`md:w-1/2 ${
          index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto" : "md:pl-12"
        }`}
      >
        <motion.div
          whileHover={{ y: -5 }}
          className="glass rounded-2xl p-6 hover:border-accent/30 transition-colors"
        >
          <span className="text-accent text-sm font-semibold">{period}</span>
          <h3 className="text-xl font-bold mt-1 text-white">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
          <ul className="mt-3 space-y-1">
            {description.map((item, i) => (
              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-accent text-sm hover:underline"
            >
              {t("visit_website")} →
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
