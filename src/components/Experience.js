import React from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Sri Lanka Telecom (SLT Digital Lab)',
    role: 'AI & ML Engineer Intern',
    duration: 'January 2026 — Present',
    location: 'Colombo, Sri Lanka',
    type: 'Internship',
    points: [
      'Working on Artificial Intelligence and Machine Learning projects at SLT Digital Lab.',
      'Developing and experimenting with ML models to solve real-world telecom problems.',
      'Collaborating with senior engineers on AI-driven solutions and data pipelines.',
    ],
    color: 'blue',
  },
  {
    company: 'Port City BPO',
    role: 'Data Analyst',
    duration: 'March 2026 — Present',
    location: 'Colombo, Sri Lanka',
    type: 'Associate',
    points: [
      'Analysing business data to generate meaningful insights and reports.',
      'Working with datasets to identify trends and support data-driven decision making.',
      'Creating dashboards and visualisations to present findings to stakeholders.',
    ],
    color: 'purple',
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-label">Where I've worked</div>
        <h2 className="section-title">Work Experience</h2>
        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div className={`exp-card exp-card--${exp.color}`} key={i}>
              <div className="exp-left">
                <div className={`exp-dot exp-dot--${exp.color}`} />
                {i < experiences.length - 1 && <div className="exp-line" />}
              </div>
              <div className="exp-body">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <div className="exp-meta">
                    <span className={`exp-badge exp-badge--${exp.color}`}>{exp.type}</span>
                    <div className="exp-duration">{exp.duration}</div>
                    <div className="exp-location">{exp.location}</div>
                  </div>
                </div>
                <ul className="exp-points">
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
