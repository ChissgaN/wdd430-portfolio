// Simple in-memory data module. It stands in for a real database.

export type ProjectType = 'opensource' | 'school';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  type: ProjectType;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Movie & TV Explorer',
    description: 'A web app for discovering the latest movies and TV shows, deployed on GitHub Pages.',
    technologies: ['JavaScript', 'Vite', 'Tailwind CSS', 'HTML'],
    link: 'https://github.com/ChissgaN/movieProject',
    type: 'opensource',
  },
  {
    id: 2,
    title: 'Books API',
    description: 'A RESTful API built for CSE 341 that manages a collection of books stored in MongoDB.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    link: 'https://github.com/ChissgaN/cse341-books',
    type: 'school',
  },
  {
    id: 3,
    title: 'WDD 430 Portfolio',
    description: 'This portfolio, built for WDD 430 with nested layouts and API routes.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/ChissgaN/wdd430-portfolio',
    type: 'school',
  },
];

export function getProjects(type?: string | null): Project[] {
  return type ? projects.filter((project) => project.type === type) : projects;
}

export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}
