"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, Phone } from "lucide-react";

const contactItems = [
  {
    label: "Contact (primary)",
    value: "contact@cheotechstudio.com",
    href: "mailto:contact@cheotechstudio.com",
    icon: Mail,
  },
  {
    label: "Gmail",
    value: "cheotechstudio@gmail.com",
    href: "mailto:cheotechstudio@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+84 373 167 306",
    href: "tel:+84373167306",
    icon: Phone,
  },
];

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t("subtitle")}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            {contactItems.map(({ label, value, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 text-left shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-primary/30 hover:shadow-md active:scale-[0.98]"
                aria-label={label}
              >
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium text-foreground">{value}</span>
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            {t("domainLabel")}{" "}
            <a
              href="https://cheotechstudio.com"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              cheotechstudio.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
