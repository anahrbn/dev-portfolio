import './Portfolio.css';

export default function Portfolio() {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <div className="header-inner">
          <h1 className="logo">Anastasia</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="main-container">
          <section id="about" className="section">
            <h2 className="section-title">Hi, I'm Anastasia</h2>
            <p className="section-text">
              I'm a front-end developer focused on building accessible, fast, and elegant user interfaces.
            </p>
          </section>

          <section id="projects" className="section">
            <h2 className="section-subtitle">Projects</h2>
            <p className="section-text">Coming soon...</p>
          </section>

          <section id="contact" className="section">
            <h2 className="section-subtitle">Contact</h2>
            <p className="section-text">Let's connect — anastasia@example.com</p>
          </section>
        </div>
      </main>
    </div>
  );
}
