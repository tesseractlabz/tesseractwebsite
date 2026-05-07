
import { motion } from 'framer-motion';
import { Broadcast, Cpu, Code, Brain } from '@phosphor-icons/react';

const services = [
  {
    icon: <Broadcast size={32} />,
    title: "IoT Product Development",
    desc: "Connected ecosystems from sensor to cloud with real-time data monitoring.",
    color: "#09637E" // Deep Blue
  },
  {
    icon: <Cpu size={32} />,
    title: "Embedded Systems",
    desc: "High-performance hardware design and firmware development for any application.",
    color: "#6c5ce7" // Purple
  },
  {
    icon: <Code size={32} />,
    title: "Software Solutions",
    desc: "Custom web and mobile platforms built with modern frameworks and scalability.",
    color: "#e67e22" // Orange
  },
  {
    icon: <Brain size={32} />,
    title: "AI & Automation",
    desc: "Smart algorithms and automated workflows to optimize your operations.",
    color: "#27ae60" // Green
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Services</h2>
          <p>Comprehensive technology solutions tailored to your business needs.</p>
        </div>
        <div className="grid grid-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              style={{ borderTopColor: service.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="icon-box"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 style={{ color: service.color }}>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
