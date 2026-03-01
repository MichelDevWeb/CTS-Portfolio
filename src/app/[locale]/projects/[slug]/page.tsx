import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  const t = await getTranslations({ locale, namespace: "metadata" });
  if (!project) return { title: t("projectNotFound") };
  return {
    title: `${project.title} | CheoTech Studio`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations("projectDetail");

  return (
    <article className="container mx-auto px-4 py-12 md:py-20">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("backToProjects")}
      </Link>

      <header className="mb-8">
        <span className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium capitalize text-muted-foreground">
          {project.type}
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {project.title}
        </h1>
        {project.year && (
          <p className="mt-2 text-muted-foreground">{project.year}</p>
        )}
      </header>

      <div className="group relative mb-10 aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-[object-position] duration-1000 ease-out group-hover:object-bottom"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground">
          {project.shortDescription}
        </p>
        <p className="mt-4 whitespace-pre-line text-foreground">
          {project.longDescription}
        </p>
      </div>

      {project.tags.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-foreground">
            {t("techTools")}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.links.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-all hover:scale-[1.02] hover:opacity-90"
            >
              {link.label}
              <ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
