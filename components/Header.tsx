import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-gradient-to-r from-white to-sky-50 shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg text-gray-800">Politika 2.0</span>
        </div>
        <nav className="space-x-4">
          <Link
            href="/manifest"
            className="text-sm text-blue-600 hover:bg-blue-100 hover:text-blue-800 px-3 py-1 rounded transition"
          >
            Manifest
          </Link>
          <Link
            href="/data"
            className="text-sm text-blue-600 hover:bg-blue-100 hover:text-blue-800 px-3 py-1 rounded transition"
          >
            Data
          </Link>
        </nav>
      </div>
    </header>
  );
}
