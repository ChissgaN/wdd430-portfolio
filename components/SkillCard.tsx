interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <article className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
      <h3 className="text-lg font-bold text-blue-700 mb-3">{category}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-sm font-medium">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
