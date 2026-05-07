import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Globe, GraduationCap, Layout } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AiraaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="airaa-page">
      <section className="airaa-hero">
        <div className="container">
          <Link to="/" className="back-btn">
            <ArrowLeft size={20} weight="bold" /> Back to Home
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="airaa-title">Airaa: STEM Course Website</h1>
            <div className="tech-tags large">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Web Design</span>
              <span className="tech-tag">STEM Education</span>
              <span className="tech-tag">Educational Tech</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Width Video Section */}
      <section className="airaa-video-full">
        <motion.div 
          className="video-container-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <video controls autoPlay muted loop className="airaa-video-large">
            <source src="/assets/images/airaa.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </section>

      <section className="airaa-content">
        <div className="container">
          <div className="airaa-details-full">
            <motion.div 
              className="info-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Overview</h3>
              <p>
                An interactive educational platform designed to promote STEM learning. 
                Features course management, progress tracking, and engaging content 
                for students and educators.
              </p>
            </motion.div>

            <div className="features-grid">
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="feature-icon"><GraduationCap size={32} /></div>
                <h4>STEM Focused</h4>
                <p>Curated content for science, technology, engineering, and mathematics.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="feature-icon"><Layout size={32} /></div>
                <h4>Interactive UI</h4>
                <p>Engaging user interface built with modern web technologies.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="feature-icon"><Globe size={32} /></div>
                <h4>Global Access</h4>
                <p>Learn from anywhere with our cloud-based infrastructure.</p>
              </motion.div>
              <motion.div className="feature-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <div className="feature-icon"><Cpu size={32} /></div>
                <h4>Progress Tracking</h4>
                <p>Monitor student performance with real-time analytics dashboards.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AiraaPage;
