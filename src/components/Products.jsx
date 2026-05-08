
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: "airaa",
    img: "/assets/images/airaa-project.png",
    title: "Airaa: STEM Course Website",
    desc: "An interactive educational platform designed to promote STEM learning.",
    technologies: ["React", "Web Design", "STEM Education", "Educational Tech"],
    link: "/airaa"
  },
  {
    id: "iot",
    img: "/assets/images/iot-product.png",
    title: "Nexus IoT Gateway",
    desc: "Universal industrial gateway supporting LoRaWAN and MQTT for real-time automation and monitoring.",
    technologies: ["IoT", "LoRaWAN", "MQTT", "Embedded Systems"]
  },
  {
    id: "ai",
    img: "/assets/images/ai-dashboard.png",
    title: "Aura AI Analytics",
    desc: "Advanced predictive maintenance dashboard for monitoring mechanical systems with high precision.",
    technologies: ["AI", "Data Analytics", "React", "Python"]
  }
];

const Products = () => {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Product Showcase</h2>
          <p>Explore our flagship hardware and software products.</p>
        </div>
        <div className="grid grid-3">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 2, 
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <motion.div 
                className="product-img"
                whileHover={{ translateZ: 50 }}
              >
                <img src={product.img} alt={product.title} />
              </motion.div>
              <motion.div 
                className="product-info"
                whileHover={{ translateZ: 30 }}
              >
                <h3>{product.title}</h3>
                <div className="tech-tags">
                  {product.technologies?.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <p>{product.desc}</p>
                {product.link ? (
                  <Link to={product.link} className="learn-more">
                    Learn More <ArrowRight size={18} />
                  </Link>
                ) : (
                  <div className="learn-more disabled">
                    Learn More <ArrowRight size={18} />
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
