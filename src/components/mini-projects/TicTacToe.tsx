'use client';

import {useState} from 'react';

type Cell = 'X' | 'O' | null;

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board: Cell[]): Cell {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = getWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);

  function handleClick(index: number) {
    if (board[index] || winner) return;
    const next = [...board];
    next[index] = xIsNext ? 'X' : 'O';
    setBoard(next);
    setXIsNext(!xIsNext);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  let status: string;
  if (winner) status = `${winner} menang!`;
  else if (isDraw) status = 'Seri!';
  else status = `Giliran: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="glass-panel mx-auto flex w-full max-w-xs flex-col items-center gap-5 rounded-3xl p-6">
      <p className="font-mono text-sm text-teal">{status}</p>

      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button key={i} onClick={() => handleClick(i)} className="glass-panel flex h-20 w-20 items-center justify-center rounded-xl font-display text-3xl font-semibold transition-transform hover:scale-[1.04] active:scale-95">
            <span className={cell === 'X' ? 'text-violet' : 'text-teal'}>{cell}</span>
          </button>
        ))}
      </div>

      <button onClick={reset} className="glass-panel rounded-full px-5 py-2 font-body text-sm font-medium text-ink-muted transition-colors hover:text-ink">
        Main lagi
      </button>
    </div>
  );
}
