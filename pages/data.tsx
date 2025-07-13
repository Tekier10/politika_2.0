import Head from 'next/head';
import Link from 'next/link';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, Legend,
  LineChart, Line
} from 'recharts';

const dataRozpocty = [
  { name: 'Praha', rozpocet: 102 },
  { name: 'JMK', rozpocet: 88 },
  { name: 'Moravskoslezský', rozpocet: 91 },
  { name: 'Středočeský', rozpocet: 86 },
  { name: 'Plzeňský', rozpocet: 54 },
  { name: 'Liberecký', rozpocet: 49 },
  { name: 'Zlínský', rozpocet: 47 }
];

const dataZakon = [
  { year: '2014', zakony: 91 },
  { year: '2015', zakony: 104 },
  { year: '2016', zakony: 97 },
  { year: '2017', zakony: 78 },
  { year: '2018', zakony: 88 },
  { year: '2019', zakony: 95 },
  { year: '2020', zakony: 112 },
  { year: '2021', zakony: 106 },
  { year: '2022', zakony: 98 },
  { year: '2023', zakony: 85 }
];

export default function DataPage() {
  return (
    <>
      <Head>
        <title>Data – Politika 2.0</title>
        <meta name="description" content="Interaktivní přehled dat veřejné správy." />
      </Head>
      <Header />
      <main className="min-h-screen bg-white text-gray-900 px-6 py-12 space-y-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Veřejná data</h1>
            <Link href="/" className="text-blue-600 hover:underline text-sm">
              ← Zpět na domovskou stránku
            </Link>
          </div>

          {/* Sloupcový graf */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Rozpočty krajů (2023)</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={dataRozpocty} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit=" mld" />
                <Tooltip />
                <Legend />
                <Bar dataKey="rozpocet" fill="#3b82f6" name="Rozpočet (mld Kč)" />
              </BarChart>
            </ResponsiveContainer>
          </section>

          {/* Line graf */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Počet schválených zákonů (2014–2023)</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={dataZakon} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="zakony" stroke="#10b981" name="Zákony" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </section>
        </div>
      </main>
    </>
  );
}
