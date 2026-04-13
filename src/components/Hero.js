import React from 'react';
import './Hero.css';

const firstName = "Gowrishopanan";
const lastName = "Siveswaran";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-text">DEV</div>
      <div className="hero-content fadeUp">
        <p className="hero-tag">Available for internships</p>

        <h1 className="hero-name">
          <div className="wave-text">
            {firstName.split('').map((letter, i) => (
              <span key={i} className="wave-letter" style={{ animationDelay: `${i * 0.06}s` }}>
                {letter}
              </span>
            ))}
          </div>
          <div className="wave-text accent">
            {lastName.split('').map((letter, i) => (
              <span key={i} className="wave-letter" style={{ animationDelay: `${(firstName.length + i) * 0.06}s` }}>
                {letter}
              </span>
            ))}
          </div>
        </h1>

        <div className="hero-bottom">
          <div className="hero-left">
            <p className="hero-title">
              Full Stack Developer <span className="sep">—</span> MERN &amp; AI Enthusiast
            </p>
            <p className="hero-desc">
              Software Engineering student at SLIIT &amp; University of Greenwich.
              I build modern web applications and love solving real-world problems with code.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Let's Talk</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">5+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-div" />
              <div className="stat">
                <span className="stat-num">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-div" />
              <div className="stat">
                <span className="stat-num">4+</span>
                <span className="stat-label">Years Studying</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hc-dots">
                <span className="hc-dot red" />
                <span className="hc-dot yellow" />
                <span className="hc-dot green" />
              </div>
              <pre className="code-block">{`const developer = {
  name: "Gowrishopanan",
  role: "Full Stack Dev",
  stack: [
    "MongoDB",
    "Express",
    "React",
    "Node.js"
  ],
  passion: "Building things",
  available: true
};`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}