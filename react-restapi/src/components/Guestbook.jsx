import React, { useState, useEffect } from 'react';
import { guestbookService } from '../services/supabase';
import '../styles/guestbook.css';

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fetch guestbook entries
  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await guestbookService.getEntries();

    if (error) {
      console.error('Guestbook error:', error);
      setError(error.message || 'Failed to load guestbook entries. Make sure Supabase is configured.');
    } else {
      setEntries(data || []);
    }
    setLoading(false);
  };

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    if (!formData.message.trim()) {
      setSubmitError('Please enter a message');
      setSubmitting(false);
      return;
    }

    const { data, error } = await guestbookService.addEntry(
      formData.name || 'Anonymous',
      formData.message,
      formData.email || null
    );

    setSubmitting(false);

    if (error) {
      setSubmitError(
        error.message || 'Failed to submit entry. Please try again.'
      );
    } else {
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
      // Reload entries
      loadEntries();
    }
  };

  // Handle like
  const handleLike = async (id, currentLikes) => {
    const { error } = await guestbookService.toggleLike(id, currentLikes || 0);
    if (!error) {
      loadEntries();
    }
  };

  return (
    <div className="guestbook-container">
      <header className="guestbook-header py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold">Guestbook</h1>
              <p className="fs-4">Sign my guestbook and leave a message!</p>
            </div>
          </div>
        </div>
      </header>

      <section className="guestbook-content py-5">
        <div className="container px-lg-5">
          <div className="row">
            {/* Form Section */}
            <div className="col-lg-5 mb-5">
              <div className="card shadow-sm h-100">
                <div className="card-body p-4">
                  <h2 className="card-title mb-4">Sign the Book</h2>

                  {submitSuccess && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      Thank you! Your message has been added. ✨
                    </div>
                  )}

                  {submitError && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name <small className="text-muted">(optional)</small>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        maxLength="50"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email <small className="text-muted">(optional)</small>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        rows="5"
                        maxLength="500"
                        required
                      />
                      <small className="text-muted">
                        {formData.message.length}/500 characters
                      </small>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Submitting...
                        </>
                      ) : (
                        'Sign Guestbook'
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Entries Section */}
            <div className="col-lg-7">
              <div className="guestbook-entries">
                <h2 className="mb-4">
                  Messages ({entries.length})
                </h2>

                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : error ? (
                  <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Note:</strong> {error}
                    <br />
                    <small>Make sure Supabase is configured with a guestbook table.</small>
                  </div>
                ) : entries.length === 0 ? (
                  <div className="alert alert-info">
                    No messages yet. Be the first to sign!
                  </div>
                ) : (
                  <div className="entries-list">
                    {entries.map((entry) => (
                      <div
                        key={entry.id}
                        className="card guestbook-entry mb-3 shadow-sm"
                      >
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <div>
                              <h5 className="card-title mb-1">
                                {entry.name}
                              </h5>
                              <p className="card-text text-muted small mb-0">
                                {new Date(entry.created_at).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </p>
                            </div>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() =>
                                handleLike(entry.id, entry.likes || 0)
                              }
                            >
                              <i className="bi bi-heart"></i> {entry.likes || 0}
                            </button>
                          </div>
                          <p className="card-text">{entry.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guestbook;
