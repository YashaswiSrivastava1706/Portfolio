import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials, reactionTypes, reactionSeed } from '../data/portfolio.js';

/* =========================================================
 * Reactions sub-section ("Wall of Love")
 * - Counts persist in localStorage and are seeded with a base
 *   so the wall never looks empty to the first visitor.
 * - Each visitor is capped at 5 reactions per emoji so the
 *   counts feel real and the experience stays Medium-clap-y.
 * =======================================================*/

const COUNTS_KEY = 'ys-portfolio-reaction-counts-v1';
const MINE_KEY = 'ys-portfolio-reaction-mine-v1';
const MAX_PER_VISITOR = 5;

function loadCounts() {
  try {
    const raw = localStorage.getItem(COUNTS_KEY);
    if (!raw) return { ...reactionSeed };
    const parsed = JSON.parse(raw);
    return { ...reactionSeed, ...parsed };
  } catch {
    return { ...reactionSeed };
  }
}

function loadMine() {
  try {
    const raw = localStorage.getItem(MINE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function Initials({ name }) {
  const ini = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0].toUpperCase())
    .join('');
  return <div className="t-avatar">{ini}</div>;
}

function Stars({ value }) {
  return (
    <div className="t-stars" aria-label={`${value} of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= value ? 'on' : ''}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials({ onToast }) {
  /* ---------- Carousel state ---------- */
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 6000);
    return () => clearInterval(t);
  }, [paused, total]);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);
  const current = testimonials[idx];

  /* ---------- Reactions state ---------- */
  const [counts, setCounts] = useState(() => loadCounts());
  const [mine, setMine] = useState(() => loadMine());

  useEffect(() => {
    localStorage.setItem(COUNTS_KEY, JSON.stringify(counts));
  }, [counts]);

  useEffect(() => {
    localStorage.setItem(MINE_KEY, JSON.stringify(mine));
  }, [mine]);

  const totalReactions = useMemo(
    () => Object.values(counts).reduce((a, b) => a + b, 0),
    [counts]
  );

  const react = (id) => {
    const used = mine[id] || 0;
    if (used >= MAX_PER_VISITOR) {
      onToast?.(`You've maxed out ${id} reactions — thanks! ✨`);
      return;
    }
    setCounts((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
    setMine((m) => ({ ...m, [id]: used + 1 }));
  };

  return (
    <section id="reviews" className="section">
      <div className="container">
        <span className="eyebrow">
          <span className="dot" /> Kind words
        </span>
        <h2 className="section-title">
          Testimonials &amp; <span className="accent">Wall of Love</span>
        </h2>
        <p className="section-sub">
          A few words from people I've shipped real projects with — and a quick way for
          you to leave a reaction before you go.
        </p>

        {/* ===================== CAROUSEL ===================== */}
        <div
          className="t-stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="t-quote-mark" aria-hidden>
            “
          </div>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              className="t-quote"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <p className="t-text">{current.quote}</p>

              <div className="t-meta">
                <Initials name={current.name} />
                <div className="t-who">
                  <strong>{current.name}</strong>
                  <span>
                    {current.role} · {current.company}
                  </span>
                </div>
                <Stars value={current.rating} />
              </div>
            </motion.blockquote>
          </AnimatePresence>

          <div className="t-controls">
            <button className="t-nav" onClick={prev} aria-label="Previous testimonial">
              ‹
            </button>
            <div className="t-dots">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  className={`t-dot ${i === idx ? 'active' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="t-nav" onClick={next} aria-label="Next testimonial">
              ›
            </button>
          </div>
        </div>

        {/* ===================== REACTIONS ===================== */}
        <div className="reactions-wrap">
          <div className="reactions-head">
            <h3>Enjoyed the portfolio?</h3>
            <p>Leave a quick reaction — tap any emoji (up to {MAX_PER_VISITOR}× each).</p>
          </div>

          <div className="reactions-row">
            {reactionTypes.map((r) => {
              const used = mine[r.id] || 0;
              const maxed = used >= MAX_PER_VISITOR;
              return (
                <motion.button
                  key={r.id}
                  className={`reaction ${used > 0 ? 'tapped' : ''} ${maxed ? 'maxed' : ''}`}
                  onClick={() => react(r.id)}
                  whileTap={{ scale: 0.92 }}
                  whileHover={!maxed ? { y: -3 } : undefined}
                  aria-label={`React with ${r.label}`}
                  title={maxed ? 'Max reached — thank you!' : r.label}
                >
                  <span className="r-emoji" aria-hidden>
                    {r.emoji}
                  </span>
                  <span className="r-count">{counts[r.id] ?? 0}</span>
                  {used > 0 && <span className="r-mine">+{used}</span>}
                </motion.button>
              );
            })}
          </div>

          <div className="reactions-foot">
            <span className="visitor-pill">
              ✨ <b>{totalReactions}</b> total reactions on this page
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
