"use client";
import { useState } from 'react';
import Link from 'next/link';
import './learn.css';

const NUMS = Array.from({ length: 49 }, (_, i) => i + 2); // 2..50

const SIEVE_STEPS = [
  { prime: 2, msg: "2 is prime! Cross out all its multiples: 4, 6, 8… Every even number greater than 2 is composite." },
  { prime: 3, msg: "3 is prime! Cross out its multiples: 6, 9, 12, 15… Some were already gone — that's fine." },
  { prime: 5, msg: "5 is prime! Most multiples of 5 are already crossed. 25 = 5×5 and 35 = 5×7 are new." },
  { prime: 7, msg: "7 is prime! Only 49 = 7×7 is new. We're done — no prime ≤ √50 remains to sieve." },
];

const QUIZ_QS = [
  { n: 7,  prime: true,  hint: "7 can't be divided evenly by 2, 3, or 5. Nothing works — it's prime!" },
  { n: 15, prime: false, hint: "15 = 3 × 5. Since 3 divides 15, it's composite (not prime)." },
  { n: 2,  prime: true,  hint: "2 is the only even prime. Every other even number is divisible by 2, so none of them qualify." },
  { n: 49, prime: false, hint: "49 = 7 × 7. Looks prime at first glance — but 7 divides it!" },
  { n: 23, prime: true,  hint: "Try 2, 3, 5 — none divide 23 evenly. It's prime!" },
  { n: 1,  prime: false, hint: "1 is NOT prime. Primes must have exactly 2 divisors: 1 and themselves. The number 1 only has one divisor." },
];

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

function primeFactors(n) {
  const factors = [];
  for (let d = 2; d * d <= n; d++) {
    while (n % d === 0) { factors.push(d); n = Math.floor(n / d); }
  }
  if (n > 1) factors.push(n);
  return factors;
}

