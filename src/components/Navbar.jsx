import { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position (only on home page)
      if (location.pathname === '/') {
        const sections = ['about', 'services', 'products', 'why-us'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="navbar" className={`${scrolled || location.pathname !== '/' ? 'scrolled' : ''} ${isMenuOpen ? 'mobile-active' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo" onClick={() => handleLinkClick('')}> 
          <img src="/assets/images/logo.png" alt="Tesseract Logo" />
          <span className="brand-name">
            <span className="brand-first">Tesseract</span>
            <span className="brand-second">Labz</span>
          </span>
        </Link>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a 
              href="/#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => handleLinkClick('about')}
            >About</a>
          </li>
          <li>
            <a 
              href="/#services" 
              className={activeSection === 'services' ? 'active' : ''}
              onClick={() => handleLinkClick('services')}
            >Services</a>
          </li>
          <li>
            <a 
              href="/#products" 
              className={activeSection === 'products' ? 'active' : ''}
              onClick={() => handleLinkClick('products')}
            >Products</a>
          </li>
          <li>
            <a 
              href="/#why-us" 
              className={activeSection === 'why-us' ? 'active' : ''}
              onClick={() => handleLinkClick('why-us')}
            >Why Us</a>
          </li>
          <li><a href="/#contact" className="btn btn-primary nav-get-started" onClick={() => handleLinkClick('contact')}>Get Started</a></li>
        </ul>
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
