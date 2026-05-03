import { motion } from 'framer-motion';
import { aboutHighlights } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <span className="eyebrow">
          <span className="dot" /> About me
        </span>
        <h2 className="section-title">
          Allow me to <span className="accent">introduce</span> myself
        </h2>
        <p className="section-sub">
          A short story of where I’ve been and the kind of work I love shipping.
        </p>

        <div className="about-grid">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              I’m <strong>Yashaswi Srivastava</strong>, a Full Stack Software Developer with{' '}
              <strong>3+ years</strong> of experience designing and scaling backend systems
              with <strong>C#</strong>, <strong>ASP.NET MVC / Web API</strong>,{' '}
              <strong>.NET Core</strong>, <strong>SQL</strong>, and <strong>Azure</strong>.
            </p>
            <p>
              At <strong>Jio Platforms</strong>, I build high-performance APIs and
              data-intensive workflows that support <strong>150K+ daily transactions</strong>
              . I focus heavily on system optimization, CI/CD automation, and database
              performance tuning — and I take real pride in shaving milliseconds off the
              critical path.
            </p>
            <p>
              Recently I’ve been pairing my backend work with <strong>Generative AI</strong>{' '}
              — LLM integration, prompt engineering, and RAG pipelines — to bring
              intelligent automation into enterprise workflows. Outside the day job I enjoy
              full-stack side projects, clean architecture, and keeping a sharp eye on
              developer experience.
            </p>
          </motion.div>

          <div className="about-list">
            {aboutHighlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="about-item"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="ico" aria-hidden>
                  {h.icon}
                </div>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
