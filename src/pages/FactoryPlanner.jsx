
import { motion } from 'framer-motion';
import { ArrowLeft, Factory, Gear, ChartLineUp, Cube, HardHat } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const FactoryPlanner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-detail-page">
      <section className="product-hero factory-hero">
        <div className="container">
          <Link to="/" className="back-btn">
            <ArrowLeft size={20} weight="bold" /> Back to Home
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="product-title">OptiFactory: Factory Planner</h1>
            <div className="tech-tags large">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Three.js</span>
              <span className="tech-tag">Industrial IoT</span>
              <span className="tech-tag">AI Optimization</span>
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
              <source src="/assets/images/factoryplanner.mp4" type="video/mp4" />
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
                OptiFactory is an advanced industrial simulation and planning tool designed to revolutionize manufacturing efficiency. By creating digital twins of production facilities, it allows engineers to visualize, simulate, and optimize complex factory layouts in real-time before physical implementation.
              </p>
            </motion.div>

            <div className="features-grid">
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="feature-icon"><Cube size={32} /></div>
                <h4>3D Digital Twins</h4>
                <p>Create accurate 3D representations of factory floors, equipment, and production lines for immersive planning.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="feature-icon"><ChartLineUp size={32} /></div>
                <h4>Bottleneck Analysis</h4>
                <p>Simulate production runs to identify and eliminate throughput constraints and inefficiencies automatically.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="feature-icon"><Gear size={32} /></div>
                <h4>Robotic Integration</h4>
                <p>Plan and simulate robotic cell placements and task distributions to maximize automation ROI.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <div className="feature-icon"><Factory size={32} /></div>
                <h4>Resource Allocation</h4>
                <p>Optimize workforce distribution and raw material flow to minimize downtime and operational costs.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FactoryPlanner;
