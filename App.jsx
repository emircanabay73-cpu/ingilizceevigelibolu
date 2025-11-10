import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
            </>
          } />
          <Route path="/hakkimizda" element={
            <>
              <Navbar />
              <About />
            </>
          } />
          <Route path="/kayit" element={
            <>
              <Navbar />
              <Registration />
            </>
          } />
          <Route path="/iletisim" element={
            <>
              <Navbar />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

