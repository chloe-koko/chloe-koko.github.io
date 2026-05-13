"use client";
import { useState } from 'react';
import Link from 'next/link';
import './bridges.css';

/*
  Königsberg bridge graph
  ──────────────────────
  Nodes: A (north bank), B (south bank), C (island), D (east bank)
  Bridges (edges between nodes):
    0: A–C   1: A–C (parallel)   2: A–D
    3: B–C   4: B–C (parallel)   5: B–D
    6: C–D

  Node degrees: A=3, B=3, C=5, D=3  → all odd → no Eulerian path
*/

const NODES = {
  A: { label: 'North Bank', x: 200, y: 60,  color: '#7c3aed' },
  B: { label: 'South Bank', x: 200, y: 300, color: '#7c3aed' },
  C: { label: 'Island',     x: 80,  y: 180, color: '#a855f7' },
  D: { label: 'East Bank',  x: 320, y: 180, color: '#7c3aed' },
};

// Each bridge: id, nodes it connects, and a midpoint offset for parallel bridges
const BRIDGES = [
  { id: 0, from: 'A', to: 'C', dx: -22, dy: -8,  label: '①' },
  { id: 1, from: 'A', to: 'C', dx:  10, dy:  8,  label: '②' },
  { id: 2, from: 'A', to: 'D', dx:   0, dy:  0,  label: '③' },
  { id: 3, from: 'B', to: 'C', dx: -22, dy:  8,  label: '④' },
  { id: 4, from: 'B', to: 'C', dx:  10, dy: -8,  label: '⑤' },
  { id: 5, from: 'B', to: 'D', dx:   0, dy:  0,  label: '⑥' },
  { id: 6, from: 'C', to: 'D', dx:   0, dy:  0,  label: '⑦' },
];

function bridgeAdjacentTo(bridgeId, nodeId) {
  const b = BRIDGES[bridgeId];
  return b.from === nodeId || b.to === nodeId;
}

function otherEnd(bridgeId, fromNode) {
  const b = BRIDGES[bridgeId];
  return b.from === fromNode ? b.to : b.from;
}

function availableBridgesFrom(node, crossed) {
  return BRIDGES.filter(b => !crossed.has(b.id) && bridgeAdjacentTo(b.id, node));
}

// Cubic bezier control point offset for a bridge
function bridgePath(bridgeId) {
  const b  = BRIDGES[bridgeId];
  const n1 = NODES[b.from];
  const n2 = NODES[b.to];
  const mx = (n1.x + n2.x) / 2 + b.dx;
  const my = (n1.y + n2.y) / 2 + b.dy;
  return `M ${n1.x} ${n1.y} Q ${mx} ${my} ${n2.x} ${n2.y}`;
}

function bridgeMidpoint(bridgeId) {
  const b  = BRIDGES[bridgeId];
  const n1 = NODES[b.from];
  const n2 = NODES[b.to];
  return {
    x: (n1.x + n2.x) / 2 + b.dx,
    y: (n1.y + n2.y) / 2 + b.dy,
  };
}

