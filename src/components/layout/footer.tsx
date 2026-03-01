"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const currentYear = new Date().getFullYear();

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CheoTech Studio. {t("rights")}
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:contact@cheotechstudio.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              contact@cheotechstudio.com
            </a>
            <a
              href="mailto:cheotechstudio@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              cheotechstudio@gmail.com
            </a>
            <a
              href="tel:+84373167306"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              +84 373 167 306
            </a>
          </div>
        </div>
        <div className="mt-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            cheotechstudio.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
