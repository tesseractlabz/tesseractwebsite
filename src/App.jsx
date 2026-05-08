import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AiraaPage from './pages/AiraaPage';
import SmartHelmet from './pages/SmartHelmet';
import HotelBooking from './pages/HotelBooking';
import GearUp from './pages/GearUp';
import FactoryPlanner from './pages/FactoryPlanner';
import TowerPulse from './pages/TowerPulse';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airaa" element={<AiraaPage />} />
        <Route path="/smart-helmet" element={<SmartHelmet />} />
        <Route path="/hotel-booking" element={<HotelBooking />} />
        <Route path="/gearup" element={<GearUp />} />
        <Route path="/factory-planner" element={<FactoryPlanner />} />
        <Route path="/tower-pulse" element={<TowerPulse />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
