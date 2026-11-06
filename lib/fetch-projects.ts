import type { Project } from './projects-db';

// Server Components need an absolute URL. Set SITE_URL when deploying.
const baseUrl = process.env.SITE_URL ?? 'http://localhost:3000';

// no-store renders at request time, so the build doesn't need the API running.
export async function fetchProjects(query = ''): Promise<Project[]> {
  const response = await fetch(`${baseUrl}/api/projects${query}`, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status}`);
  }

  return response.json();
}
