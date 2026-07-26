import { useState, useEffect } from 'react';
import GalleryCarousel from '@/components/GalleryCarousel';

export default function Galleries() {
  const [galleries, setGalleries] = useState([
    { id: 'maternity', title: 'צילומי הריון', images: [] },
    { id: 'maternity-outdoor', title: 'צילומי הריון בחוץ', images: [] },
    { id: 'newborn', title: 'צילומי ניובורן', images: [] }
  ]);

  useEffect(() => {
    const maternityImages = [
      '/images/maternity/WhatsApp Image 2026-07-26 at 12.28.55.jpeg',
      '/images/maternity/WhatsApp Image 2026-07-26 at 12.28.56 (2).jpeg',
      '/images/maternity/WhatsApp Image 2026-07-26 at 12.28.56.jpeg',
      '/images/maternity/WhatsApp Image 2026-07-26 at 12.28.57 (4).jpeg',
      '/images/maternity/WhatsApp Image 2026-07-26 at 12.29.06 (1).jpeg',
      '/images/maternity/WhatsApp Image 2026-07-26 at 12.29.12 (2).jpeg',
      '/images/maternity/WhatsApp Image 2026-07-26 at 12.29.12 (3).jpeg',
      '/images/maternity/WhatsApp Image 2026-07-26 at 12.29.12.jpeg',
      '/images/maternity/WhatsApp Image 2026-07-26 at 12.29.15 (2).jpeg',
      '/images/maternity/WhatsApp Image 2026-07-26 at 12.29.16 (2).jpeg'
    ];

    const maternityOutdoorImages = [
      '/images/maternity-outdoor/WhatsApp Image 2026-07-26 at 12.28.58 (1).jpeg',
      '/images/maternity-outdoor/WhatsApp Image 2026-07-26 at 12.28.58 (2).jpeg',
      '/images/maternity-outdoor/WhatsApp Image 2026-07-26 at 12.28.59 (2).jpeg',
      '/images/maternity-outdoor/WhatsApp Image 2026-07-26 at 12.29.10 (1).jpeg',
      '/images/maternity-outdoor/WhatsApp Image 2026-07-26 at 12.29.10.jpeg',
      '/images/maternity-outdoor/WhatsApp Image 2026-07-26 at 12.29.11 (1).jpeg',
      '/images/maternity-outdoor/WhatsApp Image 2026-07-26 at 12.29.11.jpeg',
      '/images/maternity-outdoor/WhatsApp Image 2026-07-26 at 12.29.19 (4).jpeg',
      '/images/maternity-outdoor/WhatsApp Image 2026-07-26 at 12.29.19 (5).jpeg',
      '/images/maternity-outdoor/WhatsApp Image 2026-07-26 at 12.29.19 (6).jpeg'
    ];

    const newbornImages = [
      '/images/newborn/WhatsApp Image 2026-07-26 at 12.29.00 (1).jpeg',
      '/images/newborn/WhatsApp Image 2026-07-26 at 12.29.00 (2).jpeg',
      '/images/newborn/WhatsApp Image 2026-07-26 at 12.29.00.jpeg',
      '/images/newborn/WhatsApp Image 2026-07-26 at 12.29.01 (1).jpeg',
      '/images/newborn/WhatsApp Image 2026-07-26 at 12.29.01 (2).jpeg',
      '/images/newborn/WhatsApp Image 2026-07-26 at 12.29.02 (1).jpeg',
      '/images/newborn/WhatsApp Image 2026-07-26 at 12.29.02.jpeg',
      '/images/newborn/WhatsApp Image 2026-07-26 at 12.29.03 (1).jpeg',
      '/images/newborn/WhatsApp Image 2026-07-26 at 12.29.03.jpeg'
    ];

    setGalleries([
      { id: 'maternity', title: 'צילומי הריון', images: maternityImages },
      { id: 'maternity-outdoor', title: 'צילומי הריון בחוץ', images: maternityOutdoorImages },
      { id: 'newborn', title: 'צילומי ניובורן', images: newbornImages }
    ]);
  }, []);

  return (
    <section id="galleries" style={{ padding: '64px 48px', background: '#FAFAF8' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          marginBottom: '64px',
          textAlign: 'center',
          fontSize: '28px',
          color: '#3E3B39',
          fontFamily: "'Segoe UI', sans-serif",
          fontWeight: '400'
        }}>
          גלריות צילום
        </h2>

        {galleries.map((gallery) => (
          <div key={gallery.id} className="gallery-container" style={{ marginBottom: '64px' }}>
            <h3 style={{
              fontSize: '24px',
              marginBottom: '32px',
              color: '#3E3B39',
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: '400',
              textAlign: 'right',
              direction: 'rtl'
            }}>
              {gallery.title}
            </h3>
            <GalleryCarousel images={gallery.images} />
          </div>
        ))}
      </div>
    </section>
  );
}
