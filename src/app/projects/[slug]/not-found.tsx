import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-bold">Project not found</h1>
      <p className="mt-2 text-muted-foreground">
        The project you’re looking for doesn’t exist or has been removed.
      </p>
      <Link
        href="/#projects"
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-all hover:scale-[1.02] hover:opacity-90"
      >
        Back to projects
      </Link>
    </div>
  );
}
