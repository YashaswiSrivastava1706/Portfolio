import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, THEMES } from '../context/ThemeContext.jsx';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'playground', label: 'Playground' },
  { id: 'reviews', label: 'Thoughts' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, cycleTheme } = useTheme();
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 140;
      let current = 'home';
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= offset) current = l.id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const themeMeta = THEMES.find((t) => t.id === theme);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span>Yashaswi Srivastava</span>
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''}>
              {l.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            onClick={cycleTheme}
            aria-label={`Switch theme (current: ${themeMeta.label})`}
            title={`Theme: ${themeMeta.label} — click to switch`}
          >
            <span>{themeMeta.icon}</span>
            <span>{themeMeta.label}</span>
          </button>
        </nav>

        <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="container"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="nav-mobile">
              {links.map((l) => (
                <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <button
                className="theme-toggle"
                onClick={cycleTheme}
                style={{ alignSelf: 'flex-start', marginTop: 8 }}
              >
                <span>{themeMeta.icon}</span>
                <span>Theme: {themeMeta.label}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
