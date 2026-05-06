
import { motion } from 'framer-motion';
import { Code, Terminal, Browsers, Cloud, Radio, Lightning } from '@phosphor-icons/react';

const techItems = [
  { icon: <Code size={48} />, name: "Python" },
  { icon: <Terminal size={48} />, name: "C++" },
  { icon: <Browsers size={48} />, name: "React" },
  { icon: <Cloud size={48} />, name: "MQTT" },
  { icon: <Radio size={48} />, name: "LoRa" },
  { icon: <Lightning size={48} />, name: "Node.js" }
];

const Tech = () => {
  return (
    <section id="tech" className="section">
      <div className="container text-center">
        <h2 className="section-title">Technologies We Use</h2>
        <div className="tech-logos">
          {techItems.map((tech, index) => (
            <motion.div 
              key={index}
              className="tech-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tech.icon}
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
