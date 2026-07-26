export default function PhotoDelivery() {
  const steps = [
    { number: 1, title: 'Session Complete', description: 'Photos are captured and securely stored' },
    { number: 2, title: 'Professional Editing', description: 'Images are carefully edited and enhanced' },
    { number: 3, title: 'Selection Process', description: 'Best shots are selected for delivery' },
    { number: 4, title: 'Download Ready', description: 'Access your photos via secure online gallery' }
  ];

  return (
    <section id="photo-delivery" style={{ padding: '64px 48px', background: '#F5F1ED' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '48px', textAlign: 'center' }}>How You'll Receive Your Photos</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          marginBottom: '48px'
        }}>
          {steps.map((step) => (
            <div key={step.number} style={{
              textAlign: 'center',
              padding: '24px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#D4C4B9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#5C4A42',
                margin: '0 auto 16px'
              }}>
                {step.number}
              </div>
              <h3 style={{ marginBottom: '8px', fontSize: '18px' }}>{step.title}</h3>
              <p style={{ color: '#A09A94', fontSize: '14px' }}>{step.description}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: '#FAFAF8',
          border: '1px solid #E8D5D1',
          borderRadius: '4px',
          padding: '32px',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '16px' }}>Timeline</h3>
          <p style={{ fontSize: '16px', color: '#3E3B39', marginBottom: '16px' }}>
            [Details about when photos will be ready - turnaround time, delivery method, and any specific information about your photo delivery process]
          </p>
          <p style={{ fontSize: '14px', color: '#A09A94' }}>
            All files are securely delivered via private online gallery
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
