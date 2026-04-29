import { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar.jsx';
import SlideNav from './components/SlideNav.jsx';
import AboutSlide from './components/AboutSlide.jsx';
import SkillsSlide from './components/SkillsSlide.jsx';
import ProjectsSlide from './components/ProjectsSlide.jsx';
import ContactSlide from './components/ContactSlide.jsx';
import projectsData from './data/projects.js';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = 4;

  // Handle resize
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 992);
      if (window.innerWidth > 992) {
        setSidebarOpen(false);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar on outside click (mobile)
  useEffect(() => {
    function handleClick(e) {
      if (!isMobile) return;
      const sidebar = document.getElementById('sidebar');
      const toggle = document.getElementById('mobileToggle');
      if (
        sidebarOpen &&
        sidebar &&
        !sidebar.contains(e.target) &&
        toggle &&
        !toggle.contains(e.target)
      ) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [sidebarOpen, isMobile]);

  // Apply light mode class to body
  useEffect(() => {
    document.body.classList.toggle('light-mode', lightMode);
  }, [lightMode]);

  function goToSlide(index) {
    if (index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    if (isMobile) setSidebarOpen(false);
    setTimeout(() => setIsTransitioning(false), 800);
  }

  function toggleTheme() {
    setLightMode((prev) => !prev);
  }

  return (
    <>
      {/* Theme Toggle */}
      <button
        className="theme-toggle"
        id="themeToggle"
        onClick={toggleTheme}
        style={
          lightMode
            ? { background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)' }
            : {}
        }
      >
        <i className={lightMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
      </button>

      {/* Mobile Toggle */}
      {isMobile && (
        <button
          className="mobile-toggle"
          id="mobileToggle"
          style={{ display: 'flex' }}
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <i className="fas fa-bars"></i>
        </button>
      )}

      {/* App Container */}
      <div className="app-container">
        <Sidebar
          currentSlide={currentSlide}
          onNavigate={goToSlide}
          isOpen={sidebarOpen}
        />

        <main className="main-content">
          <SlideNav currentSlide={currentSlide} onNavigate={goToSlide} />

          <div className="slider-container" id="sliderContainer">
            <div
              className="slides-wrapper"
              id="slidesWrapper"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <AboutSlide projectsCount={projectsData.length} />
              <SkillsSlide />
              <ProjectsSlide />
              <ContactSlide />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
