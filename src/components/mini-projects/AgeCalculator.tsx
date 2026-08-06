'use client';

import {useState} from 'react';

function calculateAge(birthDate: Date, today: Date) {
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    // jumlah hari di bulan sebelum "today" — dipakai untuk melengkapi
    // kekurangan hari akibat pengurangan tanggal di atas
    const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonthLastDay;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {years, months, days};
}

export default function AgeCalculator() {
  const [birthInput, setBirthInput] = useState('');
  const [result, setResult] = useState<{years: number; months: number; days: number} | null>(null);
  const [error, setError] = useState('');

  function handleCalculate() {
    if (!birthInput) {
      setError('Isi tanggal lahir dulu ya.');
      setResult(null);
      return;
    }

    const birthDate = new Date(birthInput);
    const today = new Date();

    if (birthDate > today) {
      setError('Tanggal lahir tidak boleh di masa depan.');
      setResult(null);
      return;
    }

    setError('');
    setResult(calculateAge(birthDate, today));
  }

  return (
    <div className="glass-panel mx-auto flex w-full max-w-xs flex-col items-center gap-5 rounded-3xl p-6 text-center">
      <div className="flex w-full flex-col gap-2">
        <input
          type="date"
          value={birthInput}
          onChange={(e) => setBirthInput(e.target.value)}
          max={new Date().toISOString().split('T')[0]}
          className="glass-panel rounded-xl px-3 py-2 font-body text-sm text-ink scheme-dark focus:outline-none"
        />
        <button onClick={handleCalculate} className="glass-panel rounded-xl px-4 py-2 font-body text-sm font-medium text-teal transition-transform hover:scale-[1.02] active:scale-95">
          Hitung umur
        </button>
      </div>

      {error && <p className="font-body text-xs text-amber">{error}</p>}

      {result && (
        <p className="font-display text-lg font-semibold text-ink">
          Umurmu: {result.years} tahun, {result.months} bulan, {result.days} hari
        </p>
      )}
    </div>
  );
}
