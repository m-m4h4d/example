import React from 'react';
import { NavBar, Footer, Hero, Contact, About, BusinessWebsiteDesign } from './layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/web-development/business-website" element={<BusinessWebsiteDesign />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
