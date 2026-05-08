
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { CaretLeft, CaretRight, ArrowRight } from '@phosphor-icons/react';
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
    id: "smart-helmet",
    img: "/assets/images/smart-helmet.png",
    title: "Guardian: Smart Helmet System",
    desc: "Next-gen rider safety system with crash detection, HUD navigation, and real-time blind-spot monitoring.",
    technologies: ["IoT", "Computer Vision", "Sensors", "Safety Tech"],
    link: "/smart-helmet"
  },
  {
    id: "hotel-booking",
    img: "/assets/images/hotel-booking.png",
    title: "LuxeStay: Hotel Booking Platform",
    desc: "A premium frontend implementation for a modern hotel booking experience.",
    technologies: ["React", "HTML5", "CSS3", "UI/UX"],
    link: "/hotel-booking"
  },
  {
    id: "gearup",
    img: "/assets/images/gearup.png",
    title: "GearUp: E-Commerce Platform",
    desc: "A high-performance marketplace for tech enthusiasts to order gadgets and accessories.",
    technologies: ["React", "Firebase", "Stripe", "Tailwind"],
    link: "/gearup"
  },
  {
    id: "factory-planner",
    img: "/assets/images/factory-planner.png",
    title: "OptiFactory: Factory Planner",
    desc: "Advanced industrial tool for planning factory layouts and optimizing production lines.",
    technologies: ["React", "Three.js", "Industrial IoT", "AI"],
    link: "/factory-planner"
  },
  {
    id: "tower-pulse",
    img: "/assets/images/watch1.jpeg",
    title: "Tower Pulse: Monitoring System",
    desc: "Real-time structural health and pulse monitoring for telecommunication towers.",
    technologies: ["IoT", "Sensors", "Real-time Data", "Cloud"],
    link: "/tower-pulse"
  }
];

const Products = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 400;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Product Showcase</h2>
        </div>
        
        <div className="products-slider-wrapper">
          <button className="slider-arrow prev" onClick={() => scroll('left')}>
            <CaretLeft size={24} weight="bold" />
          </button>
          
          <div className="products-slider" ref={scrollRef}>
            {products.map((product, index) => (
              <motion.div 
                key={index}
                className="product-card slider-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ 
                  scale: 1.02, 
                  translateY: -10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="product-img">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="product-info">
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
                </div>
              </motion.div>
            ))}
          </div>

          <button className="slider-arrow next" onClick={() => scroll('right')}>
            <CaretRight size={24} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
