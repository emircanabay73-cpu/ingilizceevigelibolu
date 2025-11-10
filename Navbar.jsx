import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          Gelibolu Çeviri Merkezi
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/hakkimizda">Hakkımızda</Link></li>
          <li><Link to="/kayit">Çeviri Talebi</Link></li>
          <li><Link to="/iletisim">İletişim</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

