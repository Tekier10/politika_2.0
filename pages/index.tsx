import Header from '../components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 max-w-2xl">
           Přišel čas na upgrade.
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mb-8">
           Pomozme dostat politické prostředí do 21. století.
        </p>
        <a
          href="#manifest"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 shadow-md transition"
        >
          📖 Zobrazit manifest
        </a>
      </main>

      <section id="manifest" className="px-6 py-20 bg-gray-50 border-t">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">Co chceme</h2>
          <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
            <p>
              Politika se odpojila od reality. Rozhodnutí se dělají pocitem, ne fakty. Stát funguje, jako kdyby 21. století nezačalo.
            </p>
            <p>
              Politika 2.0 je návrat k racionálnímu, otevřenému a férovému systému. Chceme politiku založenou na datech, transparentnost v reálném čase a účast občanů jako spolutvůrců.
            </p>
            <p>
              Politika může být jako open-source projekt. My ho chceme začít psát.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-sm text-center text-gray-500 py-6 border-t mt-auto">
        © {new Date().getFullYear()} Politika 2.0 – otevřený návrh pro budoucnost veřejné správy.
      </footer>
    </div>
  );
}
