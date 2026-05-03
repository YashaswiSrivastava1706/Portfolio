import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUOTES_KEY = 'ys-portfolio-visitor-quotes-v1';

function loadQuotes() {
  try {
    return JSON.parse(localStorage.getItem(QUOTES_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveQuotes(list) {
  localStorage.setItem(QUOTES_KEY, JSON.stringify(list));
}

function initials(name) {
  if (!name) return '★';
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0].toUpperCase())
    .join('');
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

function VisitorQuotes({ onToast }) {
  const [items, setItems] = useState(() => loadQuotes());
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    saveQuotes(items);
  }, [items]);

  const submit = (e) => {
    e.preventDefault();
    const q = text.trim();
    if (q.length < 8) {
      onToast?.('Please write a few more words for your quote.');
      return;
    }
    if (q.length > 280) {
      onToast?.('Quotes are capped at 280 characters.');
      return;
    }
    const entry = {
      id: 'q-' + Date.now(),
      text: q,
      name: name.trim() || 'Anonymous',
      company: company.trim(),
      date: new Date().toISOString().slice(0, 10),
    };
    setItems((prev) => [entry, ...prev]);
    setText('');
    setName('');
    setCompany('');
    onToast?.('Thank you — your quote has been added 💬');
  };

  return (
    <motion.div
      className={`visitor-quotes ${focused ? 'is-focused' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="vq-quote-mark"
        aria-hidden
        animate={{ rotate: [0, -4, 4, 0], y: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        “
      </motion.div>

      <div className="vq-head">
        <motion.h3
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Add a quote of your own
        </motion.h3>
        <motion.p
          className="hint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A line of feedback, advice, or just what inspiring is in your mind. Name and
          company are optional — you can stay anonymous.
        </motion.p>
      </div>

      <form className="vq-form" onSubmit={submit}>
        <div className="vq-textarea-wrap">
          <textarea
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Share a thought, a quote, a piece of feedback…"
            maxLength={280}
          />
          <div className="vq-glow" aria-hidden />
        </div>

        <div className="vq-row">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            maxLength={40}
          />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company / role (optional)"
            maxLength={50}
          />
          <motion.button
            type="submit"
            className="btn btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            ✨ Post Quote
          </motion.button>
        </div>
        <div className="vq-meta">
          <span>{text.length}/280</span>
          <span>Saved on this device</span>
        </div>
      </form>

      <div className="vq-grid">
        <AnimatePresence initial={false}>
          {items.length === 0 && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="vq-empty"
            >
              No thoughts yet on this device. Be the first to leave one above.
            </motion.div>
          )}
          {items.map((q) => (
            <motion.figure
              layout
              key={q.id}
              className="vq-card"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <span className="vq-mark" aria-hidden>
                “
              </span>
              <blockquote>{q.text}</blockquote>
              <figcaption>
                <div className="avatar small">{initials(q.name)}</div>
                <div className="who">
                  <span className="nm">{q.name}</span>
                  <span className="rl">
                    {q.company ? `${q.company} · ` : ''}
                    {formatDate(q.date)}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Reviews({ onToast }) {
  return (
    <section id="reviews" className="section reviews-section">
      {/* Floating background orbs */}
      <div className="reviews-orb reviews-orb-a" aria-hidden />
      <div className="reviews-orb reviews-orb-b" aria-hidden />

      <div className="container">
        <span className="eyebrow">
          <span className="dot" /> Wall of Thoughts
        </span>
        <h2 className="section-title">
          Drop an <span className="accent">Inspiring</span> Line
        </h2>
        <p className="section-sub">
          Share whatever is on your mind — feedback, a favourite quote, or just a hello.
        </p>

        <VisitorQuotes onToast={onToast} />
      </div>
    </section>
  );
}
