import { PROJECTS } from "@/lib/constants";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export default function ProjectDetailPage() {
  return <ProjectDetailClient />;
}
