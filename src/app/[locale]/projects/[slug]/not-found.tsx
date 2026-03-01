"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function ProjectNotFound() {
  const t = useTranslations("projectNotFound");
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <p className="mt-2 text-muted-foreground">{t("description")}</p>
      <Link
        href="/#projects"
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-all hover:scale-[1.02] hover:opacity-90"
      >
        {t("back")}
      </Link>
    </div>
  );
}
