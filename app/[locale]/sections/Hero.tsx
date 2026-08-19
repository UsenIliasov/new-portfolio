"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Instagram, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [t("roles.0"), t("roles.1"), t("roles.2")];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-accent p-1"
        >
          <div className="w-full h-full rounded-full bg-dark flex items-center justify-center text-4xl font-bold text-gradient">
            IU
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          {t("greeting")}{" "}
          <span className="text-gradient">Iliasov Usonbek</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-400 mb-8 h-8"
        >
          {text}
          <span className="animate-pulse text-accent">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all hover:-translate-y-1"
          >
            {t("cta_contact")}
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full glass text-white font-semibold hover:border-accent/50 transition-all hover:-translate-y-1"
          >
            {t("cta_projects")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/UsenIliasov" },
            { icon: Linkedin, href: "https://linkedin.com/in/usonbek-iliasov-44743b285/?isSelfProfile=false" },
            { icon: Instagram, href: "https://instagram.com/iliasov_u?igsh=cDN6ZW13Nmxhc2t1" },
            { icon: Send, href: "https://t.me/iliasov_u" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-colors"
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-accent transition-colors"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
