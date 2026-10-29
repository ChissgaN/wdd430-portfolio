import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <p id="header-title" className="text-2xl font-bold">Jairo Castro</p>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6 text-lg">
            <li><Link href="/" className="hover:underline focus:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline focus:underline">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
