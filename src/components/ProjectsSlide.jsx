import { useState } from 'react';
import projectsData from '../data/projects.js';

const categoryLabels = {
  web: 'Web Development',
  mobile: 'Mobile App',
  design: 'UI/UX Design',
  ecommerce: 'E-commerce',
  other: 'Other',
};

const filters = ['all', 'web', 'mobile', 'design', 'ecommerce'];

export default function ProjectsSlide() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="slide" id="slide-2">
      <div className="slide-content">
        <div className="projects-section">
          <div className="projects-header">
            <h1 style={{ fontSize: '3rem', margin: 0 }}>
              My{' '}
              <span
                style={{
                  background: 'var(--gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Projects
              </span>
            </h1>

            <div className="projects-filter">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`filter-btn${activeFilter === f ? ' active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <p className="description animate-fade-in delay-1" style={{ marginBottom: '20px' }}>
            Here are my recent projects. Click on any project to visit it.
          </p>

          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '60px 0',
                color: 'var(--text-muted)',
              }}
            >
              <i
                className="fas fa-folder-open"
                style={{ fontSize: '4rem', marginBottom: '20px', opacity: 0.5 }}
              ></i>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>No projects yet</h3>
            </div>
          ) : (
            <div className="projects-grid" id="projectsGrid">
              {filtered.map((project, index) => {
                const mainLink = project.demo || project.code || '#';
                const categoryText = categoryLabels[project.category] || project.category;

                return (
                  <div
                    className={`project-card animate-fade-in${index < 5 ? ` delay-${index + 1}` : ''}`}
                    key={project.id}
                    onClick={(e) => {
                      if (e.target.closest('.btn') || e.target.tagName === 'A') return;
                      if (mainLink && mainLink !== '#') window.open(mainLink, '_blank');
                    }}
                  >
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                      <span className="project-badge">{categoryText}</span>
                    </div>
                    <div className="project-content">
                      <span className="project-category">{categoryText}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech">
                        {project.tech.map((t) => (
                          <span className="tech-tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="project-links">
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                            Ko'rish
                          </a>
                        )}
                        {project.code && (
                          <a href={project.code} target="_blank" rel="noreferrer" className="btn btn-secondary">
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
