import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio.js';

export default function Contact({ onToast }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !msg.trim()) {
      onToast?.('Please fill in name, email, and a short message.');
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    onToast?.('Opening your mail client…');
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="eyebrow">
          <span className="dot" /> Get in touch
        </span>
        <h2 className="section-title">
          Let’s build <span className="accent">something</span>
        </h2>
        <p className="section-sub">
          Have a role, a project, or just want to say hi? My inbox is always open.
        </p>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ x: -16, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <a className="contact-row" href={`mailto:${profile.email}`}>
              <span className="ico">✉</span>
              <div>
                <strong>Email</strong>
                <span>{profile.email}</span>
              </div>
            </a>
            {profile.emailAlt && (
              <a className="contact-row alt" href={`mailto:${profile.emailAlt}`}>
                <span className="ico">✉</span>
                <div>
                  <strong>
                    Alt Email <span className="alt-tag">backup</span>
                  </strong>
                  <span>{profile.emailAlt}</span>
                </div>
              </a>
            )}
            <a className="contact-row" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
              <span className="ico">☎</span>
              <div>
                <strong>Phone</strong>
                <span>{profile.phone}</span>
              </div>
            </a>
            {profile.phoneAlt && (
              <a
                className="contact-row alt"
                href={`tel:${profile.phoneAlt.replace(/\s+/g, '')}`}
              >
                <span className="ico">☎</span>
                <div>
                  <strong>
                    Alt Phone <span className="alt-tag">backup</span>
                  </strong>
                  <span>{profile.phoneAlt}</span>
                </div>
              </a>
            )}
            <div className="contact-row">
              <span className="ico">📍</span>
              <div>
                <strong>Location</strong>
                <span>{profile.location}</span>
              </div>
            </div>
            <a
              className="contact-row"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="ico">📄</span>
              <div>
                <strong>Resume</strong>
                <span>Download PDF</span>
              </div>
            </a>
          </motion.div>

          <motion.form
            onSubmit={submit}
            className="card"
            initial={{ x: 16, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <div className="field">
              <label>Your name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
            </div>
            <div className="field">
              <label>Your email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea
                rows={5}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Tell me a little about your project or role…"
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              ✉ Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
