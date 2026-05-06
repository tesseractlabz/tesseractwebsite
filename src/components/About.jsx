
import { motion } from 'framer-motion';
import { CheckCircle } from '@phosphor-icons/react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container grid grid-2">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="image-wrapper">
            <img src="/assets/images/embedded-hardware.png" alt="Tesseract Hardware" />
          </div>
        </motion.div>
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">About Tesseract Labz</h2>
          <p>Tesseract Labz is a cutting-edge technology firm dedicated to bridging the gap between physical hardware and digital intelligence. We specialize in end-to-end product development, ensuring your vision is scaled with precision and innovation.</p>
          <p>Our focus on reliability and future-proof architecture makes us the partner of choice for industry leaders looking to automate and innovate.</p>
          <ul className="check-list">
            <li><CheckCircle size={24} weight="fill" /> Innovation-driven approach</li>
            <li><CheckCircle size={24} weight="fill" /> Reliable & Scalable systems</li>
            <li><CheckCircle size={24} weight="fill" /> End-to-end development</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
