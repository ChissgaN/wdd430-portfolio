import SkillCard from '@/components/SkillCard';

const skillGroups = [
  { category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'PHP', 'REST APIs'] },
  { category: 'Other', skills: ['Python', 'C#', 'Dart', 'Git', 'GitHub'] }
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-8">
        I&apos;m Jairo Castro, a junior full-stack web developer from Quetzaltenango, Guatemala. I work as a
        freelancer, enjoy programming, and try to learn something new every day.
      </p>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <section aria-label="Skills" className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillCard key={group.category} category={group.category} skills={group.skills} />
        ))}
      </section>
    </main>
  );
}