export default function LearnClient() {
  // ── Sieve state ──────────────────────────────────────────
  const [sieveStep, setSieveStep]   = useState(-1);
  const [crossed, setCrossed]       = useState(new Set());
  const [activePrime, setActivePrime] = useState(null);

  // ── Quiz state ───────────────────────────────────────────
  const [qIdx, setQIdx]         = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const [score, setScore]       = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  // ── Try-your-own state ───────────────────────────────────
  const [tryInput, setTryInput]   = useState('');
  const [tryResult, setTryResult] = useState(null);

  // ── Sieve logic ──────────────────────────────────────────
  function advanceSieve() {
    const nextStep = sieveStep + 1;
    if (nextStep >= SIEVE_STEPS.length) {
      setSieveStep(SIEVE_STEPS.length);
      setActivePrime(null);
      return;
    }
    const { prime } = SIEVE_STEPS[nextStep];
    setActivePrime(prime);
    setSieveStep(nextStep);
    setCrossed(prev => {
      const next = new Set(prev);
      for (let m = 2 * prime; m <= 50; m += prime) next.add(m);
      return next;
    });
  }

  function resetSieve() {
    setSieveStep(-1);
    setCrossed(new Set());
    setActivePrime(null);
  }

  // ── Quiz logic ───────────────────────────────────────────
  function answer(userSaysPrime) {
    if (answered) return;
    if (userSaysPrime === QUIZ_QS[qIdx].prime) setScore(s => s + 1);
    setSelected(userSaysPrime);
    setAnswered(true);
  }

  function nextQuestion() {
    const next = qIdx + 1;
    if (next >= QUIZ_QS.length) setQuizDone(true);
    else { setQIdx(next); setAnswered(false); setSelected(null); }
  }

  function resetQuiz() {
    setQIdx(0); setAnswered(false); setSelected(null);
    setScore(0); setQuizDone(false);
  }

  // ── Try-your-own logic ───────────────────────────────────
  function checkNumber() {
    const n = parseInt(tryInput, 10);
    if (isNaN(n) || n < 2 || n > 1000) {
      setTryResult({ error: 'Enter a whole number between 2 and 1000.' });
      return;
    }
    if (isPrime(n)) setTryResult({ prime: true, n });
    else setTryResult({ prime: false, n, factors: primeFactors(n) });
  }

  // ── Derived ──────────────────────────────────────────────
  const sieveDone    = sieveStep >= SIEVE_STEPS.length;
  const currentStep  = sieveStep >= 0 && sieveStep < SIEVE_STEPS.length ? SIEVE_STEPS[sieveStep] : null;
  const nextStepPrime = sieveStep + 1 < SIEVE_STEPS.length ? SIEVE_STEPS[sieveStep + 1].prime : null;
  const confirmedPrimes = NUMS.filter(n => !crossed.has(n));

  const q = !quizDone ? QUIZ_QS[qIdx] : null;
  const wasCorrect = answered && selected === q?.prime;

  return (
    <div className="learn-wrap">

      {/* ── Breadcrumb ── */}
      <div className="learn-breadcrumb">
        <Link href="/math">← Math</Link>
      </div>

      {/* ── Header ── */}
      <header>
        <p className="learn-tag">Number Theory · 6th Grade</p>
        <h1 className="learn-title">Prime Numbers</h1>
        <p className="learn-subtitle">
          Every whole number is either prime — or built entirely from primes.
          That makes primes the <em>atoms of arithmetic</em>.
        </p>
      </header>

      {/* ── Story ── */}
      <section className="learn-section story-section">
        <p>
          Imagine you had to describe every number using just a small set of "building
          blocks." It turns out, you can. The building blocks are called{' '}
          <strong>prime numbers</strong> — numbers that can't be broken down any further.
        </p>
        <p>
          A prime is any whole number greater than 1 that has{' '}
          <em>no divisors except 1 and itself</em>. So 7 is prime (nothing divides it
          evenly), but 6 is not — because 6 = 2 × 3.
        </p>

        <div className="story-callout">
          <span className="callout-emoji">💡</span>
          <span>
            Every composite number is a product of primes:{' '}
            12 = 2 × 2 × 3, 100 = 2 × 2 × 5 × 5. This fact — that the
            factorization is <em>unique</em> — is called the{' '}
            <strong>Fundamental Theorem of Arithmetic</strong>.
          </span>
        </div>

        <p>
          Around <strong>200 BCE</strong>, a Greek mathematician named{' '}
          <strong>Eratosthenes</strong> invented a brilliant method to find all primes
          at once. He imagined passing all numbers through a <em>sieve</em> — composites
          fall through the holes, primes stay behind.
        </p>
        <p>
          (The same <Link href="/bridges">Euler who solved the Königsberg bridge puzzle</Link>
          {' '}also proved that primes go on forever — they never stop, no matter how far
          you count. Euler shows up everywhere!)
        </p>
      </section>

      {/* ── Station 1: Sieve ── */}
      <section className="learn-section">
        <div className="station-header">
          <span className="station-number">1</span>
          <div>
            <h2 className="station-title">The Sieve of Eratosthenes</h2>
            <p className="station-desc">
              Cross out composites step by step. Whatever's left is prime.
            </p>
          </div>
        </div>

        <div className={`sieve-msg ${sieveStep >= 0 ? 'sieve-msg-visible' : ''}`}>
          {sieveDone
            ? '✅ All done! Every uncrossed number is confirmed prime.'
            : currentStep
              ? currentStep.msg
              : 'Press Start to begin the sieve.'}
        </div>

        <div className="sieve-grid">
          {NUMS.map(n => {
            const isCrossed  = crossed.has(n);
            const isActive   = n === activePrime;
            const isConfirmed = sieveDone && !isCrossed;
            return (
              <div
                key={n}
                className={[
                  'sieve-cell',
                  isCrossed   ? 'cell-crossed'         : '',
                  isActive    ? 'cell-prime-now'        : '',
                  isConfirmed ? 'cell-prime-confirmed'  : '',
                ].filter(Boolean).join(' ')}
              >
                {n}
              </div>
            );
          })}
        </div>

        <div className="sieve-controls">
          {!sieveDone && (
            <button className="btn-primary" onClick={advanceSieve}>
              {sieveStep === -1
                ? '▶ Start the Sieve'
                : nextStepPrime
                  ? `Next: cross out multiples of ${nextStepPrime}`
                  : 'Finish →'}
            </button>
          )}
          {sieveStep >= 0 && (
            <button className="btn-ghost" onClick={resetSieve}>↺ Reset</button>
          )}
        </div>

        {sieveDone && (
          <div className="sieve-result">
            <strong>Primes from 2 to 50:</strong>{' '}
            {confirmedPrimes.join(', ')}
            <p style={{ marginTop: '0.6rem', fontSize: '0.85rem', color: '#166534' }}>
              15 primes in all. Notice they get <em>sparser</em> as you go further —
              but they never stop completely.
            </p>
          </div>
        )}
      </section>

      {/* ── Station 2: Quiz ── */}
      <section className="learn-section">
        <div className="station-header">
          <span className="station-number">2</span>
          <div>
            <h2 className="station-title">Prime or Not Prime?</h2>
            <p className="station-desc">Six numbers. Trust your instincts.</p>
          </div>
        </div>

        {!quizDone ? (
          <>
            <div className="quiz-progress">
              {QUIZ_QS.map((_, i) => (
                <div
                  key={i}
                  className={`quiz-dot ${i < qIdx ? 'dot-done' : i === qIdx ? 'dot-current' : ''}`}
                />
              ))}
            </div>

            <div className="quiz-card">
              <div className="quiz-number">{q.n}</div>
              <p className="quiz-question">Is {q.n} a prime number?</p>

              {!answered ? (
                <div className="quiz-buttons">
                  <button className="btn-yes" onClick={() => answer(true)}>✓ Yes, prime!</button>
                  <button className="btn-no"  onClick={() => answer(false)}>✗ Not prime</button>
                </div>
              ) : (
                <div className={`quiz-feedback ${wasCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
                  <div className="feedback-badge">{wasCorrect ? '🎉 Correct!' : '❌ Not quite —'}</div>
                  <p className="feedback-hint">{q.hint}</p>
                  <button
                    className="btn-primary"
                    onClick={nextQuestion}
                    style={{ marginTop: '0.85rem' }}
                  >
                    {qIdx < QUIZ_QS.length - 1 ? 'Next question →' : 'See my score →'}
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="quiz-done">
            <div className="quiz-score-big">{score} / {QUIZ_QS.length}</div>
            <p className="quiz-verdict">
              {score === 6
                ? '🌟 Perfect! Eratosthenes would be impressed.'
                : score >= 4
                  ? '👏 Great job! The sieve is with you.'
                  : '📚 Good try! Run the sieve again and look for patterns.'}
            </p>
            <button className="btn-primary" onClick={resetQuiz}>↺ Try again</button>
          </div>
        )}
      </section>

      {/* ── Station 3: Try your own number ── */}
      <section className="learn-section">
        <div className="station-header">
          <span className="station-number">3</span>
          <div>
            <h2 className="station-title">Check Any Number</h2>
            <p className="station-desc">Enter any number up to 1,000 and we'll check it.</p>
          </div>
        </div>

        <div className="try-row">
          <input
            className="try-input"
            type="number"
            min="2"
            max="1000"
            placeholder="e.g. 97"
            value={tryInput}
            onChange={e => { setTryInput(e.target.value); setTryResult(null); }}
            onKeyDown={e => e.key === 'Enter' && checkNumber()}
          />
          <button className="btn-primary" onClick={checkNumber}>Check →</button>
        </div>

        {tryResult && !tryResult.error && (
          <div className={`try-result ${tryResult.prime ? 'try-prime' : 'try-composite'}`}>
            <span className="try-emoji">{tryResult.prime ? '⭐' : '🔩'}</span>
            {tryResult.prime ? (
              <span>
                <strong>{tryResult.n}</strong> is <strong>prime</strong>!
                Nothing divides it except 1 and {tryResult.n}.
              </span>
            ) : (
              <span>
                <strong>{tryResult.n}</strong> is <strong>composite</strong>:{' '}
                {tryResult.n} = {tryResult.factors.join(' × ')}
              </span>
            )}
          </div>
        )}
        {tryResult?.error && (
          <p className="try-error">{tryResult.error}</p>
        )}
      </section>

      {/* ── Footer nav ── */}
      <div className="learn-footer-nav">
        <Link href="/bridges" className="learn-next">
          Next up: Euler's Bridges →
        </Link>
        <p style={{ fontSize: '0.82rem', color: '#9ca3af', marginTop: '0.4rem' }}>
          The same Euler who proved primes never stop also cracked the Königsberg
          bridge puzzle — using a beautiful idea called <em>graph theory</em>.
        </p>
      </div>

    </div>
  );
}
