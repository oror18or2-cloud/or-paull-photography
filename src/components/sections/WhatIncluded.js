export default function WhatIncluded() {
  const features = [
    { title: 'Professional Editing', description: 'Every image is professionally edited' },
    { title: 'Premium Prints', description: 'High-quality print options available' },
    { title: 'Digital Files', description: 'Full resolution digital copies provided' },
    { title: 'Consultation', description: 'Pre-session consultation included' }
  ];

  return (
    <section id="what-included" style={{ padding: '64px 48px', background: '#F5F1ED' }}>
      <div className="container">
        <h2 style={{ marginBottom: '48px', textAlign: 'center' }}>What's Included</h2>

        <div className="grid grid-4" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px'
        }}>
          {features.map((feature, idx) => (
            <div key={idx} className="card" style={{
              background: '#FAFAF8',
              border: '1px solid #E8D5D1',
              borderRadius: '4px',
              padding: '24px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '12px', fontSize: '18px' }}>{feature.title}</h3>
              <p style={{ color: '#A09A94', fontSize: '14px' }}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#3E3B39', marginBottom: '24px' }}>
            [Detailed information about what's included in each session type - this is a placeholder that you'll replace with your specific offerings]
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
