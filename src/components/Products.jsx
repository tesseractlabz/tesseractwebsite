
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

const products = [
  {
    img: "/assets/images/iot-product.png",
    title: "Nexus Gateway",
    desc: "Universal IoT gateway supporting LoRaWAN, MQTT, and Zigbee protocols."
  },
  {
    img: "/assets/images/ai-dashboard.png",
    title: "Aura AI Analytics",
    desc: "Advanced predictive maintenance and real-time automation dashboard."
  },
  {
    img: "/assets/images/embedded-hardware.png",
    title: "Titan Embedded Module",
    desc: "Ultra-low power processing unit for edge computing and industrial use."
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
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="product-img">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <a href="#" className="learn-more">Learn More <ArrowRight size={18} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
