import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-video-container">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          <source src="/assets/images/hero-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <span className="badge">Innovation at its Peak</span>
          <h1>Engineering the Future with <span>IoT & Software</span></h1>
          <p>We build smart solutions for a connected world. From embedded systems to AI-driven automation, <span style={{ color: 'var(--brand-cyan)', fontWeight: '700', textShadow: '0 0 10px rgba(0, 209, 255, 0.4)' }}>Tesseract</span> turns complex ideas into scalable reality.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#products" className="btn btn-outline">
              View Products <ArrowRight size={20} weight="bold" style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


