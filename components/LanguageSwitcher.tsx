"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const locales = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 glass rounded-full px-1 py-1">
      <Globe size={14} className="text-gray-400 ml-2 mr-1" />
      {locales.map((loc) => (
        <button
          key={loc.code}
          onClick={() => handleChange(loc.code)}
          className={`relative px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
            locale === loc.code
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {locale === loc.code && (
            <motion.div
              layoutId="lang-pill"
              className="absolute inset-0 bg-gradient-accent rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{loc.label}</span>
        </button>
      ))}
    </div>
  );
}
