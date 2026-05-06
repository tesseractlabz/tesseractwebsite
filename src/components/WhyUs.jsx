
import { motion } from 'framer-motion';
import { ChartLineUp, UsersThree, ShieldCheck, RocketLaunch, Lock, Infinity as InfinityIcon } from '@phosphor-icons/react';

const WhyUs = () => {
  return (
    <section id="why-us" className="section bg-dark text-light">
      <div className="container grid grid-2">
        <motion.div 
          className="why-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Choose Tesseract Labz?</h2>
          <div className="why-points">
            <div className="point">
              <div className="point-icon"><ChartLineUp size={40} /></div>
              <div>
                <h4>Scalable Solutions</h4>
                <p>We build systems that grow with your business, from prototypes to global scale.</p>
              </div>
            </div>
            <div className="point">
              <div className="point-icon"><UsersThree size={40} /></div>
              <div>
                <h4>Industry Expertise</h4>
                <p>Our team of engineers and developers bring years of experience in high-tech domains.</p>
              </div>
            </div>
            <div className="point">
              <div className="point-icon"><ShieldCheck size={40} /></div>
              <div>
                <h4>End-to-End Development</h4>
                <p>From initial concept and hardware design to software deployment and maintenance.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="why-visual">
          <div className="floating-elements">
            <motion.div 
              className="float-card glass"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: '10%', left: '5%', zIndex: 3 }}
            >
              <RocketLaunch size={32} /> <span>Speed</span>
            </motion.div>
            <motion.div 
              className="float-card glass"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ bottom: '5%', right: '5%', zIndex: 1 }}
            >
              <Lock size={32} /> <span>Security</span>
            </motion.div>
            <motion.div 
              className="float-card glass"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              style={{ top: '40%', left: '40%', zIndex: 2 }}
            >
              <InfinityIcon size={32} /> <span>Reliability</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
