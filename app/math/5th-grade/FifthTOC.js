"use client";
import Link from 'next/link';
import './fifth.css';

const MAX_DIFFICULTY = 5;

function DifficultyDots({ level }) {
  return (
    <div className="fifth-difficulty" title={`Difficulty ${level} of ${MAX_DIFFICULTY}`}>
      {Array.from({ length: MAX_DIFFICULTY }, (_, i) => (
        <span key={i} className={`fifth-dot${i < level ? ' active' : ''}`} />
      ))}
    </div>
  );
}

export default function FifthTOC({ sessions }) {
  return (
    <div className="fifth-wrap">

      <div className="fifth-breadcrumb">
        <Link href="/math">← Math</Link>
      </div>

      <header>
        <p className="fifth-tag">5th Grade · Practice</p>
        <h1 className="fifth-title">Practice Worksheets</h1>
        <p className="fifth-subtitle">
          Ten sessions that build from the basics of fractions up through area with
          mixed numbers and decimals. Each session has 8–10 problems.
        </p>
      </header>

      <div className="fifth-toc-grid">
        {sessions.map(s => (
          <Link key={s.id} href={`/math/5th-grade/${s.id}`} className="fifth-toc-card">
            <div className="fifth-toc-num">{s.id}</div>
            <div className="fifth-toc-body">
              <div className="fifth-toc-title">{s.title}</div>
              <div className="fifth-toc-desc">{s.description}</div>
              <div className="fifth-topics">
                {s.topics.map(t => (
                  <span key={t} className="fifth-topic-chip">{t}</span>
                ))}
              </div>
            </div>
            <div className="fifth-toc-meta">
              <DifficultyDots level={s.difficulty} />
            </div>
            <span className="fifth-toc-arrow">›</span>
          </Link>
        ))}
      </div>

    </div>
  );
}
