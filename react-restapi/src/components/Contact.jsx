import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const Contact = () => {

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
                <Link className="nav-link text-cream active" to="/contact">
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
              <h1 className="display-4 fw-bold brushstroke-title" style={{color: '#B8860B', textShadow: '3px 3px 0px rgba(0, 0, 0, 0.9)'}}>Get in Touch</h1>
              <p className="fs-4 brushstroke-emphasis" style={{color: '#C0C0C0'}}>I'd love to hear from you!</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-5">
        <div className="container px-lg-5">
          <div className="row g-4">
            {/* Email Card */}
            <div className="col-md-6">
              <div className="card border-0 h-100" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B'}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-4">
                    <i className="bi bi-envelope-fill" style={{fontSize: '3rem', color: '#B8860B'}}></i>
                  </div>
                  <h3 className="mb-3 brushstroke-emphasis" style={{color: '#B8860B'}}>Email</h3>
                  <p style={{color: '#C0C0C0', fontSize: '1.1rem'}}>
                    <a href="mailto:your.email@example.com" style={{color: '#FFD27D', textDecoration: 'none'}}>
                      your.email@example.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="col-md-6">
              <div className="card border-0 h-100" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B'}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-4">
                    <i className="bi bi-share-fill" style={{fontSize: '3rem', color: '#B8860B'}}></i>
                  </div>
                  <h3 className="mb-3 brushstroke-emphasis" style={{color: '#B8860B'}}>Social Media</h3>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{color: '#FFD27D', fontSize: '1.5rem'}}>
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={{color: '#FFD27D', fontSize: '1.5rem'}}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={{color: '#FFD27D', fontSize: '1.5rem'}}>
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="col-md-6">
              <div className="card border-0 h-100" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B'}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-4">
                    <i className="bi bi-geo-alt-fill" style={{fontSize: '3rem', color: '#B8860B'}}></i>
                  </div>
                  <h3 className="mb-3 brushstroke-emphasis" style={{color: '#B8860B'}}>Location</h3>
                  <p style={{color: '#C0C0C0', fontSize: '1.1rem'}}>
                    Your City, Country
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="col-md-6">
              <div className="card border-0 h-100" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B'}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-4">
                    <i className="bi bi-telephone-fill" style={{fontSize: '3rem', color: '#B8860B'}}></i>
                  </div>
                  <h3 className="mb-3 brushstroke-emphasis" style={{color: '#B8860B'}}>Phone</h3>
                  <p style={{color: '#C0C0C0', fontSize: '1.1rem'}}>
                    <a href="tel:+1234567890" style={{color: '#FFD27D', textDecoration: 'none'}}>
                      +1 (234) 567-890
                    </a>
                  </p>
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

export default Contact;
