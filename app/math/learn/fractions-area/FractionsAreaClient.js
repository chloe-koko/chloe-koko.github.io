"use client";
import katex from 'katex';
import 'katex/dist/katex.min.css';
import Link from 'next/link';
import './fractions-area.css';

function K({ tex, block = false }) {
  const html = katex.renderToString(tex, { displayMode: block, throwOnError: false });
  return <span dangerouslySetInnerHTML={{ __html: html }} className={block ? 'k-block' : 'k-inline'} />;
}

function RectFig({ wLabel, hLabel, fill, stroke }) {
  return (
    <svg viewBox="0 0 250 158" xmlns="http://www.w3.org/2000/svg"
         style={{ width: '100%', maxWidth: '220px', display: 'block', margin: '0.5rem auto' }}
         fontFamily="Arial, sans-serif">
      {/* Rectangle */}
      <rect x="38" y="14" width="158" height="88" fill={fill} stroke={stroke} strokeWidth="2" rx="4"/>
      {/* "Area = ?" inside */}
      <text x="117" y="63" textAnchor="middle" fontSize="11" fill={stroke} opacity="0.65" fontStyle="italic">Area = ?</text>
      {/* Width dimension (bottom) */}
      <line x1="38" y1="114" x2="196" y2="114" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="38"  y1="109" x2="38"  y2="119" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="196" y1="109" x2="196" y2="119" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="117" y="134" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e3a5f">{wLabel}</text>
      {/* Height dimension (right) */}
      <line x1="208" y1="14" x2="208" y2="102" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="203" y1="14"  x2="213" y2="14"  stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="203" y1="102" x2="213" y2="102" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="228" y="58" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e3a5f"
            transform="rotate(90, 228, 58)">{hLabel}</text>
    </svg>
  );
}

function StationHeader({ num, title, desc }) {
  return (
    <div className="fa-station-header">
      <span className="fa-station-num">{num}</span>
      <div>
        <h2 className="fa-station-title">{title}</h2>
        {desc && <p className="fa-station-desc">{desc}</p>}
      </div>
    </div>
  );
}

function Problem({ num, children, wide }) {
  return (
    <div className={`fa-problem${wide ? ' fa-problem-wide' : ''}`}>
      <span className="fa-prob-num">{num}</span>
      <div className="fa-prob-body">{children}</div>
    </div>
  );
}

const FRACTIONS = [
  { n: 1,  tex: '\\dfrac{3}{4} + \\dfrac{1}{6}' },
  { n: 2,  tex: '\\dfrac{5}{6} - \\dfrac{2}{9}' },
  { n: 3,  tex: '\\dfrac{2}{3} \\times \\dfrac{3}{5}' },
  { n: 4,  tex: '\\dfrac{3}{4} \\div \\dfrac{1}{2}' },
  { n: 5,  tex: '1\\dfrac{2}{3} + 2\\dfrac{3}{4}' },
  { n: 6,  tex: '3\\dfrac{1}{2} - 1\\dfrac{2}{3}' },
  { n: 7,  tex: '2\\dfrac{1}{2} \\times 1\\dfrac{3}{5}' },
  { n: 8,  tex: '\\dfrac{3}{4} \\div \\dfrac{3}{8}' },
];

const DECIMALS = [
  { n: 9,  tex: '4.75 + 3.8' },
  { n: 10, tex: '12.3 - 7.65' },
  { n: 11, tex: '3.4 \\times 2.5' },
  { n: 12, tex: '4.8 \\times 0.25' },
  { n: 13, tex: '7.2 \\div 0.9' },
  { n: 14, tex: '15.6 \\div 1.2' },
  { n: 15, tex: '0.35 + 1.7 + 2.05' },
  { n: 16, tex: '9.04 - 3.8' },
];

const AREA_RECTS = [
  { n: 17, wLabel: '¾ ft',    hLabel: '⅔ ft',    fill: '#dbeafe', stroke: '#3b82f6',
    tex: '\\text{length} = \\dfrac{3}{4}\\text{ ft},\\quad \\text{width} = \\dfrac{2}{3}\\text{ ft}' },
  { n: 18, wLabel: '2½ cm',   hLabel: '1⅓ cm',   fill: '#dcfce7', stroke: '#16a34a',
    tex: '\\text{length} = 2\\dfrac{1}{2}\\text{ cm},\\quad \\text{width} = 1\\dfrac{1}{3}\\text{ cm}' },
  { n: 19, wLabel: '4.5 m',   hLabel: '3.2 m',   fill: '#fff7ed', stroke: '#ea580c',
    tex: '\\text{length} = 4.5\\text{ m},\\quad \\text{width} = 3.2\\text{ m}' },
  { n: 20, wLabel: '2.75 in', hLabel: '1.4 in',  fill: '#fdf4ff', stroke: '#9333ea',
    tex: '\\text{length} = 2.75\\text{ in},\\quad \\text{width} = 1.4\\text{ in}' },
];

