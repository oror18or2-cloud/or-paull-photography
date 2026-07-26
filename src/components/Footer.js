export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#5C4A42',
      color: '#FAFAF8',
      padding: '48px',
      textAlign: 'center'
    }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p style={{
          fontSize: '18px',
          marginBottom: '8px',
          fontFamily: "'Segoe UI', sans-serif",
          fontWeight: '500'
        }}>
          Or Paull Photography
        </p>
        <p style={{
          fontSize: '14px',
          marginBottom: '32px',
          fontFamily: "'Segoe UI', sans-serif",
          color: '#D4C4B9',
          direction: 'rtl'
        }}>
          Or Paull | צלמת הריון ומשפחה
        </p>
        <div style={{
          borderTop: '1px solid #D4C4B9',
          paddingTop: '24px',
          fontSize: '12px',
          color: '#D4C4B9',
          direction: 'rtl',
          textAlign: 'right'
        }}>
          <p style={{ marginBottom: '8px', margin: '0 0 8px 0' }}>
            © {currentYear} Or Paull Photography. כל הזכויות שמורות.
          </p>
          <p style={{ margin: '0' }}>
            אתר זה מכיל תמונות אמנותיות של צילומי הריון, ניובורן ומשפחה.
          </p>
        </div>
      </div>
    </footer>
  );
}
