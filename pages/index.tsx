
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-900 flex flex-col">
      <Head>
        <title>POLITIKA 2.0</title>
        <meta name="description" content="Politika, která myslí." />
      </Head>

      <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm bg-white sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">POLITIKA 2.0</h1>
        </div>
        <a href="#manifest" className="text-sm text-blue-600 hover:underline">
          Přejít na manifest
        </a>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 max-w-2xl">
          Politika, která myslí a která se rozvíjí. 
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mb-8">
          Přepisujeme fungování veřejné správy. Na základě dat, otevřenosti a reálné participace občanů. XXXX2
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
          <h2 className="text-3xl font-bold text-center">Manifest</h2>
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
