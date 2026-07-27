'use client';

import {useState} from 'react';

type PendingOp = '+' | '-' | '×' | '÷' | null;

const keys = ['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='] as const;

function compute(a: number, b: number, op: PendingOp): number {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '×':
      return a * b;
    case '÷':
      return b === 0 ? NaN : a / b;
    default:
      return b;
  }
}

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [stored, setStored] = useState<number | null>(null);
  const [pendingOp, setPendingOp] = useState<PendingOp>(null);
  const [overwrite, setOverwrite] = useState(true);

  function inputDigit(digit: string) {
    if (overwrite) {
      setDisplay(digit === '.' ? '0.' : digit);
      setOverwrite(false);
      return;
    }
    if (digit === '.' && display.includes('.')) return;
    setDisplay((prev) => (prev === '0' && digit !== '.' ? digit : prev + digit));
  }

  function applyOperator(op: (typeof keys)[number]) {
    const current = parseFloat(display);

    if (op === 'C') {
      setDisplay('0');
      setStored(null);
      setPendingOp(null);
      setOverwrite(true);
      return;
    }

    if (op === '±') {
      setDisplay((prev) => String(parseFloat(prev) * -1));
      return;
    }

    if (op === '%') {
      setDisplay((prev) => String(parseFloat(prev) / 100));
      return;
    }

    if (op === '=') {
      if (pendingOp && stored !== null) {
        const result = compute(stored, current, pendingOp);
        setDisplay(Number.isNaN(result) ? 'Error' : String(result));
        setStored(null);
        setPendingOp(null);
        setOverwrite(true);
      }
      return;
    }

    // operator +, -, ×, ÷
    setStored(current);
    setPendingOp(op as PendingOp);
    setOverwrite(true);
  }

  return (
    <div className="glass-panel mx-auto w-full max-w-xs rounded-3xl p-5">
      <div className="mb-4 rounded-2xl bg-black/20 px-4 py-6 text-right">
        <p className="truncate font-display text-3xl font-semibold text-ink">{display}</p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {keys.map((key) => {
          const isWide = key === '0';
          const isOperator = ['÷', '×', '-', '+', '='].includes(key);
          return (
            <button
              key={key}
              onClick={() => (/^[0-9.]$/.test(key) ? inputDigit(key) : applyOperator(key))}
              className={`glass-panel rounded-xl py-3 font-body text-sm font-medium transition-transform hover:scale-[1.04] active:scale-95 ${isWide ? 'col-span-2' : ''} ${isOperator ? 'text-amber' : 'text-ink'}`}>
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}
