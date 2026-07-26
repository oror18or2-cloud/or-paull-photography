export default function HowToPrepare() {
  const tips = [
    'Wear comfortable, neutral-toned clothing',
    'Get plenty of rest the night before',
    'Plan for 2-3 hours for the session',
    'Bring any props or ideas you have',
    'Arrive 15 minutes early to relax'
  ];

  return (
    <section id="how-to-prepare" style={{ padding: '64px 48px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '48px', textAlign: 'center' }}>Prepare for Your Session</h2>

        <ol style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {tips.map((tip, idx) => (
            <li key={idx} style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '24px',
              padding: '16px',
              background: '#F5F1ED',
              borderRadius: '4px'
            }}>
              <span style={{
                flex: '0 0 32px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#5C4A42',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                {idx + 1}
              </span>
              <span style={{ fontSize: '16px', lineHeight: '1.6' }}>{tip}</span>
            </li>
          ))}
        </ol>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#3E3B39' }}>
            [Additional preparation tips and guidelines specific to your session types - this placeholder will be replaced with your detailed guidance]
          </p>
        </div>
      </div>
    </section>
  );
}
