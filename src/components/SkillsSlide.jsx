import React from 'react';

const skills = [
  { 
    name: 'HTML/CSS', 
    rotation: '-15', 
    svg: (
      <svg viewBox="0 0 24 24" width="50" height="50">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="white"/>
      </svg>
    )
  },
  { 
    name: 'JavaScript', 
    rotation: '5', 
    svg: (
      <svg viewBox="0 0 24 24" width="50" height="50">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.045-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034-1.021.03-1.861.48-2.308 1.35-.42.795-.285 2.01.51 2.73.765.645 2.265.96 2.73 1.53.15.225.165.585.045.81-.24.51-1.247.45-1.817.12-.585-.39-.81-.99-.81-.99l-1.92 1.125s.18 1.095.735 1.815c.66.855 1.56 1.2 2.925 1.215 1.276-.014 2.191-.38 2.745-1.125.51-.72.63-1.545.42-2.415zM8.813 17.111c.195.885.93 1.47 1.897 1.47 1.065 0 1.83-.585 2.04-1.35.09-.345.075-.75-.015-1.11l-2.115-.015-.015-1.365h3.69l.015 1.005c.03 2.19-.945 3.51-2.955 3.51-2.16 0-3.3-1.245-3.375-3.6V10.12h2.214v6.991h.63z" fill="white"/>
      </svg>
    )
  },
  { 
    name: 'React.js', 
    rotation: '25', 
    svg: (
      <svg viewBox="0 0 24 24" width="50" height="50">
        <circle cx="12" cy="12" r="2" fill="white"/>
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" fill="white" opacity="0.3"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="white" strokeWidth="1" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="white" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="white" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
      </svg>
    )
  },
  { 
    name: 'Node.js', 
    rotation: '-5', 
    svg: (
      <svg viewBox="0 0 24 24" width="50" height="50">
        <path d="M12 1L3.5 6v12L12 23l8.5-5V6L12 1zm6.5 15.5l-6.5 3.8-6.5-3.8V7.7l6.5-3.8 6.5 3.8v8.8z" fill="white"/>
      </svg>
    )
  },
];

export default function SkillsSlide() {
  return (
    <div className="slide" id="slide-1">
      <div className="slide-content" style={{ overflow: 'visible' }}>
        <h1 className="animate-fade-in" style={{ fontSize: '3rem', marginBottom: '60px' }}>
          My{' '}
          <span
            style={{
              background: 'var(--gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Skills
          </span>
        </h1>
        
        {/* Yangi Uiverse dizayni */}
        <div className="container">
          {skills.map((skill, i) => (
            <div 
              className="glass" 
              key={skill.name} 
              data-text={skill.name} 
              style={{ '--r': skill.rotation }}
            >
              {skill.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}