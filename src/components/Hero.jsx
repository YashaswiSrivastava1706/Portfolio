import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile, stats } from '../data/portfolio.js';

function useTypewriter(words, typing = 80, holding = 1400) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), holding);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          const next = deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1);
          setText(next);
        },
        deleting ? typing / 2 : typing
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, typing, holding]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.typewriter);

  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">
            <span className="dot" /> Available for new opportunities
          </span>
          <div className="typer">
            &gt; {typed}
            <span className="caret">&nbsp;</span>
          </div>
          <h1>
            Hi, I’m <span className="grad">{profile.name.split(' ')[0]}</span>.
            <br />I build <span className="grad">scalable full stack</span> projects.
          </h1>
          <p className="lead">{profile.tagline}</p>

          <div className="cta">
            <a className="btn btn-primary" href="#projects">
              View My Work →
            </a>
            <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              📄 Download Resume
            </a>
            <a className="btn" href="#contact">
              💬 Let’s Talk
            </a>
          </div>

          <div className="stats">
            {stats.map((s, i) => (
              <motion.div
                key={s.lbl}
                className="stat"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.08 }}
              >
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="terminal-bar">
            <span /> <span /> <span />
          </div>
          <div className="terminal">
            <div>
              <span className="prompt">$</span> whoami
            </div>
            <div className="muted">→ Full Stack Software Developer @ Jio Platforms</div>
            <div style={{ marginTop: 10 }}>
              <span className="prompt">$</span> cat profile.json
            </div>
            <pre style={{ margin: 0 }}>
{`{
  `}<span className="key">"name"</span>{`: `}<span className="str">"Yashaswi Srivastava"</span>{`,
  `}<span className="key">"experience"</span>{`: `}<span className="str">"3+ years"</span>{`,
  `}<span className="key">"stack"</span>{`: [`}<span className="str">"C#"</span>{`, `}<span className="str">".NET"</span>{`, `}<span className="str">"React"</span>{`, `}<span className="str">"Azure"</span>{`, `}<span className="str">"Java (basics)"</span>{`, `}<span className="str">"MySQL"</span>{`, `}<span className="str">"MSSQL"</span>{`],
  `}<span className="key">"focus"</span>{`: [`}<span className="str">"APIs"</span>{`, `}<span className="str">"Performance"</span>{`, `}<span className="str">"GenAI"</span>{`],
  `}<span className="key">"location"</span>{`: `}<span className="str">"Mumbai, India"</span>{`,
  `}<span className="key">"open_to_work"</span>{`: `}<span className="str">true</span>{`
}`}
            </pre>
            <div style={{ marginTop: 10 }}>
              <span className="prompt">$</span> echo "Let’s build something great."{' '}
              <span className="caret">&nbsp;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
