import ProjectList from '@/components/ProjectList';
import { fetchProjects } from '@/lib/fetch-projects';

export default async function OpenSourceProjects() {
  const projects = await fetchProjects('?type=opensource');

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Open Source Projects</h1>
      <ProjectList projects={projects} />
    </>
  );
}
