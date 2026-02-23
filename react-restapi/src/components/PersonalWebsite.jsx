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
          <div className="p-4 p-lg-5 rounded-3 text-center" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B'}}>
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold" style={{color: '#B8860B', textShadow: '3px 3px 0px rgba(0, 0, 0, 0.9)'}}>
                🏍️ Buenos Dias! 🏎️
              </h1>
              <p className="fs-4" style={{color: '#C0C0C0'}}>
                This is my first attempt in creating a personal portfolio website
              </p>
              <div style={{fontSize: '2rem', margin: '1rem 0'}}>
                <span className="illust-motorcycle">🏍️</span>
                <span style={{margin: '0 1rem', color: '#FF6B35'}}>⚙</span>
                <span className="illust-car">🚗</span>
              </div>
              <Link className="btn btn-burgundy btn-lg fw-bold" to="/work" style={{color: '#B8860B', background: 'linear-gradient(135deg, #2C1414 0%, #5a4535 100%)', border: '3px solid #B8860B'}}>
                ⚙ Let's get to work! ⚙
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
            {/* Student - Spy/Secret Agent Theme */}
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card border-0 h-100 theme-spy" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', color: '#C0C0C0'}}>
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature feature-navy rounded-3 mb-4 mt-n4">
                    <span className="illust-spy">🕵️</span>
                  </div>
                  <h2 className="fs-4 fw-bold" style={{color: '#00D9FF'}}>A Sophomore Student</h2>
                  <p className="mb-0">
                    Bachelor of Science in Computer Science - Specialization in Cybersecurity
                    and Forensics
                  </p>
                </div>
              </div>
            </div>

            {/* Engineer - Mechanic/Blue-collar Theme */}
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card border-0 h-100 theme-mechanic" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', color: '#C0C0C0'}}>
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature feature-green rounded-3 mb-4 mt-n4">
                    <span className="illust-mechanic">🔧</span>
                  </div>
                  <h2 className="fs-4 fw-bold" style={{color: '#FF6B35'}}>A Frustrated Engineer</h2>
                  <p className="mb-0">
                    I took up Bachelor of Science in Mechanical Engineering at the University of
                    Santo Tomas from 2023 to 2024.
                  </p>
                </div>
              </div>
            </div>

            {/* Organizer - Pilot/Leadership Theme */}
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card border-0 h-100 theme-pilot" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', color: '#C0C0C0'}}>
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature feature-teal rounded-3 mb-4 mt-n4">
                    <span className="illust-pilot">👨‍✈️</span>
                  </div>
                  <h2 className="fs-4 fw-bold" style={{color: '#0066FF'}}>BS Org</h2>
                  <p className="mb-0">
                    I serve as a relations officer in JISSA-APC, APC Chorale, and The RamPage!
                  </p>
                </div>
              </div>
            </div>

            {/* Tinkerer - Cowboy/Outlaw Theme */}
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card border-0 h-100 theme-cowboy" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', color: '#C0C0C0'}}>
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature feature-burgundy rounded-3 mb-4 mt-n4">
                    <span className="illust-cowboy">🤠</span>
                  </div>
                  <h2 className="fs-4 fw-bold" style={{color: '#FF6B35'}}>A Tinkerer</h2>
                  <p className="mb-0">From troubleshooting to home repairs, I'm your guy!</p>
                </div>
              </div>
            </div>

            {/* Developer - Combat/Weapons Theme */}
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card border-0 h-100 theme-combat" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', color: '#C0C0C0'}}>
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature feature-rust rounded-3 mb-4 mt-n4">
                    <span className="illust-soldier">💪</span>
                  </div>
                  <h2 className="fs-4 fw-bold" style={{color: '#9D4EDD'}}>Developer</h2>
                  <p className="mb-0">
                    Passionate about building solutions with code and creativity.
                  </p>
                </div>
              </div>
            </div>

            {/* Gearhead - Racing/Vehicle Theme */}
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card border-0 h-100 theme-racing" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', color: '#C0C0C0'}}>
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature feature-gold rounded-3 mb-4 mt-n4">
                    <span className="illust-biker">🏍️</span>
                  </div>
                  <h2 className="fs-4 fw-bold" style={{color: '#FF1744'}}>Certified Gearhead</h2>
                  <p className="mb-0">
                    As long as it has wheels and engines, I'm into it!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vibrant Decorative Section */}
      <section style={{background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(0, 217, 255, 0.1) 100%)', padding: '3rem 0', borderTop: '4px solid #B8860B', borderBottom: '4px solid #FF1744'}}>
        <div className="container px-lg-5 text-center">
          <h2 style={{color: '#B8860B', fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem'}}>
            🏍️ All The Vibes 🏎️
          </h2>
          <div style={{fontSize: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem'}}>
            <span className="illust-car">🚗</span>
            <span className="illust-motorcycle">🏍️</span>
            <span className="illust-airplane">✈️</span>
            <span style={{animation: 'pulse-glow 3s ease-in-out infinite'}}>💪</span>
            <span style={{animation: 'sway 2s ease-in-out infinite'}}>🤠</span>
            <span style={{animation: 'pulse-glow 3s ease-in-out infinite', color: '#00D9FF'}}>🕵️</span>
          </div>
          <p style={{color: '#C0C0C0', fontSize: '1.1rem', fontWeight: 600}}>
            Spies, Cowboys, Mechanics, Pilots, Soldiers, Blues-collar workers, Whiskey enthusiasts, and Gearheads
          </p>
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
