import ProjectList from '@/components/ProjectList';
import { fetchProjects } from '@/lib/fetch-projects';

export default async function SchoolProjects() {
  const projects = await fetchProjects('?type=school');

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">School Projects</h1>
      <ProjectList projects={projects} />
    </>
  );
}
