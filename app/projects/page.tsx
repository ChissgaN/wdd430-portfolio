import ProjectList from '@/components/ProjectList';
import { fetchProjects } from '@/lib/fetch-projects';

export default async function ProjectsOverview() {
  const projects = await fetchProjects();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Projects Overview</h1>
      <ProjectList projects={projects} />
    </>
  );
}
