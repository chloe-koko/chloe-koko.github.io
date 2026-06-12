"use client";
import katex from 'katex';
import 'katex/dist/katex.min.css';
import Link from 'next/link';
import './fifth.css';

function K({ tex, block = false }) {
  const html = katex.renderToString(tex, { displayMode: block, throwOnError: false });
  return <span dangerouslySetInnerHTML={{ __html: html }} className={block ? 'k-block' : 'k-inline'} />;
}

function RectFig({ wLabel, hLabel, fill, stroke }) {
  return (
    <svg viewBox="0 0 250 158" xmlns="http://www.w3.org/2000/svg"
         style={{ width: '100%', maxWidth: '220px', display: 'block', margin: '0.5rem auto' }}
         fontFamily="Arial, sans-serif">
      <rect x="38" y="14" width="158" height="88" fill={fill} stroke={stroke} strokeWidth="2" rx="4"/>
      <text x="117" y="63" textAnchor="middle" fontSize="11" fill={stroke} opacity="0.65" fontStyle="italic">Area = ?</text>
      <line x1="38" y1="114" x2="196" y2="114" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="38"  y1="109" x2="38"  y2="119" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="196" y1="109" x2="196" y2="119" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="117" y="134" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e3a5f">{wLabel}</text>
      <line x1="208" y1="14" x2="208" y2="102" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="203" y1="14"  x2="213" y2="14"  stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="203" y1="102" x2="213" y2="102" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="228" y="58" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e3a5f"
            transform="rotate(90, 228, 58)">{hLabel}</text>
    </svg>
  );
}

function StationHeader({ id, title, desc }) {
  return (
    <div className="fifth-station-header">
      <span className="fifth-station-num">{id}</span>
      <div>
        <h2 className="fifth-station-title">{title}</h2>
        {desc && <p className="fifth-station-desc">{desc}</p>}
      </div>
    </div>
  );
}

function WordText({ parts }) {
  return (
    <p className="fifth-word-text">
      {parts.map((p, i) =>
        p.tex ? <K key={i} tex={p.tex} /> : <span key={i}>{p.text}</span>
      )}
    </p>
  );
}

function Problem({ n, children, wide }) {
  return (
    <div className="fifth-problem">
      <span className="fifth-prob-num">{n}</span>
      <div className="fifth-prob-body">{children}</div>
    </div>
  );
}

function AnswerLine({ label, large }) {
  return (
    <div className="fifth-answer-line">
      {label} <span className={`fifth-blank${large ? ' fifth-blank-lg' : ''}`} />
    </div>
  );
}

function renderProblem(prob) {
  if (prob.type === 'compute') {
    return (
      <Problem key={prob.n} n={prob.n}>
        <K tex={prob.tex} block />
        <AnswerLine label="=" />
      </Problem>
    );
  }
  if (prob.type === 'word') {
    return (
      <Problem key={prob.n} n={prob.n} wide>
        <WordText parts={prob.parts} />
        <AnswerLine label={prob.label} large />
      </Problem>
    );
  }
  if (prob.type === 'area') {
    return (
      <Problem key={prob.n} n={prob.n} wide>
        <RectFig wLabel={prob.wLabel} hLabel={prob.hLabel} fill={prob.fill} stroke={prob.stroke} />
        <K tex={prob.tex} block />
        <AnswerLine label={prob.label} large />
      </Problem>
    );
  }
  return null;
}

function getLayoutClass(layout) {
  if (layout === 'area-grid') return 'fifth-area-grid';
  if (layout === 'grid') return 'fifth-grid';
  return 'fifth-list';
}

export default function SessionClient({ session, prevId, nextId }) {
  return (
    <div className="fifth-wrap">

      <div className="fifth-breadcrumb">
        <Link href="/math/5th-grade">← 5th Grade Practice</Link>
      </div>

      <header>
        <p className="fifth-tag">5th Grade · Session {session.id} of 10</p>
        <h1 className="fifth-title">{session.title}</h1>
        <p className="fifth-subtitle">{session.description}</p>
      </header>

      {session.sections.map(sec => (
        <section key={sec.id} className="fifth-section">
          <StationHeader id={sec.id} title={sec.title} desc={sec.desc} />
          <div className={getLayoutClass(sec.layout)}>
            {sec.problems.map(prob => renderProblem(prob))}
          </div>
        </section>
      ))}

      <div className="fifth-nav">
        {prevId ? (
          <Link href={`/math/5th-grade/${prevId}`}>← Session {prevId}</Link>
        ) : (
          <span className="fifth-nav-ghost">← Previous</span>
        )}
        <span className="fifth-session-meta">Session {session.id} · {session.title}</span>
        {nextId ? (
          <Link href={`/math/5th-grade/${nextId}`}>Session {nextId} →</Link>
        ) : (
          <span className="fifth-nav-ghost">Next →</span>
        )}
      </div>

    </div>
  );
}