export default function FractionsAreaClient() {
  return (
    <div className="fa-wrap">

      <div className="fa-breadcrumb">
        <Link href="/math">← Math</Link>
      </div>

      <header>
        <p className="fa-tag">5th Grade · Practice</p>
        <h1 className="fa-title">Fractions, Decimals &amp; Area</h1>
        <p className="fa-subtitle">
          Work through each section. Show all your steps.
        </p>
      </header>

      {/* ── Section A: Fractions ── */}
      <section className="fa-section">
        <StationHeader num="A" title="Fractions"
          desc="Simplify your answers as much as possible." />
        <div className="fa-grid">
          {FRACTIONS.map(({ n, tex }) => (
            <Problem key={n} num={n}>
              <K tex={tex} block />
              <div className="fa-answer-line">= <span className="fa-blank" /></div>
            </Problem>
          ))}
        </div>
      </section>

      {/* ── Section B: Decimals ── */}
      <section className="fa-section">
        <StationHeader num="B" title="Decimals"
          desc="Line up the decimal point when adding or subtracting." />
        <div className="fa-grid">
          {DECIMALS.map(({ n, tex }) => (
            <Problem key={n} num={n}>
              <K tex={tex} block />
              <div className="fa-answer-line">= <span className="fa-blank" /></div>
            </Problem>
          ))}
        </div>
      </section>

      {/* ── Section C: Area of Rectangles ── */}
      <section className="fa-section">
        <StationHeader num="C" title="Area of Rectangles"
          desc="Area = length × width. Don't forget the units (ft², cm², m², in²)." />
        <div className="fa-area-grid">
          {AREA_RECTS.map(({ n, wLabel, hLabel, fill, stroke, tex }) => (
            <Problem key={n} num={n} wide>
              <RectFig wLabel={wLabel} hLabel={hLabel} fill={fill} stroke={stroke} />
              <K tex={tex} block />
              <div className="fa-answer-line">Area = <span className="fa-blank fa-blank-lg" /></div>
            </Problem>
          ))}
        </div>
      </section>

      {/* ── Section D: Word Problems ── */}
      <section className="fa-section">
        <StationHeader num="D" title="Word Problems"
          desc="Draw a picture if it helps. Write the equation, then solve." />
        <div className="fa-word-list">

          <Problem num={21} wide>
            <p className="fa-word-text">
              A garden bed is <K tex="\dfrac{3}{4}" /> of a yard wide and{' '}
              <K tex="\dfrac{5}{6}" /> of a yard long. What is its area?
            </p>
            <div className="fa-answer-line">Area = <span className="fa-blank fa-blank-lg" /></div>
          </Problem>

          <Problem num={22} wide>
            <p className="fa-word-text">
              A tile is <K tex="2.4" /> inches long and <K tex="1.5" /> inches wide.
              What is its area?
            </p>
            <div className="fa-answer-line">Area = <span className="fa-blank fa-blank-lg" /></div>
          </Problem>

          <Problem num={23} wide>
            <p className="fa-word-text">
              A patch of grass measures <K tex="4\dfrac{1}{2}" /> feet by{' '}
              <K tex="2\dfrac{2}{3}" /> feet. What is its area?
            </p>
            <div className="fa-answer-line">Area = <span className="fa-blank fa-blank-lg" /></div>
          </Problem>

          <Problem num={24} wide>
            <p className="fa-word-text">
              A pool cover is <K tex="8.5" /> meters long and <K tex="4.2" /> meters wide.
              How many square meters does it cover?
            </p>
            <div className="fa-answer-line">Area = <span className="fa-blank fa-blank-lg" /></div>
          </Problem>

        </div>
      </section>

      {/* ── Challenge ── */}
      <section className="fa-section fa-challenge">
        <StationHeader num="⭐" title="Challenge"
          desc="These are harder — take your time and show every step." />
        <div className="fa-word-list">

          <Problem num={25} wide>
            <p className="fa-word-text">
              A yard is <K tex="15\dfrac{1}{2}" /> feet long and{' '}
              <K tex="8\dfrac{3}{4}" /> feet wide. What is the total area?
            </p>
            <div className="fa-answer-line">Area = <span className="fa-blank fa-blank-lg" /></div>
          </Problem>

          <Problem num={26} wide>
            <p className="fa-word-text">
              Three square tiles each have a side length of{' '}
              <K tex="2\dfrac{1}{3}" /> inches.
              What is the <em>total</em> area covered by all three tiles together?
            </p>
            <div className="fa-answer-line">Total area = <span className="fa-blank fa-blank-lg" /></div>
          </Problem>

        </div>
      </section>

      {/* ── Footer ── */}
      <div className="fa-footer-note">
        <span className="fa-footer-emoji">✏️</span>
        <span>Show all your steps and check each answer.</span>
      </div>

      <div className="fa-footer-nav">
        <Link href="/math" className="fa-back-link">← Back to Math</Link>
      </div>

    </div>
  );
}
