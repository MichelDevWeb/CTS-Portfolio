import { ProjectsGrid } from "@/components/sections/projects-grid";

export const metadata = {
  title: "Projects | CheoTech Studio",
  description:
    "Browse our projects — websites, mobile apps, Chrome extensions, and games.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-8">
      <ProjectsGrid />
    </div>
  );
}
