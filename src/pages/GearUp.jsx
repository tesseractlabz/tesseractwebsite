
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck, CreditCard, MagnifyingGlass } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const GearUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-detail-page">
      <section className="product-hero gearup-hero">
        <div className="container">
          <Link to="/" className="back-btn">
            <ArrowLeft size={20} weight="bold" /> Back to Home
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="product-title">GearUp: E-Commerce Platform</h1>
            <div className="tech-tags large">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Firebase</span>
              <span className="tech-tag">Stripe</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">Node.js</span>
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
              <source src="/assets/images/gearup.mp4" type="video/mp4" />
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
                GearUp is a high-performance e-commerce marketplace tailored for tech enthusiasts. Designed with a focus on speed, security, and user experience, it allows users to discover, compare, and order the latest gadgets and accessories with ease—much like a specialized Daraz for gear.
              </p>
            </motion.div>

            <div className="features-grid">
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="feature-icon"><ShoppingCart size={32} /></div>
                <h4>Seamless Shopping</h4>
                <p>Optimized product discovery and checkout flow for maximum conversion and user satisfaction.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="feature-icon"><MagnifyingGlass size={32} /></div>
                <h4>Smart Search</h4>
                <p>Advanced filtering and search capabilities to help users find exactly what gear they need in seconds.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="feature-icon"><CreditCard size={32} /></div>
                <h4>Secure Payments</h4>
                <p>Integrated with Stripe for robust, encrypted payment processing supporting multiple currencies.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <div className="feature-icon"><Truck size={32} /></div>
                <h4>Order Tracking</h4>
                <p>Real-time shipping updates and order management dashboard for both buyers and sellers.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GearUp;
