
import { Envelope, Phone } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="/assets/images/logo.png" alt="Tesseract Logo" />
              <span className="brand-name">
                <span className="brand-main">Tesseract</span>
                <span className="brand-sub">Labz</span>
              </span>
            </a>
            <p>Engineering the future with IoT, Embedded Systems, and AI.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <Envelope size={18} />
                <a href="mailto:tesseractlabz@gmail.com">tesseractlabz@gmail.com</a>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:0762620233">0762620233</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Tesseract Labz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
