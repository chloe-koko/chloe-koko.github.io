import Link from 'next/link';

export const metadata = {
  title: "Math — Chloe's Site",
  description: "Explore math ideas that are actually interesting.",
};

const TOPICS = [
  {
    emoji: '🔢',
    tag: 'Number Theory',
    title: 'Prime Numbers',
    desc: 'Every number is either prime — or built from primes. Discover the secret structure of arithmetic with a 2,000-year-old trick.',
    href: '/math/learn',
    cta: 'Start learning →',
    ready: true,
  },
  {
    emoji: '✏️',
    tag: '5th Grade · Practice',
    title: 'Fractions, Decimals & Area',
    desc: 'Ten practice sessions: fraction operations, decimal arithmetic, and area of rectangles with fractional and decimal side lengths.',
    href: '/math/5th-grade',
    cta: 'Open practice →',
    ready: true,
  },
  {
    emoji: '🌉',
    tag: 'Graph Theory',
    title: 'Königsberg Bridges',
    desc: 'Can you walk through a city and cross every bridge exactly once? Euler tried — and invented a whole new branch of math in the process.',
    href: '/bridges',
    cta: 'Try the puzzle →',
    ready: true,
  },
  {
    emoji: '📐',
    tag: 'Geometry',
    title: 'Shapes & Area',
    desc: "Why does a circle’s area involve π? Why do triangles always add up to 180°? The answers are weirder than you think.",
    href: '#',
    cta: 'Coming soon',
    ready: false,
  },
  {
    emoji: '🎲',
    tag: 'Probability',
    title: 'Chance & Luck',
    desc: 'If you flip a coin 10 times and get heads every time, what are the odds of heads on flip 11? Most people get this wrong.',
    href: '#',
    cta: 'Coming soon',
    ready: false,
  },
];

export default function MathPage() {
  return (
    <main className="page-container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <p style={{
        fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase',
        color: '#9ca3af', marginBottom: '0.5rem',
      }}>
        Mathematics
      </p>
      <h1 style={{
        fontSize: '2.4rem', fontWeight: 900, color: '#111827',
        lineHeight: 1.1, marginBottom: '0.8rem',
      }}>
        Math is a Superpower
      </h1>
      <p style={{
        color: '#6b7280', fontSize: '1rem', lineHeight: 1.75,
        marginBottom: '2.5rem', maxWidth: '520px',
      }}>
        Not formulas to memorize — ideas to discover. Each topic starts with a story
        and gives you something to actually do.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {TOPICS.map(t => (
          <div key={t.title} style={{
            border: '1.5px solid #e5e7eb',
            borderRadius: '14px',
            padding: '1.5rem',
            background: '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            opacity: t.ready ? 1 : 0.55,
          }}>
            <div style={{ fontSize: '1.9rem', marginBottom: '0.4rem' }}>{t.emoji}</div>
            <p style={{
              fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#a78bfa', fontWeight: 600, marginBottom: '0.25rem',
            }}>
              {t.tag}
            </p>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem' }}>
              {t.title}
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1rem' }}>
              {t.desc}
            </p>
            {t.ready ? (
              <Link href={t.href} style={{
                fontSize: '0.875rem', fontWeight: 700, color: '#7c3aed', textDecoration: 'none',
              }}>
                {t.cta}
              </Link>
            ) : (
              <span style={{ fontSize: '0.8rem', color: '#d1d5db', fontWeight: 600, letterSpacing: '0.05em' }}>
                Coming soon
              </span>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
