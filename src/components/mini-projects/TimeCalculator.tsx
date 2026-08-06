'use client';

import {useState} from 'react';

function formatDuration(seconds: number) {
  const rounded = Math.round(seconds);
  const hours = Math.floor(rounded / 3600);
  const minutes = Math.floor((rounded % 3600) / 60);
  const secs = rounded % 60;

  const parts = [];
  if (hours > 0) parts.push(`${hours} jam`);
  if (minutes > 0) parts.push(`${minutes} menit`);
  if (secs > 0 || parts.length === 0) parts.push(`${secs} detik`);

  return parts.join(', ');
}

export default function TimeCalculator() {
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('0');
  const [speed, setSpeed] = useState('1');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  function calculateWatchTime() {
    const durationHours = Number(hours || '0');
    const durationMinutes = Number(minutes || '0');
    const durationSeconds = Number(seconds || '0');
    const playbackSpeed = Number(speed || '1');

    if (!Number.isFinite(durationHours) || durationHours < 0) {
      setError('Masukkan jam video yang valid.');
      setResult('');
      return;
    }

    if (!Number.isFinite(durationMinutes) || durationMinutes < 0 || durationMinutes > 59) {
      setError('Masukkan menit antara 0 sampai 59.');
      setResult('');
      return;
    }

    if (!Number.isFinite(durationSeconds) || durationSeconds < 0 || durationSeconds > 59) {
      setError('Masukkan detik antara 0 sampai 59.');
      setResult('');
      return;
    }

    if (!Number.isFinite(playbackSpeed) || playbackSpeed <= 0) {
      setError('Kecepatan harus lebih besar dari 0.');
      setResult('');
      return;
    }

    const totalSeconds = durationHours * 3600 + durationMinutes * 60 + durationSeconds;
    if (totalSeconds <= 0) {
      setError('Durasi video harus lebih dari 0 detik.');
      setResult('');
      return;
    }

    setError('');
    const watchTime = totalSeconds / playbackSpeed;
    setResult(`Waktu tonton: ${formatDuration(watchTime)} pada kecepatan ${playbackSpeed}x.`);
  }

  function resetInputs() {
    setHours('0');
    setMinutes('0');
    setSeconds('0');
    setSpeed('1');
    setError('');
    setResult('');
  }

  return (
    <div className="glass-panel mx-auto w-full max-w-sm rounded-3xl p-6">
      <div className="mb-4 text-center">
        <p className="font-mono text-xs text-ink-muted">Kalkulator Waktu Tonton</p>
        <h2 className="font-display text-2xl font-semibold text-ink">Hitung durasi menonton video</h2>
      </div>

      <div className="grid gap-3">
        <div className="grid grid-cols-3 gap-2">
          <label className="glass-panel rounded-xl px-3 py-3 text-left text-xs font-medium text-ink-muted">
            Jam
            <input type="number" min="0" value={hours} onChange={(e) => setHours(e.target.value)} className="mt-2 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted" placeholder="0" />
          </label>

          <label className="glass-panel rounded-xl px-3 py-3 text-left text-xs font-medium text-ink-muted">
            Menit
            <input type="number" min="0" max="59" value={minutes} onChange={(e) => setMinutes(e.target.value)} className="mt-2 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted" placeholder="0" />
          </label>

          <label className="glass-panel rounded-xl px-3 py-3 text-left text-xs font-medium text-ink-muted">
            Detik
            <input type="number" min="0" max="59" value={seconds} onChange={(e) => setSeconds(e.target.value)} className="mt-2 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted" placeholder="0" />
          </label>
        </div>

        <label className="glass-panel rounded-xl px-3 py-3 text-left text-xs font-medium text-ink-muted">
          Kecepatan (misal 1.5)
          <input type="number" min="0.1" step="0.1" value={speed} onChange={(e) => setSpeed(e.target.value)} className="mt-2 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted" placeholder="1" />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={calculateWatchTime} className="glass-panel rounded-xl px-4 py-3 font-body text-sm font-medium text-ink transition-transform hover:scale-[1.02] active:scale-95">
            Hitung
          </button>
          <button onClick={resetInputs} className="glass-panel rounded-xl px-4 py-3 font-body text-sm font-medium text-ink-muted transition-transform hover:scale-[1.02] active:scale-95">
            Reset
          </button>
        </div>
      </div>

      {error && <p className="mt-4 font-body text-sm text-amber">{error}</p>}
      {result && !error && <p className="mt-4 font-display text-lg font-semibold text-ink">{result}</p>}
    </div>
  );
}
