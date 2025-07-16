import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h2>Select an Event Type</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link href="/events/baby">👶 Baby Shower</Link></li>
        <li><Link href="/events/wedding">💍 Wedding</Link></li>
        <li><Link href="/events/birthday">🎂 Birthday</Link></li>
        <li><Link href="/events/business">💼 Business Event</Link></li>
      </ul>
    </Layout>
  );
}