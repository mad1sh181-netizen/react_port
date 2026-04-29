const navItems = [
  { icon: 'fas fa-user', text: 'About', slide: 0 },
  { icon: 'fas fa-cogs', text: 'Skills', slide: 1 },
  { icon: 'fas fa-briefcase', text: 'Projects', slide: 2 },
  { icon: 'fas fa-envelope', text: 'Contact', slide: 3 },
];

export default function Sidebar({ currentSlide, onNavigate, isOpen }) {
  return (
    <nav className={`sidebar${isOpen ? ' active' : ''}`} id="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <i className="fas fa-code"></i>
        </div>
        <div className="logo-text">Madina</div>
      </div>

      <ul className="nav-menu" id="navMenu">
        {navItems.map((item) => (
          <li className="nav-item" key={item.slide}>
            <button
              className={`nav-link${currentSlide === item.slide ? ' active' : ''}`}
              onClick={() => onNavigate(item.slide)}
            >
              <i className={item.icon}></i>
              <span className="nav-text">{item.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
