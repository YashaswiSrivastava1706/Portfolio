import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/portfolio.js';

export default function Skills() {
  const [tab, setTab] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === tab);

  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="eyebrow">
          <span className="dot" /> Toolbox
        </span>
        <h2 className="section-title">
          Skills &amp; <span className="accent">Tech Stack</span>
        </h2>
        <p className="section-sub">
          The tools I reach for most. Levels are self-assessed and grounded in actual
          shipped work.
        </p>

        <div className="skills-tabs">
          {skillCategories.map((c) => (
            <button
              key={c.id}
              className={`skill-tab ${c.id === tab ? 'active' : ''}`}
              onClick={() => setTab(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="skills-grid"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {active.skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="skill-pill"
                style={{ flexDirection: 'column', alignItems: 'stretch', gap: 0 }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>{s.name}</span>
                  <span className="lvl">{s.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.04 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
