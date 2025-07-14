import Head from 'next/head';
import Header from '../components/Header';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const COLORS = ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'];

export default function DataPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Data – Politika 2.0</title>
      </Head>

      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-4">Rozpočty krajů (2023)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { name: 'Praha', rozpočet: 85 },
              { name: 'Středočeský', rozpočet: 60 },
              { name: 'Jihomoravský', rozpočet: 55 },
              { name: 'Moravskoslezský', rozpočet: 52 },
              { name: 'Plzeňský', rozpočet: 40 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="rozpočet" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Počet přijatých zákonů (2019–2023)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[
              { year: 2019, count: 85 },
              { year: 2020, count: 90 },
              { year: 2021, count: 110 },
              { year: 2022, count: 95 },
              { year: 2023, count: 120 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Struktura výdajů státního rozpočtu (2023)</h2>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Tooltip />
              <Legend align="center" verticalAlign="bottom" layout="horizontal" />
              <Pie
                data={[
                  { name: 'Školství', value: 15 },
                  { name: 'Zdravotnictví', value: 14 },
                  { name: 'Sociální dávky', value: 28 },
                  { name: 'Obrana', value: 19 },
                  { name: 'Infrastruktura', value: 24 },
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {[
                  { name: 'Školství', value: 15 },
                  { name: 'Zdravotnictví', value: 14 },
                  { name: 'Sociální dávky', value: 28 },
                  { name: 'Obrana', value: 19 },
                  { name: 'Infrastruktura', value: 24 },
                ].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
}
