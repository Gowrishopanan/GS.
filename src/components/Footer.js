import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">GS<span className="dot">.</span></div>
       <div className="footer-tech">
  <p>Designed &amp; built by Gowrishopanan Siveswaran &copy; {new Date().getFullYear()}</p>
  <div className="footer-stack">
    <span>MongoDB</span>
    <span>Express</span>
    <span>React</span>
    <span>Node.js</span>
  </div>
</div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
