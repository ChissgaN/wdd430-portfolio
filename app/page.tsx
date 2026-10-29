import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Movie & TV Explorer',
    description: 'A web app for discovering the latest movies and TV shows, deployed on GitHub Pages.',
    technologies: ['JavaScript', 'Vite', 'Tailwind CSS', 'HTML'],
    link: 'https://github.com/ChissgaN/movieProject'
  },
  {
    title: 'Books API',
    description: 'A RESTful API built for CSE 341 that manages a collection of books stored in MongoDB.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    link: 'https://github.com/ChissgaN/cse341-books'
  },
  {
    title: 'SR Plantas',
    description: 'A website for a specialized agriculture business, deployed on Netlify.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    link: 'https://srplantas.netlify.app/'
  }
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack web developer from Guatemala learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ProjectList projects={projects} />
    </main>
  );
}
