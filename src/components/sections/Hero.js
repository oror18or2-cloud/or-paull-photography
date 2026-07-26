export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <img
        src="/images/WhatsApp Image 2026-07-26 at 12.28.56 (1).jpeg"
        alt="Or Paull Photography - Professional Maternity Photography"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'left 30%',
          transform: 'scaleX(-1)',
          zIndex: 0
        }}
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }} />
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '700px',
        padding: '48px',
        direction: 'rtl'
      }}>
        <h1 style={{
          fontSize: '48px',
          color: '#FAFAF8',
          fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
          fontWeight: '300',
          lineHeight: '1.8',
          letterSpacing: '1px'
        }}>
          מתעדת אהבה, משפחה ורגעים שלא חוזרים
        </h1>
      </div>
    </section>
  );
}
