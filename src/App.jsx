
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyUs />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
