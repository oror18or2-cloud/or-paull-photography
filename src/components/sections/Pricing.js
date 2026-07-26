import { useState, useEffect } from 'react';

export default function Pricing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="pricing" style={{ padding: '60px 48px', background: '#FAFAF8' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '28px',
          marginBottom: '60px',
          color: '#3E3B39',
          fontFamily: "'Segoe UI', sans-serif",
          fontWeight: '400',
          textAlign: 'center'
        }}>
          Pricing
        </h2>

        <div className="pricing-grid" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          margin: '0 auto'
        }}>
          {/* Card 1 */}
          <div className="pricing-card" style={{
            border: '1px solid #D4C4B9',
            borderRadius: '8px',
            padding: '40px',
            background: '#FAFAF8',
            textAlign: 'right',
            direction: 'rtl',
            flex: '1 1 calc(33.333% - 22px)',
          }}>
            <h3 style={{
              fontSize: '18px',
              marginBottom: '8px',
              color: '#3E3B39',
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: '500',
              margin: '0 0 8px 0'
            }}>
              צילומים בסטודיו (₪1,200)
            </h3>
            <div style={{
              fontSize: '15px',
              lineHeight: '2',
              color: '#3E3B39',
              direction: 'rtl',
              textAlign: 'right'
            }}>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>סשן צילום בן שעה</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>מינימום 80 תמונות מעובדות באופן מקצועי</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>עד 3 החלפות ביגוד</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>גלריה מעובדת תוך 21 ימי עסקים</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>גלריה פרטית לצפייה והורדה</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>דמי הזמנה נדרשים, היתרה בתשלום לאחר הצילום</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="pricing-card" style={{
            border: '2px solid #5C4A42',
            borderRadius: '8px',
            padding: isMobile ? '24px 16px' : '40px',
            background: '#FAFAF8',
            textAlign: 'right',
            direction: 'rtl',
            position: 'relative',
            transform: isMobile ? 'scale(1)' : 'scale(1.05)',
            flex: '1 1 calc(33.333% - 22px)',
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '20px',
              background: '#5C4A42',
              color: '#FAFAF8',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              Most Popular
            </div>
            <h3 style={{
              fontSize: '18px',
              marginBottom: '8px',
              color: '#3E3B39',
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: '500',
              marginTop: '16px',
              margin: '16px 0 8px 0'
            }}>
              צילומים בחוץ (₪1,000)
            </h3>
            <div style={{
              fontSize: '15px',
              lineHeight: '2',
              color: '#3E3B39',
              direction: 'rtl',
              textAlign: 'right'
            }}>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>סשן צילום בן שעה</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>מינימום 80 תמונות מעובדות באופן מקצועי</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>עד 3 החלפות ביגוד</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>גלריה מעובדת תוך 21 ימי עסקים</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>גלריה פרטית לצפייה והורדה</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>דמי הזמנה נדרשים, היתרה בתשלום לאחר הצילום</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="pricing-card" style={{
            border: '1px solid #D4C4B9',
            borderRadius: '8px',
            padding: '40px',
            background: '#FAFAF8',
            textAlign: 'right',
            direction: 'rtl',
            flex: '1 1 calc(33.333% - 22px)',
          }}>
            <h3 style={{
              fontSize: '18px',
              marginBottom: '8px',
              color: '#3E3B39',
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: '500',
              margin: '0 0 8px 0'
            }}>
              צילומים בבית (₪800)
            </h3>
            <div style={{
              fontSize: '15px',
              lineHeight: '2',
              color: '#3E3B39',
              direction: 'rtl',
              textAlign: 'right'
            }}>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>סשן צילום בן שעה</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>מינימום 80 תמונות מעובדות באופן מקצועי</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>עד 3 החלפות ביגוד</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>גלריה מעובדת תוך 21 ימי עסקים</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>גלריה פרטית לצפייה והורדה</p>
              <p style={{ margin: '8px 0', textAlign: 'right' }}>דמי הזמנה נדרשים, היתרה בתשלום לאחר הצילום</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
