"use client";
import { useState } from 'react';
import './styles.css';

const LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6],
];

function findWinner(squares) {
  for (const [a,b,c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return { symbol: squares[a], line: [a,b,c] };
  }
  return null;
}

function Square({ value, onClick, highlight }) {
  return (
    <button
      className={[
        'square',
        value === 'X' ? 'sq-x' : value === 'O' ? 'sq-o' : '',
        highlight ? 'sq-win' : '',
      ].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default function Game() {
  const [names, setNames]     = useState(['Player 1', 'Player 2']);
  const [editing, setEditing] = useState(null);
  const [scores, setScores]   = useState([0, 0]);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const result  = findWinner(squares);
  const isDraw  = !result && squares.every(Boolean);
  const isOver  = !!(result || isDraw);
  const winLine = result?.line ?? [];

  function handleClick(i) {
    if (result || squares[i] || isDraw) return;
    const next = squares.slice();
    next[i] = xIsNext ? 'X' : 'O';
    const r = findWinner(next);
    if (r) setScores(s => { const n = [...s]; n[r.symbol === 'X' ? 0 : 1]++; return n; });
    setSquares(next);
    if (!r && !next.every(Boolean)) setXIsNext(x => !x);
  }

  function newGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  function updateName(idx, val) {
    const trimmed = val.trim();
    setNames(n => { const next = [...n]; next[idx] = trimmed || (idx === 0 ? 'Player 1' : 'Player 2'); return next; });
    setEditing(null);
  }

  let status;
  if (result) {
    status = `🎉 ${result.symbol === 'X' ? names[0] : names[1]} wins!`;
  } else if (isDraw) {
    status = "It's a draw! 🤝";
  } else {
    const name = xIsNext ? names[0] : names[1];
    const sym  = xIsNext ? 'X' : 'O';
    status = `${name}'s turn (${sym})`;
  }

  return (
    <div className="game-wrap">
      <h1 className="game-title">Tic ❌ Tac ⭕ Toe</h1>

      <div className="players">
        {[0, 1].map(i => (
          <div
            key={i}
            className={[
              'pcard',
              i === 0 ? 'pcard-x' : 'pcard-o',
              !isOver && (i === 0) === xIsNext ? 'pcard-active' : '',
            ].filter(Boolean).join(' ')}
          >
            <span className="p-symbol">{i === 0 ? 'X' : 'O'}</span>

            {editing === i ? (
              <input
                autoFocus
                defaultValue={names[i]}
                className="name-input"
                onBlur={e => updateName(i, e.target.value)}
                onKeyDown={e => e.key === 'Enter' && updateName(i, e.target.value)}
              />
            ) : (
              <button className="p-name" onClick={() => setEditing(i)} title="Tap to rename">
                {names[i]} <span className="edit-icon">✏️</span>
              </button>
            )}

            <span className="p-score">{scores[i]}</span>
          </div>
        ))}
      </div>

      <div className="status-bar">{status}</div>

      <div className="board">
        {squares.map((val, i) => (
          <Square key={i} value={val} onClick={() => handleClick(i)} highlight={winLine.includes(i)} />
        ))}
      </div>

      <div className="actions">
        <button className="btn-primary" onClick={newGame}>
          {isOver ? '▶ Play Again' : '↺ New Game'}
        </button>
        <button className="btn-secondary" onClick={() => { newGame(); setScores([0, 0]); }}>
          Reset Scores
        </button>
      </div>
    </div>
  );
}
