import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">GS<span className="dot">.</span></div>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}
