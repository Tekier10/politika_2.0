import Head from 'next/head';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const data = [
  { name: 'Praha', rozpocet: 102 },
  { name: 'JMK', rozpocet: 88 },
  { name: 'Moravskoslezský', rozpocet: 91 },
  { name: 'Středočeský', rozpocet: 86 },
  { name: 'Plzeňský', rozpocet: 54 },
  { name: 'Liberecký', rozpocet: 49 },
  { name: 'Zlínský', rozpocet: 47 }
];

export default function DataPage() {
  return (
    <>
      <Head>
        <title>Data – Politika 2.0</title>
        <meta name="description" content="Interaktivní přehled dat veřejné správy." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Rozpočty krajů (2023)</h1>
        <div className="w-full max-w-4xl mx-auto">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis unit=" mld" />
              <Tooltip />
              <Legend />
              <Bar dataKey="rozpocet" fill="#3b82f6" name="Rozpočet (mld Kč)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </>
  );
}
