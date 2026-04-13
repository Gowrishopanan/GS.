import React from 'react';
import './Projects.css';

const projects = [
  {
    tag: 'AI Research Project',
    title: 'LipReadAI',
    desc: 'A real-time lip reading and speech recognition system using deep learning. Converts silent lip movements into text — designed to help people with hearing or speech impairments.',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe', 'React'],
    uni: 'University of Greenwich — Final Year',
    link: null,
    featured: true,
  },
  {
    tag: 'Live Project',
    title: 'E-commerce Platform',
    desc: 'Full-stack e-commerce platform for a real client. Features OTP authentication, Cloudinary media storage, and email order notifications.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
    link: 'https://adssaya-multi-choice.vercel.app/',
    featured: false,
  },
  {
    tag: 'MERN Stack',
    title: 'Hotel Reservation System',
    desc: 'Full-stack hotel management system with room booking, user authentication, real-time availability updates, and email booking confirmations.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
    uni: 'SLIIT — 2nd Year',
    featured: false,
  },
  {
    tag: 'Java',
    title: 'Musical Instrument Store',
    desc: 'Web-based musical instrument store with product browsing, shopping cart, user authentication, and order management features.',
    stack: ['Java', 'HTML', 'CSS', 'JavaScript'],
    uni: 'SLIIT — 2nd Year',
    featured: false,
  },
  {
    tag: 'PHP',
    title: 'Online Salon Booking',
    desc: 'Web-based salon booking system with user authentication, appointment scheduling, admin dashboard, and responsive UI.',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    uni: 'SLIIT — 1st Year',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-label">What I've built</div>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className={`project-card ${p.featured ? 'project-card--featured' : ''}`} key={p.title}>
              <div className="project-tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-stack">
                {p.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              <div className="project-links">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                    Live Demo →
                  </a>
                )}
                {p.uni && <span className="project-uni">{p.uni}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
