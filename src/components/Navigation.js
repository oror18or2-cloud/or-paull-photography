import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <h1 style={{ fontSize: '24px', margin: 0 }}>Or Paull Photography</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu" style={{ display: mobileMenuOpen ? 'none' : 'flex' }}>
          <li><a href="#galleries" onClick={() => scrollToSection('galleries')}>Galleries</a></li>
          <li><a href="#pricing" onClick={() => scrollToSection('pricing')}>Pricing</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        {/* WhatsApp CTA Button */}
        <a href="https://wa.me/972509998421?text=הייי רציתי לשמוע פרטים על הצילומים" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          WhatsApp
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: 'none' }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="nav-menu-mobile" style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
          gap: '8px'
        }}>
          <li><a href="#galleries" onClick={() => scrollToSection('galleries')}>Galleries</a></li>
          <li><a href="#pricing" onClick={() => scrollToSection('pricing')}>Pricing</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      )}

      <style jsx>{`
        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 16px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
        }

        .nav-menu {
          list-style: none;
          display: flex;
          gap: 24px;
          margin: 0;
        }

        .nav-menu a {
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 12px 16px;
            gap: 16px;
          }

          .nav-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
