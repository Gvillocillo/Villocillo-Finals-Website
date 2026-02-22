import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const About = () => {
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
                <Link className="nav-link text-cream active" to="/about">
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
              <h1 className="display-4 fw-bold text-burgundy">About Me</h1>
              <p className="fs-4 text-dark">Getting to know who I am</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-5">
        <div className="container px-lg-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-burgundy">
                <div className="card-body p-5">
                  <h2 className="card-title text-burgundy mb-4">My Story</h2>
                  <p className="fs-5 lh-lg text-dark mb-4">
                    I'm a sophomore pursuing a Bachelor of Science in Computer Science with a specialization in Cybersecurity and Forensics at a prestigious university. My journey in tech has been dynamic and ever-evolving.
                  </p>
                  <p className="fs-5 lh-lg text-dark mb-4">
                    Previously, I explored mechanical engineering at the University of Santo Tomas from 2023 to 2024, which gave me a unique perspective on how systems work and fail. While that path wasn't for me long-term, it taught me problem-solving and persistence that I carry into my current studies.
                  </p>
                  <p className="fs-5 lh-lg text-dark mb-4">
                    Today, I'm passionate about cybersecurity, problem-solving, and continuous learning. I serve as a relations officer in multiple organizations including JISSA-APC and APC Chorale, where I've developed strong communication and leadership skills.
                  </p>
                  <p className="fs-5 lh-lg text-dark">
                    Beyond academics, I'm a tinkerer who loves fixing things, a gearhead who's into cars and motorcycles, and a vintage enthusiast who appreciates classic music, blues, and soul. If it has history and craftsmanship, I'm interested in it.
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

export default About;
