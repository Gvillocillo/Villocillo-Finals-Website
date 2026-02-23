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
      <header className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 rounded-3 text-center" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B'}}>
            <div className="m-4 m-lg-5">
              <h1 className="display-4 fw-bold" style={{color: '#B8860B', textShadow: '3px 3px 0px rgba(0, 0, 0, 0.9)'}}>About Me</h1>
              <p className="fs-4" style={{color: '#C0C0C0'}}>Getting to know who I am</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-5">
        <div className="container px-lg-5">
          {/* Profile and Story Section */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <div className="row align-items-center">
                {/* Profile Picture */}
                <div className="col-md-4 mb-4 mb-md-0 text-center">
                  <div style={{
                    width: '200px',
                    height: '200px',
                    margin: '0 auto',
                    border: '5px solid #B8860B',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '6px 6px 0px rgba(184, 134, 11, 0.4)',
                    background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)'
                  }}>
                    <img 
                      src="/images/profile.jpg" 
                      alt="Profile" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #B8860B; font-size: 4rem;"><i class="bi bi-person-circle"></i></div>';
                      }}
                    />
                  </div>
                  <p className="mt-3" style={{color: '#888', fontSize: '0.9rem'}}>
                    Juan Gabriel Victor Villocillo
                  </p>
                </div>
                
                {/* My Story Card */}
                <div className="col-md-8">
                  <div className="card border-0" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B', color: '#C0C0C0'}}>
                    <div className="card-body p-4">
                      <h2 className="card-title fw-bold mb-3 brushstroke-emphasis" style={{color: '#B8860B'}}>My Story</h2>
                      <p className="lh-lg mb-3">
                        I'm a sophomore pursuing a Bachelor of Science in Computer Science with a specialization in Cybersecurity and Forensics at a prestigious university. My journey in tech has been dynamic and ever-evolving.
                      </p>
                      <p className="lh-lg mb-3">
                        Previously, I explored mechanical engineering at the University of Santo Tomas from 2023 to 2024, which gave me a unique perspective on how systems work and fail. While that path wasn't for me long-term, it taught me problem-solving and persistence that I carry into my current studies.
                      </p>
                      <p className="lh-lg mb-3">
                        Today, I'm passionate about cybersecurity, problem-solving, and continuous learning. I serve as a relations officer in multiple organizations including JISSA-APC and APC Chorale, where I've developed strong communication and leadership skills.
                      </p>
                      <p className="lh-lg mb-0">
                        Beyond academics, I'm a tinkerer who loves fixing things, a gearhead who's into cars and motorcycles, and a vintage enthusiast who appreciates classic music, blues, and soul. If it has history and craftsmanship, I'm interested in it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="card border-0 mb-5" style={{background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)', border: '3px solid #B8860B'}}>
                <div className="card-body p-4 p-lg-5">
                  <h2 className="text-center mb-4 brushstroke-emphasis" style={{color: '#B8860B', fontSize: '2rem'}}>
                    📸 Gallery 🎨
                  </h2>
                  <p className="text-center mb-5" style={{color: '#C0C0C0'}}>
                    A glimpse into my world - projects, passions, and adventures
                  </p>
                  
                  <div className="row g-4">
                    {/* Gallery Image 1 */}
                    <div className="col-md-4">
                      <div style={{
                        height: '250px',
                        border: '3px solid #B8860B',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '4px 4px 0px rgba(184, 134, 11, 0.3)',
                        background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '6px 6px 0px rgba(184, 134, 11, 0.5)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '4px 4px 0px rgba(184, 134, 11, 0.3)';
                      }}>
                        <img 
                          src="/images/gallery1.jpg" 
                          alt="Gallery 1" 
                          style={{width: '100%', height: '100%', objectFit: 'cover'}}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #B8860B; font-size: 3rem; flex-direction: column;"><i class="bi bi-image"></i><p style="font-size: 0.9rem; margin-top: 1rem; color: #888;">Add your photo here</p></div>';
                          }}
                        />
                      </div>
                    </div>

                    {/* Gallery Image 2 */}
                    <div className="col-md-4">
                      <div style={{
                        height: '250px',
                        border: '3px solid #B8860B',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '4px 4px 0px rgba(184, 134, 11, 0.3)',
                        background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '6px 6px 0px rgba(184, 134, 11, 0.5)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '4px 4px 0px rgba(184, 134, 11, 0.3)';
                      }}>
                        <img 
                          src="/images/gallery2.jpg" 
                          alt="Gallery 2" 
                          style={{width: '100%', height: '100%', objectFit: 'cover'}}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #B8860B; font-size: 3rem; flex-direction: column;"><i class="bi bi-image"></i><p style="font-size: 0.9rem; margin-top: 1rem; color: #888;">Add your photo here</p></div>';
                          }}
                        />
                      </div>
                    </div>

                    {/* Gallery Image 3 */}
                    <div className="col-md-4">
                      <div style={{
                        height: '250px',
                        border: '3px solid #B8860B',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '4px 4px 0px rgba(184, 134, 11, 0.3)',
                        background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '6px 6px 0px rgba(184, 134, 11, 0.5)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '4px 4px 0px rgba(184, 134, 11, 0.3)';
                      }}>
                        <img 
                          src="/images/gallery3.jpg" 
                          alt="Gallery 3" 
                          style={{width: '100%', height: '100%', objectFit: 'cover'}}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #B8860B; font-size: 3rem; flex-direction: column;"><i class="bi bi-image"></i><p style="font-size: 0.9rem; margin-top: 1rem; color: #888;">Add your photo here</p></div>';
                          }}
                        />
                      </div>
                    </div>

                    {/* Gallery Image 4 */}
                    <div className="col-md-4">
                      <div style={{
                        height: '250px',
                        border: '3px solid #B8860B',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '4px 4px 0px rgba(184, 134, 11, 0.3)',
                        background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '6px 6px 0px rgba(184, 134, 11, 0.5)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '4px 4px 0px rgba(184, 134, 11, 0.3)';
                      }}>
                        <img 
                          src="/images/gallery4.jpg" 
                          alt="Gallery 4" 
                          style={{width: '100%', height: '100%', objectFit: 'cover'}}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #B8860B; font-size: 3rem; flex-direction: column;"><i class="bi bi-image"></i><p style="font-size: 0.9rem; margin-top: 1rem; color: #888;">Add your photo here</p></div>';
                          }}
                        />
                      </div>
                    </div>

                    {/* Gallery Image 5 */}
                    <div className="col-md-4">
                      <div style={{
                        height: '250px',
                        border: '3px solid #B8860B',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '4px 4px 0px rgba(184, 134, 11, 0.3)',
                        background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '6px 6px 0px rgba(184, 134, 11, 0.5)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '4px 4px 0px rgba(184, 134, 11, 0.3)';
                      }}>
                        <img 
                          src="/images/gallery5.jpg" 
                          alt="Gallery 5" 
                          style={{width: '100%', height: '100%', objectFit: 'cover'}}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #B8860B; font-size: 3rem; flex-direction: column;"><i class="bi bi-image"></i><p style="font-size: 0.9rem; margin-top: 1rem; color: #888;">Add your photo here</p></div>';
                          }}
                        />
                      </div>
                    </div>

                    {/* Gallery Image 6 */}
                    <div className="col-md-4">
                      <div style={{
                        height: '250px',
                        border: '3px solid #B8860B',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '4px 4px 0px rgba(184, 134, 11, 0.3)',
                        background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '6px 6px 0px rgba(184, 134, 11, 0.5)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '4px 4px 0px rgba(184, 134, 11, 0.3)';
                      }}>
                        <img 
                          src="/images/gallery6.jpg" 
                          alt="Gallery 6" 
                          style={{width: '100%', height: '100%', objectFit: 'cover'}}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #B8860B; font-size: 3rem; flex-direction: column;"><i class="bi bi-image"></i><p style="font-size: 0.9rem; margin-top: 1rem; color: #888;">Add your photo here</p></div>';
                          }}
                        />
                      </div>
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

export default About;
