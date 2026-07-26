import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: '[Your answer about booking timeline]'
    },
    {
      question: 'What is your cancellation policy?',
      answer: '[Your cancellation policy details]'
    },
    {
      question: 'Can I reschedule my session?',
      answer: '[Your rescheduling policy]'
    },
    {
      question: 'Do you offer rush processing?',
      answer: '[Information about rush options and costs]'
    },
    {
      question: 'What format will my photos be in?',
      answer: '[Details about file formats and delivery]'
    },
    {
      question: 'Do you offer prints?',
      answer: '[Information about print options and pricing]'
    }
  ];

  return (
    <section id="faq" style={{ padding: '64px 48px', background: '#F5F1ED' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '48px', textAlign: 'center' }}>Frequently Asked Questions</h2>

        <div>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{
              border: '1px solid #E8D5D1',
              borderRadius: '4px',
              marginBottom: '16px',
              overflow: 'hidden',
              background: '#FAFAF8'
            }}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#3E3B39',
                  transition: 'background 200ms'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#F5F1ED'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
              >
                {faq.question}
                <span style={{ fontSize: '20px', marginLeft: '16px' }}>
                  {openIndex === idx ? '▼' : '▶'}
                </span>
              </button>

              {openIndex === idx && (
                <div style={{
                  padding: '16px 24px',
                  borderTop: '1px solid #E8D5D1',
                  background: '#FAFAF8',
                  color: '#3E3B39',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '48px',
          textAlign: 'center',
          padding: '32px',
          background: '#FAFAF8',
          borderRadius: '4px'
        }}>
          <p style={{ marginBottom: '16px', color: '#3E3B39' }}>
            Have other questions?
          </p>
          <a
            href="https://wa.me/?text=Hi%20Or%20Paull%20Photography!%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#5C4A42',
              color: '#FAFAF8',
              borderRadius: '4px',
              textDecoration: 'none'
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
