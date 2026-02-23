import React from 'react';
import '../personalWebsite.css';
import '../styles/pages.css';
import { Link } from 'react-router-dom';

const PersonalWebsite = () => {
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
                <Link className="nav-link text-cream active" aria-current="page" to="/portfolio">
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
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold">Buenos Dias!</h1>
              <p className="fs-4">
                This is my first attempt in creating a personal portfolio website
              </p>
              <Link className="btn btn-burgundy btn-lg text-cream fw-bold" to="/work">
                Let's get to work!
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <section className="pt-4">
        <div className="container px-lg-5">
          {/* Page Features */}
          <div className="row gx-lg-5">
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature feature-navy rounded-3 mb-4 mt-n4">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h2 className="fs-4 fw-bold text-navy">A Sophomore Student</h2>
                  <p className="mb-0">
                    Bachelor of Science in Computer Science - Specialization in Cybersecurity
                    and Forensics
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature feature-green rounded-3 mb-4 mt-n4">
                    <i className="fas fa-tools"></i>
                  </div>
                  <h2 className="fs-4 fw-bold text-forest-green">A Frustrated Engineer</h2>
                  <p className="mb-0">
                    I took up Bachelor of Science in Mechanical Engineering at the University of
                    Santo Tomas from 2023 to 2024.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature feature-teal rounded-3 mb-4 mt-n4">
                    <i className="fas fa-users"></i>
                  </div>
                  <h2 className="fs-4 fw-bold text-teal">BS Org</h2>
                  <p className="mb-0">
                    I serve as a relations officer in JISSA-APC, APC Chorale, and The RamPage!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature feature-burgundy rounded-3 mb-4 mt-n4">
                    <i className="fas fa-wrench"></i>
                  </div>
                  <h2 className="fs-4 fw-bold text-burgundy">A Tinkerer</h2>
                  <p className="mb-0">From troubleshooting to home repairs, I'm your guy!</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature feature-rust rounded-3 mb-4 mt-n4">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <h2 className="fs-4 fw-bold text-rust">Developer</h2>
                  <p className="mb-0">
                    Passionate about building solutions with code and creativity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature feature-gold rounded-3 mb-4 mt-n4">
                    <i className="fas fa-car"></i>
                  </div>
                  <h2 className="fs-4 fw-bold" style={{color: '#c1440e'}}>Certified Gearhead</h2>
                  <p className="mb-0">
                    As long as it has wheels and engines, I'm into it!
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

export default PersonalWebsite;
