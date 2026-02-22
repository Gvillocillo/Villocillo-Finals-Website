import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just show success. In production, use email service like EmailJS
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

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
      <header className="py-5 bg-light">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-4 fw-bold text-burgundy">Get in Touch</h1>
              <p className="fs-4 text-dark">I'd love to hear from you!</p>
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
                  {submitted && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      Thank you for reaching out! I'll get back to you soon. ✨
                      <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label fw-bold text-burgundy">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control border-burgundy"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-bold text-burgundy">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control border-burgundy"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="subject" className="form-label fw-bold text-burgundy">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control border-burgundy"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-bold text-burgundy">
                        Message
                      </label>
                      <textarea
                        className="form-control border-burgundy"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-burgundy btn-lg w-100 text-cream fw-bold">
                      Send Message
                    </button>
                  </form>
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