export default function BridgesClient() {
  const [crossed,     setCrossed]     = useState(new Set());
  const [current,     setCurrent]     = useState(null);  // current node or null
  const [path,        setPath]        = useState([]);    // ['A','B',...]
  const [shake,       setShake]       = useState(null);  // bridge id that was rejected
  const [revealMath,  setRevealMath]  = useState(false);
  const [msg,         setMsg]         = useState('');

  const allCrossed = crossed.size === 7;
  const isStuck    = current !== null && !allCrossed && availableBridgesFrom(current, crossed).length === 0;

  function handleBridgeClick(bridgeId) {
    if (crossed.has(bridgeId)) {
      flash(bridgeId, "You already crossed that bridge!");
      return;
    }
    const b = BRIDGES[bridgeId];

    // First move — start from either end
    if (current === null) {
      const startNode = b.from;
      const endNode   = b.to;
      // Default: start from `from` node, arrive at `to`
      const next = crossed.size === 0 ? new Set() : new Set(crossed);
      next.add(bridgeId);
      setCrossed(next);
      setCurrent(endNode);
      setPath([startNode, endNode]);
      setMsg('');
      return;
    }

    // Must be adjacent to current node
    if (!bridgeAdjacentTo(bridgeId, current)) {
      flash(bridgeId, "You can't get there from here! 🚶");
      return;
    }

    const next = new Set(crossed);
    next.add(bridgeId);
    const arrival = otherEnd(bridgeId, current);
    setCrossed(next);
    setCurrent(arrival);
    setPath(p => [...p, arrival]);
    setMsg('');

    if (next.size === 7) {
      setMsg('🎉 You did it! All 7 bridges crossed!');
    }
  }

  function flash(bridgeId, message) {
    setShake(bridgeId);
    setMsg(message);
    setTimeout(() => setShake(null), 600);
  }

  function reset() {
    setCrossed(new Set());
    setCurrent(null);
    setPath([]);
    setMsg('');
    setRevealMath(false);
  }

  return (
    <div className="bridges-wrap">
      <div className="bridges-header">
        <h1 className="bridges-title">The Bridges of Königsberg</h1>
      </div>

      {/* ── The story ── */}
      <section className="story">
        <p>
          In 1736, in the city of <strong>Königsberg</strong> (in what is now Russia), there was a puzzle
          that people talked about constantly. The city was built on a river, with two islands
          and seven bridges connecting everything together.
        </p>
        <p>
          The question everyone was asking: <strong>can you walk through the city and cross
          every bridge exactly once?</strong> Not twice, not zero times — exactly once each.
          People tried and tried, but nobody could do it.
        </p>
        <p>
          Then a mathematician named <strong>Leonhard Euler</strong> came along — and instead of
          just trying random routes, he asked a deeper question: <em>why</em> is it impossible?
          His answer changed mathematics forever.
        </p>
        <p className="story-cta">
          Try it yourself first! Click the bridges (the numbered lines) in order to walk across them.
        </p>
      </section>

      {/* ── Interactive map ── */}
      <div className="map-container">
        <svg viewBox="0 0 400 360" className="map-svg" aria-label="Map of Königsberg bridges">
          {/* River background */}
          <ellipse cx="200" cy="180" rx="195" ry="155" fill="#bfdbfe" opacity="0.4" />

          {/* Bridges */}
          {BRIDGES.map(b => {
            const mid       = bridgeMidpoint(b.id);
            const isCrossed = crossed.has(b.id);
            const isShaking = shake === b.id;
            const canCross  = !isCrossed && (
              current === null || bridgeAdjacentTo(b.id, current)
            );
            return (
              <g key={b.id} className={isShaking ? 'shake' : ''}>
                <path
                  d={bridgePath(b.id)}
                  className={[
                    'bridge-path',
                    isCrossed ? 'bridge-crossed' : '',
                    canCross  ? 'bridge-available' : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => handleBridgeClick(b.id)}
                />
                {/* Invisible fat hit target */}
                <path
                  d={bridgePath(b.id)}
                  stroke="transparent"
                  strokeWidth={24}
                  fill="none"
                  className="bridge-hit"
                  onClick={() => handleBridgeClick(b.id)}
                />
                {/* Label bubble */}
                <g
                  transform={`translate(${mid.x},${mid.y})`}
                  className="bridge-label-g"
                  onClick={() => handleBridgeClick(b.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle r={14} className={isCrossed ? 'label-circle-done' : 'label-circle'} />
                  <text
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="label-text"
                  >
                    {isCrossed ? '✓' : b.label}
                  </text>
                </g>
              </g>
            );
          })}

          {/* Landmass nodes */}
          {Object.entries(NODES).map(([id, n]) => (
            <g key={id}>
              <circle
                cx={n.x} cy={n.y} r={30}
                className={current === id ? 'node-active' : 'node'}
              />
              <text
                x={n.x} y={n.y - 42}
                textAnchor="middle"
                className="node-label"
              >
                {n.label}
              </text>
              {current === id && (
                <text x={n.x} y={n.y + 8} textAnchor="middle" className="you-are-here">
                  🚶
                </text>
              )}
              <text x={n.x} y={n.y + 5} textAnchor="middle" dominantBaseline="central"
                className="node-id">
                {current !== id ? id : ''}
              </text>
            </g>
          ))}
        </svg>

        {/* Status message */}
        <div className={`map-msg ${msg ? 'map-msg-visible' : ''}`}>{msg || ' '}</div>

        {/* Walk path */}
        {path.length > 0 && (
          <div className="walk-path">
            <span className="walk-label">Your walk: </span>
            {path.map((node, i) => (
              <span key={i}>
                <span className="walk-node">{node}</span>
                {i < path.length - 1 && <span className="walk-arrow"> → </span>}
              </span>
            ))}
            {isStuck && <span className="walk-stuck"> 😬 stuck!</span>}
          </div>
        )}

        <div className="map-actions">
          <button className="btn-reset-map" onClick={reset}>↺ Start Over</button>
          {(isStuck || crossed.size > 0) && !allCrossed && (
            <button className="btn-explain" onClick={() => setRevealMath(true)}>
              🤔 Why is it impossible?
            </button>
          )}
        </div>
      </div>

      {/* ── Euler's explanation ── */}
      {revealMath && (
        <section className="euler-reveal">
          <h2>Euler's Big Idea 💡</h2>
          <p>
            Euler noticed something. To walk through a place and keep moving, you need to
            be able to <em>enter</em> and <em>leave</em> it. That means every place in the
            middle of your walk needs an <strong>even number of bridges</strong> — one to come
            in, one to go out.
          </p>
          <p>
            Only the <strong>very start</strong> and the <strong>very end</strong> of your
            walk are allowed to have an odd number of bridges — because you leave the start
            without coming back, and you arrive at the end without leaving.
          </p>
          <p>
            So for a walk to work, <strong>at most 2 places</strong> can have an odd number
            of bridges. Let's count Königsberg:
          </p>

          <div className="degree-table">
            {[
              { node: 'A', label: 'North Bank', bridges: '①②③', degree: 3 },
              { node: 'B', label: 'South Bank', bridges: '④⑤⑥', degree: 3 },
              { node: 'C', label: 'Island',     bridges: '①②④⑤⑦', degree: 5 },
              { node: 'D', label: 'East Bank',  bridges: '③⑥⑦', degree: 3 },
            ].map(r => (
              <div key={r.node} className="degree-row">
                <span className="degree-node">{r.node}</span>
                <span className="degree-name">{r.label}</span>
                <span className="degree-bridges">{r.bridges}</span>
                <span className={`degree-count ${r.degree % 2 !== 0 ? 'degree-odd' : ''}`}>
                  {r.degree} bridges (odd!)
                </span>
              </div>
            ))}
          </div>

          <p className="euler-conclusion">
            All <strong>4</strong> places have an <strong>odd</strong> number of bridges.
            We'd need at most 2 — so it's <strong>completely impossible!</strong> 🚫
          </p>

          <p>
            Euler didn't just solve the puzzle. He invented a whole new kind of
            mathematics — <strong>graph theory</strong> — by thinking about places as
            dots and bridges as lines. Today, graph theory is used everywhere: to
            design the internet, plan road networks, and even train AI.
          </p>

          <p className="euler-sign">
            Not bad for a walk across some bridges in 1736. 🌉
          </p>
        </section>
      )}

      {!revealMath && (
        <div className="hint-bar">
          Hint: click any numbered bridge to start your walk. Click bridges in sequence to cross them.
        </div>
      )}
    </div>
  );
}
