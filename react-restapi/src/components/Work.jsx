import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Classified Network System 🕵️',
      description: 'A vintage-styled responsive website built with React, Bootstrap, and Supabase. Features a guestbook system and REST API integration. Secret agent approved.',
      tech: ['React', 'Bootstrap', 'Supabase', 'Vite'],
      status: 'In Progress',
      icon: '🕵️',
      color: '#00D9FF',
      theme: 'spy'
    },
    {
      id: 2,
      title: 'Outlaw Security Suite 🤠',
      description: 'Various cybersecurity and forensics projects as part of my CS specialization, focusing on penetration testing and vulnerability analysis. Gunslinger-grade security.',
      tech: ['Python', 'Security Tools', 'Linux'],
      status: 'Active',
      icon: '🤠',
      color: '#FF6B35',
      theme: 'cowboy'
    },
    {
      id: 3,
      title: 'High-Octane Engine System 🏎️',
      description: 'Building robust REST APIs for various applications, demonstrating understanding of backend architecture and data flow. Pure horsepower.',
      tech: ['Node.js', 'Express', 'PostgreSQL'],
      status: 'Learning',
      icon: '🏎️',
      color: '#FF1744',
      theme: 'racing'
    },
    {
      id: 4,
      title: 'Tactical Combat Engineering 🔧',
      description: 'CAD designs and prototypes from my time in mechanical engineering, including simulations and real-world implementations. Built for the trenches.',
      tech: ['CAD', 'SolidWorks', '3D Printing'],
      status: 'Past Work',
      icon: '🔧',
      color: '#39FF14',
      theme: 'mechanic'
    },
    {
      id: 5,
      title: 'Dark Sky Aviation Protocol ✈️',
      description: 'Advanced flight systems and drone development projects utilizing cutting-edge aerospace technology. Top Gun status.',
      tech: ['Flight Control', 'Navigation', 'Autopilot'],
      status: 'Experimental',
      icon: '✈️',
      color: '#0066FF',
      theme: 'pilot'
    },
    {
      id: 6,
      title: 'Arsenal Command Center 💥',
      description: 'Weapons systems integration and tactical deployment platforms. Complete armory management from firearms to heavy artillery.',
      tech: ['Systems Integration', 'Real-time Control', 'Tracking'],
      status: 'Classified',
      icon: '⚔️',
      color: '#9D4EDD',
      theme: 'combat'
    },
  ];

  return (
    <>
      {/* Responsive navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom bg-burgundy">
        <div className="container px-lg-5">
          <Link className="navbar-brand text-cream fw-bold" to="/">
            A Site on the Web
          </Link>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-cream" to="/portfolio">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-cream" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-cream" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-cream" to="/guestbook">
                  Guestbook
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 rounded-3 text-center" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B'}}>
            <div className="m-4 m-lg-5">
              <h1 className="display-4 fw-bold" style={{color: '#FF1744', textShadow: '3px 3px 0px rgba(0, 0, 0, 0.9)'}}>⚔️ Let's Get to Work! 💥</h1>
              <p className="fs-4" style={{color: '#B8860B'}}>🏍️ Projects, Operations & Classified Missions 🏎️</p>
              <div style={{fontSize: '2rem', margin: '1.5rem 0'}}>
                <span style={{animation: 'bounce-light 2s ease-in-out infinite'}}>🔧</span>
                <span style={{margin: '0 1rem', color: '#39FF14'}}>⚙</span>
                <span style={{animation: 'rev-engine 2.5s ease-in-out infinite'}}>🏍️</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-5">
        <div className="container px-lg-5">
          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-lg-6 mb-5">
                <div 
                  className={`card h-100 border-0 theme-${project.theme}`}
                  style={{
                    background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)',
                    color: '#C0C0C0',
                    borderLeft: `8px solid ${project.color}`
                  }}
                >
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <div className="project-icon" style={{fontSize: '3rem', marginBottom: '1rem', filter: `drop-shadow(2px 2px 0px ${project.color}80)`}}>
                        {project.icon}
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h3 className="card-title fw-bold" style={{color: project.color, fontSize: '1.3rem'}}>{project.title}</h3>
                      <span 
                        className="badge text-cream fw-bold ps-2 pe-2" 
                        style={{
                          background: project.color,
                          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="card-text mb-4" style={{color: '#C0C0C0'}}>{project.description}</p>
                    <div>
                      <h6 className="fw-bold mb-2" style={{color: project.color}}>Tech Stack:</h6>
                      <div className="mb-0">
                        {project.tech.map((tech, index) => (
                          <span 
                            key={index} 
                            className="badge me-2 mb-2 fw-bold" 
                            style={{
                              color: '#0D0D0D',
                              background: project.color,
                              padding: '4px 10px',
                              textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-10 mx-auto">
              <div className="card border-0" style={{background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(0, 217, 255, 0.1) 100%)', border: '3px solid #B8860B'}}>

                <div className="card-body p-5 text-center">
                  <h3 style={{color: '#B8860B', fontWeight: 900, fontSize: '1.8rem'}}>⚙️ Ready for the Next Operation? 💪</h3>
                  <p className="fs-5 mb-4" style={{color: '#C0C0C0'}}>
                    I'm always interested in new projects, missions, and opportunities that challenge me to push the limits.
                  </p>
                  <div style={{fontSize: '2rem', margin: '1.5rem 0'}}>
                    <span style={{animation: 'pulse-glow 3s ease-in-out infinite', color: '#FF6B35'}}>🔧</span>
                    <span style={{margin: '0 1rem', color: '#00D9FF'}}>✈️</span>
                    <span style={{animation: 'rev-engine 2.5s ease-in-out infinite', color: '#FF1744'}}>🏍️</span>
                  </div>
                  <Link 
                    to="/contact" 
                    className="btn btn-lg fw-bold" 
                    style={{
                      color: '#B8860B',
                      background: 'linear-gradient(135deg, #2C1414 0%, #5a4535 100%)',
                      border: '3px solid #B8860B',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    Let's Collaborate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-burgundy text-center text-cream">
        <div className="container">
          <p className="m-0">
            Copyright &copy; Your Website 2026 | Powered by React + Supabase
          </p>
        </div>
      </footer>
    </>
  );
};

export default Work;
