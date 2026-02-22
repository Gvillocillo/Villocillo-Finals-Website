import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A vintage-styled responsive website built with React, Bootstrap, and Supabase. Features a guestbook system and REST API integration.',
      tech: ['React', 'Bootstrap', 'Supabase', 'Vite'],
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Cybersecurity Projects',
      description: 'Various cybersecurity and forensics projects as part of my CS specialization, focusing on penetration testing and vulnerability analysis.',
      tech: ['Python', 'Security Tools', 'Linux'],
      status: 'Active',
    },
    {
      id: 3,
      title: 'REST API Development',
      description: 'Building robust REST APIs for various applications, demonstrating understanding of backend architecture and data flow.',
      tech: ['Node.js', 'Express', 'PostgreSQL'],
      status: 'Learning',
    },
    {
      id: 4,
      title: 'Mechanical Engineering Prototypes',
      description: 'CAD designs and prototypes from my time in mechanical engineering, including simulations and real-world implementations.',
      tech: ['CAD', 'SolidWorks', '3D Printing'],
      status: 'Past Work',
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
      <header className="py-5 bg-light">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-4 fw-bold text-burgundy">Let's Get to Work!</h1>
              <p className="fs-4 text-dark">My Projects & Experience</p>
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
                <div className="card border-burgundy h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h3 className="card-title text-burgundy">{project.title}</h3>
                      <span className={`badge bg-${project.status === 'In Progress' ? 'burgundy' : project.status === 'Active' ? 'success' : project.status === 'Learning' ? 'info' : 'secondary'} text-cream`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="card-text text-dark mb-4">{project.description}</p>
                    <div>
                      <h6 className="text-burgundy fw-bold mb-2">Technologies:</h6>
                      <div className="mb-0">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="badge bg-light text-burgundy border border-burgundy me-2 mb-2">
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
              <div className="card border-burgundy bg-light">
                <div className="card-body p-5 text-center">
                  <h3 className="text-burgundy mb-3">Want to Collaborate?</h3>
                  <p className="fs-5 text-dark mb-4">
                    I'm always interested in new projects and opportunities that challenge me to grow my skills.
                  </p>
                  <Link to="/contact" className="btn btn-burgundy btn-lg text-cream fw-bold">
                    Get in Touch
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
