import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function RSVP() {
  const router = useRouter();
  const { event, date, location, rsvp } = router.query;

  return (
    <Layout>
      <h2>🎉 {event || 'Event Details'}</h2>
      {event ? (
        <div style={{ marginTop: '20px', textAlign: 'left', display: 'inline-block' }}>
          <p><strong>📅 Date:</strong> {date}</p>
          <p><strong>📍 Location:</strong> {location}</p>
          {rsvp && (
            <p><strong>🔗 RSVP:</strong> <a href={rsvp} target="_blank" rel="noopener noreferrer">{rsvp}</a></p>
          )}
        </div>
      ) : (
        <p>No event details provided.</p>
      )}
    </Layout>
  );
}