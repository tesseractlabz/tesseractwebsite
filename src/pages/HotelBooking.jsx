
import { motion } from 'framer-motion';
import { ArrowLeft, DeviceMobile, Globe, Calendar, User, CreditCard } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const HotelBooking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-detail-page">
      <section className="product-hero hotel-hero">
        <div className="container">
          <Link to="/" className="back-btn">
            <ArrowLeft size={20} weight="bold" /> Back to Home
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="product-title">LuxeStay: Hotel Booking Platform</h1>
            <div className="tech-tags large">
              <span className="tech-tag">React</span>
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">HTML5</span>
              <span className="tech-tag">CSS3</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="product-video-section">
        <div className="container">
          <motion.div 
            className="video-container-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <video controls autoPlay muted loop className="featured-video">
              <source src="/assets/images/hotel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>

      <section className="product-content section">
        <div className="container">
          <div className="product-details-grid">
            <motion.div 
              className="info-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Overview</h3>
              <p>
                Modern frontend implementation for a hotel booking platform. LuxeStay provides a seamless and intuitive user interface for travelers to discover, explore, and book luxury accommodations worldwide.
              </p>
            </motion.div>

            <div className="features-grid">
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="feature-icon"><Globe size={32} /></div>
                <h4>Responsive Web App</h4>
                <p>Fully responsive web interface built with React for a consistent experience across all screen sizes.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="feature-icon"><DeviceMobile size={32} /></div>
                <h4>Mobile First</h4>
                <p>Designed with a mobile-first approach, utilizing React Native for potential cross-platform app deployment.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="feature-icon"><Calendar size={32} /></div>
                <h4>Smart Booking</h4>
                <p>Interactive calendar and date selection system for real-time availability checks.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <div className="feature-icon"><CreditCard size={32} /></div>
                <h4>Secure Payments</h4>
                <p>Integrated payment gateway mockups for a complete end-to-end user journey simulation.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelBooking;
