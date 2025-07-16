export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
      <header>
        <h1>🎉 QRforEvents</h1>
        <p>Create event QR codes & RSVP pages</p>
      </header>
      <main style={{ marginTop: '20px' }}>{children}</main>
    </div>
  );
}