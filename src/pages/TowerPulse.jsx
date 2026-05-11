import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Broadcast, Warning, Pulse, PlugsConnected, CaretUp, CaretDown } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const galleryImages = [
  { id: 1, src: "/assets/images/tower-pulse-ai.png", title: "Real-time Pulse" },
  { id: 2, src: "/assets/images/w3.jpeg", title: "Tower Health" },
  { id: 3, src: "/assets/images/w4.jpeg", title: "Sensor Grid" },
  { id: 4, src: "/assets/images/w5.jpeg", title: "Monitoring Dashboard" },
  { id: 5, src: "/assets/images/w6.jpeg", title: "Signal Analysis" },
  { id: 6, src: "/assets/images/w7.jpeg", title: "Impact Detection" },
  { id: 7, src: "/assets/images/w8.jpeg", title: "Power Management" },
  { id: 8, src: "/assets/images/w9.jpeg", title: "Cloud Sync" },
  { id: 9, src: "/assets/images/w10.jpeg", title: "Alert System" },
];

const TowerPulse = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="product-detail-page">
      <section className="product-hero tower-hero">
        <div className="container">
          <Link to="/" className="back-btn">
            <ArrowLeft size={20} weight="bold" /> Back to Home
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="product-title">Tower Pulse: Monitoring System</h1>
            <div className="tech-tags large">
              <span className="tech-tag">IoT</span>
              <span className="tech-tag">Real-time Data</span>
              <span className="tech-tag">Cloud Architecture</span>
              <span className="tech-tag">Sensor Fusion</span>
              <span className="tech-tag">AI Diagnostics</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Image Reference Gallery */}
      {/* Main Feature Section: Stack + Content side-by-side */}
      <section className="tower-main-section section">
        <div className="container">
          <div className="tower-split-layout">
            {/* Left: 3D Phone Stack */}
            <div className="tower-left-col">
              <div className="tower-stack-wrapper">
                <div className="stack-bg-glow"></div>
                <div className="tower-3d-stack">
                  <AnimatePresence mode="popLayout">
                    {galleryImages.map((image, index) => {
                      let relativeIndex = index - currentIndex;
                      if (relativeIndex < 0) relativeIndex += galleryImages.length;
                      if (relativeIndex > 2) return null;

                      return (
                        <motion.div 
                          key={image.id}
                          className={`tower-stack-card pos-${relativeIndex}`}
                          initial={{ opacity: 0, scale: 0.8, y: 100 }}
                          animate={{ 
                            opacity: 1 - relativeIndex * 0.25,
                            scale: 1 - relativeIndex * 0.08,
                            y: relativeIndex * 50,
                            zIndex: 10 - relativeIndex
                          }}
                          exit={{ opacity: 0, scale: 0.5, y: -150 }}
                          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        >
                          <div className="tower-reference-img">
                            <img src={image.src} alt={image.title} />
                            <div className="tower-reference-overlay">
                              <span className="tower-ref-tag">REF-{image.id < 10 ? '0' + image.id : image.id}</span>
                              <h4>{image.title}</h4>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
                
                <div className="stack-nav-overlay">
                  <button className="stack-btn prev" onClick={prevCard}>
                    <CaretUp size={24} weight="bold" />
                  </button>
                  <button className="stack-btn next" onClick={nextCard}>
                    <CaretDown size={24} weight="bold" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Content & Features */}
            <div className="tower-right-col">
              <motion.div 
                className="tower-content-box"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="badge">System Overview</span>
                <h2 className="section-title">Real-time Structural Health</h2>
                <p className="tower-description">
                  Tower Pulse is a state-of-the-art monitoring solution designed for the telecommunications industry. 
                  It provides real-time insights into the structural integrity and environmental conditions of cell towers.
                </p>

                <div className="tower-mini-features">
                  <div className="mini-feature">
                    <div className="mini-icon"><Pulse size={24} /></div>
                    <div className="mini-text">
                      <h4>Pulse Monitoring</h4>
                      <p>Vibrational analysis to detect structural changes.</p>
                    </div>
                  </div>
                  <div className="mini-feature">
                    <div className="mini-icon"><Broadcast size={24} /></div>
                    <div className="mini-text">
                      <h4>Real-time Telemetry</h4>
                      <p>Sub-millisecond latency for critical oversight.</p>
                    </div>
                  </div>
                  <div className="mini-feature">
                    <div className="mini-icon"><Warning size={24} /></div>
                    <div className="mini-text">
                      <h4>Intelligent Alerts</h4>
                      <p>AI-driven anomaly detection triggers.</p>
                    </div>
                  </div>
                  <div className="mini-feature">
                    <div className="mini-icon"><PlugsConnected size={24} /></div>
                    <div className="mini-text">
                      <h4>Sensor Fusion</h4>
                      <p>Holistic health view from multiple sources.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TowerPulse;
