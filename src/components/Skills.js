import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Languages',
    tags: ['JavaScript', 'Java', 'Python', 'Kotlin', 'PHP', 'C++', 'SQL', 'HTML', 'CSS'],
    type: 'default',
  },
  {
    title: 'Frameworks & Libraries',
    tags: ['React', 'Express.js', 'Node.js', 'Tailwind CSS', 'Bootstrap', 'TensorFlow', 'OpenCV', 'MediaPipe'],
    type: 'accent',
  },
  {
    title: 'Databases',
    tags: ['MongoDB', 'MySQL'],
    type: 'green',
  },
  {
    title: 'Tools & Platforms',
    tags: ['Git', 'GitHub', 'VS Code', 'Figma', 'Adobe XD', 'Postman', 'Android Studio', 'Selenium', 'Vite', 'Google Colab'],
    type: 'default',
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-label">What I know</div>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className={`tag tag--${group.type}`} key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
