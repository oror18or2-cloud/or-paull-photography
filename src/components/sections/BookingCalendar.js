import { useState } from 'react';

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 6)); // July 2026

  const hebrewMonths = [
    'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
    'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
  ];

  const hebrewDays = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
  const hebrewDaysShort = ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'];

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleDateSelect = (day) => {
    if (day) {
      const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      setSelectedDate(selected);
    }
  };

  return (
    <section style={{ padding: '64px 24px', background: '#FAFAF8' }}>
      <div className="container" style={{ maxWidth: '100%', margin: '0 auto', padding: '0' }}>
        <h2 style={{
          marginBottom: '48px',
          textAlign: 'center',
          fontSize: '28px',
          color: '#3E3B39',
          fontFamily: "'Segoe UI', sans-serif",
          fontWeight: '400',
          direction: 'rtl'
        }}>
          בחירת תאריך
        </h2>

        <div className="booking-calendar" style={{
          background: '#FAFAF8',
          border: '1px solid #E8D5D1',
          borderRadius: '4px',
          padding: '24px',
          textAlign: 'center',
          maxWidth: '100%',
          overflow: 'hidden'
        }}>
          {/* Month Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px'
          }}>
            <button
              onClick={prevMonth}
              style={{
                background: '#D4C4B9',
                color: '#FAFAF8',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              ← הקודם
            </button>

            <h3 style={{
              fontSize: '28px',
              color: '#5C4A42',
              fontFamily: "'Playfair Display', Georgia, serif",
              margin: 0,
              fontWeight: '400',
              letterSpacing: '1px'
            }}>
              {hebrewMonths[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>

            <button
              onClick={nextMonth}
              style={{
                background: '#D4C4B9',
                color: '#FAFAF8',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              הבא →
            </button>
          </div>

          {/* Day Headers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '4px',
            marginBottom: '16px'
          }}>
            {hebrewDaysShort.map((day, idx) => (
              <div
                key={idx}
                style={{
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#5C4A42',
                  textAlign: 'center',
                  padding: '12px 0',
                  fontFamily: "'Segoe UI', sans-serif"
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '4px',
            marginBottom: '32px'
          }}>
            {days.map((day, idx) => (
              <button
                key={idx}
                onClick={() => handleDateSelect(day)}
                disabled={!day}
                style={{
                  padding: '8px',
                  background: day ? '#FAFAF8' : 'transparent',
                  border: day && selectedDate?.getDate() === day ? '2px solid #5C4A42' : '1px solid #E8D5D1',
                  borderRadius: '4px',
                  cursor: day ? 'pointer' : 'default',
                  fontSize: '14px',
                  fontWeight: '400',
                  color: day ? '#3E3B39' : 'transparent',
                  transition: 'all 200ms',
                  backgroundColor: day && selectedDate?.getDate() === day ? '#D4C4B9' : '#FAFAF8',
                  fontFamily: "'Playfair Display', Georgia, serif"
                }}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Selected Date Display */}
          <div style={{
            background: '#F5F1ED',
            padding: '24px',
            borderRadius: '4px',
            marginBottom: '32px',
            textAlign: 'right',
            direction: 'rtl'
          }}>
            {selectedDate ? (
              <div>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#5C4A42',
                  marginBottom: '8px'
                }}>
                  התאריך שנבחר:
                </p>
                <p style={{
                  fontSize: '18px',
                  color: '#3E3B39',
                  fontWeight: '700'
                }}>
                  {hebrewDays[selectedDate.getDay()]} {selectedDate.getDate()} {hebrewMonths[selectedDate.getMonth()]} {selectedDate.getFullYear()}
                </p>
              </div>
            ) : (
              <p style={{ fontSize: '16px', color: '#5C4A42' }}>
                אנא בחרו תאריך לפגישה
              </p>
            )}
          </div>

          {/* Booking Info */}
          <div style={{
            textAlign: 'right',
            padding: '24px',
            borderTop: '1px solid #E8D5D1',
            direction: 'rtl'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#A09A94',
              marginBottom: '16px',
              lineHeight: '1.8'
            }}>
              בחרו תאריך שנוח לכם. כדי להשלים את ההזמנה, צרו קשר דרך הטופס בהמשך או שלחו הודעה ב-WhatsApp.
            </p>

            {selectedDate && (
              <a
                href={`https://wa.me/?text=הייי רציתי לשמוע פרטים על הצילומים. התאריך המועדף לי: ${selectedDate.getDate()} ${hebrewMonths[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  background: '#5C4A42',
                  color: '#FAFAF8',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  marginTop: '16px'
                }}
              >
                שלח הודעה ל-WhatsApp
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
