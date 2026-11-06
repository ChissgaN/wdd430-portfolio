import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav aria-label="Projects sections" className="mb-8 flex gap-4 border-b border-gray-300 pb-3">
        <Link href="/projects" className="text-blue-700 font-semibold hover:underline">Overview</Link>
        <Link href="/projects/opensource" className="text-blue-700 font-semibold hover:underline">Open Source</Link>
        <Link href="/projects/school" className="text-blue-700 font-semibold hover:underline">School</Link>
      </nav>
      {children}
    </main>
  );
}
