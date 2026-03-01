"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { cn } from "@/lib/utils";

const navKeys = ["home", "projects", "about", "contact"] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="font-semibold text-foreground transition-colors hover:text-primary"
        >
          CheoTech Studio
        </Link>
        <nav className="flex items-center gap-6">
          {navKeys.map((key) => {
            const href = key === "home" ? "/" : `/#${key}`;
            const isActive =
              (key === "home" && pathname === "/") ||
              (key === "projects" && pathname.startsWith("/projects"));
            return (
              <Link
                key={key}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {t(key)}
              </Link>
            );
          })}
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
