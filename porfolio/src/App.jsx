import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Fixed Navbar */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        
        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        {/* Conditionally Render Footer */}
        <FooterConditional />
      </Router>
    </div>
  );
}

export default App;

/* Helper Component to Show Footer Conditionally */
function FooterConditional() {
  const location = useLocation(); // Get current route
  const showFooterRoutes = ["/", "/contact"]; // Define routes where footer should appear

  return showFooterRoutes.includes(location.pathname) ? <Footer /> : null;
}
