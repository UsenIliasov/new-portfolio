"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, MessageCircle, Send, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");
  const wt = useTranslations("whatsapp");

  const phoneNumber = "996550855936";
  const message = wt("message");
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const infoItems = [
    { icon: Mail, label: t("form.email"), value: "iliasovusenbek@gmail.com", href: "mailto:iliasovusenbek@gmail.com" },
    { icon: Phone, label: t("form.phone"), value: "+996 550 855 936", href: "tel:+996550855936" },
    // { icon: MapPin, label: t("about.location"), value: "Kyrgyzstan", href: null },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            {t("title")} <span className="text-gradient">{t("title_highlight")}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-16" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">{t("lets_talk")}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">{t("description")}</p>

              {infoItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 mt-8 p-4 rounded-2xl bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                  <MessageCircle size={24} className="text-white" fill="white" />
                </div>
                <div>
                  <p className="text-green-400 text-sm font-semibold">{t("whatsapp_cta")}</p>
                  <p className="text-gray-300 text-sm">{t("whatsapp_sub")}</p>
                </div>
              </motion.a>

              <div className="flex gap-4 mt-8">
                {[
                  { icon: Github, href: "https://github.com/UsenIliasov" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/usonbek-iliasov-44743b285/?isSelfProfile=false" },
                  { icon: Instagram, href: "https://www.instagram.com/iliasov_u?igsh=cDN6ZW13Nmxhc2t1" },
                  { icon: Send, href: "https://t.me/iliasov_u" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-colors"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form className="glass rounded-3xl p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">{t("form.name")}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                  placeholder={t("form.name_placeholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">{t("form.email")}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                  placeholder={t("form.email_placeholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">{t("form.message")}</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder={t("form.message_placeholder")}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all"
              >
                {t("form.submit")}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
