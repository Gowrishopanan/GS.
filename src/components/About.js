import React from 'react';
import './About.css';
import photo from '../assets/photo.jpg';
export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-label">About me</div>
        <div className="about-grid">
          <div className="about-left">
            <img src={photo} alt="Gowrishopanan" className="about-avatar" />
            <div className="about-info">
              <div className="info-row">
                <span className="info-label">Location</span>
                <span className="info-val">Colombo, Sri Lanka</span>
              </div>
              <div className="info-row">
                <span className="info-label">Email</span>
                <span className="info-val">siveswaran.shopanan@gmail.com</span>
              </div>
              <div className="info-row">
                <span className="info-label">Phone</span>
                <span className="info-val">+94 (75) 03 050 74</span>
              </div>
              <div className="info-row">
                <span className="info-label">Status</span>
                <span className="badge">Open to work</span>
              </div>
            </div>
          </div>
          <div className="about-right">
            <h2>Passionate about building real-world software</h2>
            <p>I'm an ambitious Software Engineering student with hands-on experience in full-stack web development. I've built everything from salon booking systems to AI-powered lip reading applications.</p>
            <p>Currently pursuing my BSc in Computer and Information Systems at the <strong>University of Greenwich</strong>, after completing my Higher Diploma at <strong>SLIIT</strong>. I love turning ideas into polished products.</p>
            <div className="edu-cards">
              <div className="edu-card">
                <div className="edu-year">2025 – 2026</div>
                <div className="edu-school">University of Greenwich, England</div>
                <div className="edu-degree">BSc (Hons) Computer &amp; Information Systems</div>
              </div>
              <div className="edu-card">
                <div className="edu-year">2023 – 2025</div>
                <div className="edu-school">SLIIT, Sri Lanka</div>
                <div className="edu-degree">BSc (Hons) IT — Software Engineering (Higher Diploma)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
