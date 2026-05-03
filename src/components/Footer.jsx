import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio.js';

const VISITOR_KEY = 'ys-portfolio-visits';

function bumpVisits() {
  try {
    const n = Number(localStorage.getItem(VISITOR_KEY) || 0) + 1;
    localStorage.setItem(VISITOR_KEY, String(n));
    return n;
  } catch {
    return 1;
  }
}

export default function Footer() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    setVisits(bumpVisits());
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>
            Happy to see you here
          </span>{' '}
          — have a great day ahead 👋
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="visitor-pill" title="Local visit counter">
            👀 You’re visit <b>#{visits}</b>
          </span>
          <div className="socials">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">⌨</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">in</a>
            <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" title="LeetCode">⌗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
