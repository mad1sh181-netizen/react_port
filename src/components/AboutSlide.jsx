export default function AboutSlide({ projectsCount }) {
  return (
    <div className="slide" id="slide-0">
      <div className="slide-content">
        <section className="about-section">
          <div className="profile-container">
            <div className="profile-glow"></div>
            <div className="profile-frame">
              <img
                src="https://i.pinimg.com/1200x/41/2d/68/412d68ad21a5f6369085f7f795fa54aa.jpg"
                alt="Madina"
                className="profile-image"
              />
            </div>
          </div>

          <div className="about-content">
            <h1 className="animate-fade-in">I'm Madina</h1>
            <p className="title animate-fade-in delay-1">Full Stack Developer</p>
            <p className="description animate-fade-in delay-2">
              With experience in web development, I specialize in building modern,
              responsive applications using cutting-edge technologies. Passionate
              about clean code and innovative solutions.
            </p>
            <p className="description animate-fade-in delay-3">
              My expertise includes frontend and backend development with focus
              on user experience and performance optimization.
            </p>

            <div className="stats-grid">
              <div className="stat-card animate-fade-in delay-4">
                <div className="stat-number">{projectsCount}</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card animate-fade-in delay-5">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card animate-fade-in">
                <div className="stat-number">10+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
