
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, ShieldCheck, Eye, NavigationArrow, Gauge } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const SmartHelmet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-detail-page">
      <section className="product-hero helmet-hero">
        <div className="container">
          <Link to="/" className="back-btn">
            <ArrowLeft size={20} weight="bold" /> Back to Home
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="product-title">Guardian: Smart Helmet System</h1>
            <div className="tech-tags large">
              <span className="tech-tag">Raspberry Pi 5</span>
              <span className="tech-tag">YOLO</span>
              <span className="tech-tag">OpenCV</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">IMU</span>
              <span className="tech-tag">MPU6050</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image Showcase */}
      <section className="product-image-section">
        <div className="container">
          <motion.div 
            className="main-product-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img src="/assets/images/smart-helmet.png" alt="Smart Helmet Main View" className="featured-img" />
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
                Built a smart helmet enabling blind-spot vehicle detection and real-time road sign recognition using YOLO on Raspberry Pi 5. This system provides riders with enhanced situational awareness through advanced computer vision and sensor fusion.
              </p>
            </motion.div>

            <div className="features-grid">
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="feature-icon"><Eye size={32} /></div>
                <h4>Blind-Spot Detection</h4>
                <p>Uses rear-facing cameras and YOLO algorithms to alert riders of vehicles in their blind spots.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="feature-icon"><ShieldCheck size={32} /></div>
                <h4>Road Sign Recognition</h4>
                <p>Real-time detection and identification of traffic signs to provide HUD notifications.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="feature-icon"><Gauge size={32} /></div>
                <h4>IMU Integration</h4>
                <p>MPU6050 sensor tracks helmet orientation and detects potential crash impacts.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <div className="feature-icon"><Cpu size={32} /></div>
                <h4>Edge Computing</h4>
                <p>Powered by Raspberry Pi 5 for high-speed local processing without cloud dependency.</p>
              </motion.div>
            </div>

            {/* User requested helmet images gallery */}
            <motion.div 
              className="product-gallery"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3>Hardware Design</h3>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/assets/images/helmet1.png" alt="Smart Helmet Component 1" />
                  <p>Sensor Integration Layout</p>
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/helmet2.png" alt="Smart Helmet Component 2" />
                  <p>Processing Unit Assembly</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartHelmet;
