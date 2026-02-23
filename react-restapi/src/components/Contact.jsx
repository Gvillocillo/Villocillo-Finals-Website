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
            <div className="col-lg-4">
              <div className="card border-0 h-100" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B'}}>
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <i className="bi bi-envelope-fill" style={{fontSize: '2.5rem', color: '#B8860B'}}></i>
                  </div>
                  <h3 className="text-center mb-4 brushstroke-emphasis" style={{color: '#B8860B'}}>Email</h3>
                  <div style={{color: '#C0C0C0', fontSize: '0.9rem'}}>
                    <p className="mb-2">
                      <strong style={{color: '#FFD27D'}}>School:</strong><br/>
                      <a href="mailto:jbvillocillo2@student.apc.edu.ph" style={{color: '#C0C0C0', textDecoration: 'none'}}>
                        jbvillocillo2@student.apc.edu.ph
                      </a>
                    </p>
                    <p className="mb-2">
                      <strong style={{color: '#FFD27D'}}>Gmail:</strong><br/>
                      <a href="mailto:jgvvillocillo@gmail.com" style={{color: '#C0C0C0', textDecoration: 'none'}}>
                        jgvvillocillo@gmail.com
                      </a>
                    </p>
                    <p className="mb-0">
                      <strong style={{color: '#FFD27D'}}>Hotmail:</strong><br/>
                      <a href="mailto:jgvvillocillo@hotmail.com" style={{color: '#C0C0C0', textDecoration: 'none'}}>
                        jgvvillocillo@hotmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="col-lg-4">
              <div className="card border-0 h-100" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B'}}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-telephone-fill" style={{fontSize: '2.5rem', color: '#B8860B'}}></i>
                  </div>
                  <h3 className="mb-4 brushstroke-emphasis" style={{color: '#B8860B'}}>Phone</h3>
                  <p style={{color: '#C0C0C0', fontSize: '1.1rem'}}>
                    <a href="tel:+639171223820" style={{color: '#FFD27D', textDecoration: 'none'}}>
                      +63 917 122 3820
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="col-lg-4">
              <div className="card border-0 h-100" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B'}}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-geo-alt-fill" style={{fontSize: '2.5rem', color: '#B8860B'}}></i>
                  </div>
                  <h3 className="mb-4 brushstroke-emphasis" style={{color: '#B8860B'}}>Location</h3>
                  <p style={{color: '#C0C0C0', fontSize: '1.1rem'}}>
                    Taguig City, Philippines
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Card - Full Width */}
            <div className="col-12">
              <div className="card border-0" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B'}}>
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <i className="bi bi-share-fill" style={{fontSize: '2.5rem', color: '#B8860B'}}></i>
                  </div>
                  <h3 className="text-center mb-4 brushstroke-emphasis" style={{color: '#B8860B'}}>Social Media</h3>
                  <div className="row g-3">
                    <div className="col-md-4 text-center">
                      <a href="https://www.facebook.com/juangabrielvictor.villocillo.5" target="_blank" rel="noopener noreferrer" style={{color: '#FFD27D', textDecoration: 'none', display: 'block'}}>
                        <i className="bi bi-facebook" style={{fontSize: '2rem'}}></i>
                        <p className="mt-2 mb-0" style={{color: '#C0C0C0', fontSize: '0.9rem'}}>Facebook</p>
                      </a>
                    </div>
                    <div className="col-md-4 text-center">
                      <a href="https://www.instagram.com/gabvillocillo" target="_blank" rel="noopener noreferrer" style={{color: '#FFD27D', textDecoration: 'none', display: 'block'}}>
                        <i className="bi bi-instagram" style={{fontSize: '2rem'}}></i>
                        <p className="mt-2 mb-0" style={{color: '#C0C0C0', fontSize: '0.9rem'}}>@gabvillocillo</p>
                      </a>
                    </div>
                    <div className="col-md-4 text-center">
                      <a href="https://www.threads.net/@gabvillocillo" target="_blank" rel="noopener noreferrer" style={{color: '#FFD27D', textDecoration: 'none', display: 'block'}}>
                        <i className="bi bi-threads-fill" style={{fontSize: '2rem'}}></i>
                        <p className="mt-2 mb-0" style={{color: '#C0C0C0', fontSize: '0.9rem'}}>@gabvillocillo</p>
                      </a>
                    </div>
                    <div className="col-md-4 text-center">
                      <a href="https://twitter.com/JgvVillocillo" target="_blank" rel="noopener noreferrer" style={{color: '#FFD27D', textDecoration: 'none', display: 'block'}}>
                        <i className="bi bi-twitter-x" style={{fontSize: '2rem'}}></i>
                        <p className="mt-2 mb-0" style={{color: '#C0C0C0', fontSize: '0.9rem'}}>@JgvVillocillo</p>
                      </a>
                    </div>
                    <div className="col-md-4 text-center">
                      <a href="https://www.linkedin.com/in/juan-gabriel-victor-villocillo-52533a235" target="_blank" rel="noopener noreferrer" style={{color: '#FFD27D', textDecoration: 'none', display: 'block'}}>
                        <i className="bi bi-linkedin" style={{fontSize: '2rem'}}></i>
                        <p className="mt-2 mb-0" style={{color: '#C0C0C0', fontSize: '0.9rem'}}>LinkedIn</p>
                      </a>
                    </div>
                    <div className="col-md-4 text-center">
                      <a href="https://github.com/Gvillocillo" target="_blank" rel="noopener noreferrer" style={{color: '#FFD27D', textDecoration: 'none', display: 'block'}}>
                        <i className="bi bi-github" style={{fontSize: '2rem'}}></i>
                        <p className="mt-2 mb-0" style={{color: '#C0C0C0', fontSize: '0.9rem'}}>School: Gvillocillo</p>
                      </a>
                    </div>
                    <div className="col-md-4 text-center">
                      <a href="https://github.com/HotHeadGranite" target="_blank" rel="noopener noreferrer" style={{color: '#FFD27D', textDecoration: 'none', display: 'block'}}>
                        <i className="bi bi-github" style={{fontSize: '2rem'}}></i>
                        <p className="mt-2 mb-0" style={{color: '#C0C0C0', fontSize: '0.9rem'}}>Personal: HotHeadGranite</p>
                      </a>
                    </div>
                  </div>
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
