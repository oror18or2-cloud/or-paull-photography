import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('אנא הזן שם');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('אנא הזן אימייל');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('אנא הזן אימייל תקין');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('אנא הזן טלפון');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('אנא הזן הודעה');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      return;
    }

    setFormStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xyzpqr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _captcha: false
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
        setErrorMessage('שגיאה בשליחה, אנא נסה שוב');
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('שגיאה בשליחה, אנא נסה דרך WhatsApp');
    }
  };

  return (
    <section id="contact" style={{ padding: '60px 48px', background: '#FAFAF8' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'right', direction: 'rtl' }}>
        <h2 style={{
          fontSize: '28px',
          marginBottom: '48px',
          color: '#3E3B39',
          fontFamily: "'Segoe UI', sans-serif",
          fontWeight: '400',
          textAlign: 'center'
        }}>
          צור קשר
        </h2>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '48px', direction: 'ltr' }}>
          <a
            href="https://wa.me/972509998421?text=הייי רציתי לשמוע פרטים על הצילומים"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 24px',
              background: '#5C4A42',
              color: '#FAFAF8',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/orpaulphotography"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 24px',
              background: '#5C4A42',
              color: '#FAFAF8',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            Instagram
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '24px' }}>
            <label htmlFor="name" style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#3E3B39',
              textAlign: 'right',
              fontFamily: "'Segoe UI', sans-serif"
            }}>
              שם
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #D4C4B9',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: "'Segoe UI', sans-serif",
                direction: 'rtl'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label htmlFor="email" style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#3E3B39',
              textAlign: 'right'
            }}>
              אימייל
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #D4C4B9',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: "'Segoe UI', sans-serif",
                direction: 'ltr'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label htmlFor="phone" style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#3E3B39',
              textAlign: 'right'
            }}>
              טלפון
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #D4C4B9',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: "'Segoe UI', sans-serif",
                direction: 'ltr'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label htmlFor="message" style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#3E3B39',
              textAlign: 'right'
            }}>
              הודעה
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #D4C4B9',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: "'Segoe UI', sans-serif",
                minHeight: '120px',
                resize: 'vertical',
                direction: 'rtl'
              }}
            />
          </div>

          {errorMessage && (
            <div style={{
              padding: '12px 16px',
              background: '#ffebee',
              color: '#c62828',
              borderRadius: '4px',
              marginBottom: '24px',
              fontSize: '14px',
              textAlign: 'right'
            }}>
              {errorMessage}
            </div>
          )}

          {formStatus === 'success' && (
            <div style={{
              padding: '12px 16px',
              background: '#e8f5e9',
              color: '#2e7d32',
              borderRadius: '4px',
              marginBottom: '24px',
              fontSize: '14px',
              textAlign: 'right'
            }}>
              תודה! נחזור אליך בקרוב
            </div>
          )}

          <button
            type="submit"
            disabled={formStatus === 'loading'}
            style={{
              width: '100%',
              padding: '12px 24px',
              background: formStatus === 'loading' ? '#D4C4B9' : '#5C4A42',
              color: '#FAFAF8',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: formStatus === 'loading' ? 'not-allowed' : 'pointer',
              transition: 'background 200ms'
            }}
          >
            {formStatus === 'loading' ? 'שולח...' : 'שלח'}
          </button>
        </form>
      </div>
    </section>
  );
}
