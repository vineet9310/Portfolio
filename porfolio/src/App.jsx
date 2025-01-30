import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <ScrollToTop /> {/* Local ScrollToTop definition */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <FooterConditional />
      </Router>
    </div>
  );
}

export default App;

/* Local ScrollToTop Component */
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* Helper Component to Conditionally Render Footer */
function FooterConditional() {
  const location = useLocation();
  const showFooterRoutes = ["/", "/contact", "/resume"];
  return showFooterRoutes.includes(location.pathname) ? <Footer /> : null;
}
