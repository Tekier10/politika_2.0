import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>Politika 2.0</title>
        <meta name="description" content="Politika, která myslí." />
      </Head>
      <main className="flex flex-col items-center justify-center py-16 px-4">
        <img src="/logo.png" alt="Politika 2.0 logo" className="w-32 mb-6" />
        <h1 className="text-4xl font-bold text-center">Politika 2.0</h1>
        <p className="mt-4 text-center max-w-xl">
          Politika založená na datech, otevřenosti a participaci. Přepisujeme pravidla systému tak, aby fungoval pro všechny – transparentně, efektivně a s důrazem na realitu.
        </p>
        <a href="#manifest" className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">Zjistit víc</a>
      </main>

      <section id="manifest" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Manifest</h2>
          <p className="mb-4">
            Politika se odpojila od reality. Rozhodnutí se dělají pocitem, ne fakty. Stát funguje, jako kdyby 21. století nezačalo.
          </p>
          <p className="mb-4">
            Politika 2.0 je návrat k racionálnímu, otevřenému a férovému systému. Chceme politiku založenou na datech, transparentnost v reálném čase a účast občanů jako spolutvůrců.
          </p>
          <p>
            Politika může být jako open-source projekt. My ho chceme začít psát.
          </p>
        </div>
      </section>
    </div>
  );
}
