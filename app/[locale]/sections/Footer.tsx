"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-8 px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm"
        >
          {t("copyright")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm flex items-center gap-1"
        >
          {/* {t("crafted")} <Heart size={14} className="text-red-500 fill-red-500" /> {t("using")} */}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-6"
        >
          {["Home", "About", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-500 text-sm hover:text-accent transition-colors"
            >
              {link}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
