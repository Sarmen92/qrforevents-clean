import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Layout from '../../components/Layout';

export default function Baby() {
  const [formData, setFormData] = useState({ name: '', date: '', location: '', rsvp: '' });
  const [qrValue, setQrValue] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateQR = () => {
    let rsvpLink = formData.rsvp.trim();
    if (rsvpLink && !/^https?:\/\//i.test(rsvpLink)) {
      rsvpLink = `https://${rsvpLink}`;
    }
    const urlParams = new URLSearchParams({
      event: formData.name,
      date: formData.date,
      location: formData.location,
      rsvp: rsvpLink,
    });
    setQrValue(`${window.location.origin}/rsvp?${urlParams.toString()}`);
  };

  return (
    <Layout>
      <h1>Baby Event</h1>
      <input name="name" placeholder="Event Name" value={formData.name} onChange={handleChange} />
      <input name="date" placeholder="Date" value={formData.date} onChange={handleChange} />
      <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
      <input name="rsvp" placeholder="RSVP Link" value={formData.rsvp} onChange={handleChange} />
      <button onClick={generateQR}>Generate QR</button>
      {qrValue && <QRCodeCanvas value={qrValue} size={200} />}
    </Layout>
  );
}
