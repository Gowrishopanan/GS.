import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
    const res = await axios.post('https://portfolio-backend-b8kf.onrender.com/api/contact', form);
      setStatus({ type: 'success', msg: res.data.message });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      const errMsg = err.response?.data?.error || 'Something went wrong. Please try again.';
      setStatus({ type: 'error', msg: errMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-label">Get in touch</div>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="contact-sub">
          I'm currently looking for internship opportunities. Whether you have a project,
          a question, or just want to say hi — my inbox is always open.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <a href="mailto:siveswaran.shopanan@gmail.com" className="contact-item">
              <div className="contact-icon">✉</div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-val">siveswaran.shopanan@gmail.com</div>
              </div>
            </a>
            <a href="tel:+94750305074" className="contact-item">
              <div className="contact-icon">✆</div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-val">+94 750 305 074</div>
              </div>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon">⌥</div>
              <div>
                <div className="contact-item-label">GitHub</div>
                <div className="contact-item-val">github.com/gowrishopanan</div>
              </div>
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.msg && (
              <p className={`form-msg ${status.type}`}>{status.msg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
