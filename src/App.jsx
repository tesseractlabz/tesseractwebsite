import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AiraaPage from './pages/AiraaPage';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airaa" element={<AiraaPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
