import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function RSVP() {
  const router = useRouter();
  const { event, date, location, rsvp } = router.query;

  return (
    <Layout>
      <h1>🎉 {event || 'Event Details'}</h1>
      {date && <p><strong>📅 Date:</strong> {date}</p>}
      {location && <p><strong>📍 Location:</strong> {location}</p>}
      {rsvp ? (
        <p>
          <a href={rsvp} target="_blank" rel="noopener noreferrer">
            ✅ RSVP Now
          </a>
        </p>
      ) : (
        <p>No RSVP link provided.</p>
      )}
    </Layout>
  );
}
