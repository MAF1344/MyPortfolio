'use client';

import {useEffect, useState} from 'react';

type Entry = {
  id: string;
  label: string;
  amount: number;
  type: 'in' | 'out';
};

const STORAGE_KEY = 'portfolio:money-tracker';

function formatRupiah(value: number) {
  return value.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  });
}

export default function MoneyTracker() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'in' | 'out'>('in');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- memuat data awal dari localStorage (harus di effect, localStorage tidak ada di server)
        setEntries(JSON.parse(raw));
      } catch {
        // data korup/format lama, abaikan saja
      }
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries, loaded]);

  function addEntry() {
    const trimmed = label.trim();
    const value = Number(amount);
    if (!trimmed || !Number.isFinite(value) || value <= 0) return;

    setEntries((prev) => [...prev, {id: crypto.randomUUID(), label: trimmed, amount: value, type}]);
    setLabel('');
    setAmount('');
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const balance = entries.reduce((sum, e) => sum + (e.type === 'in' ? e.amount : -e.amount), 0);

  return (
    <div className="glass-panel mx-auto w-full max-w-sm rounded-3xl p-5">
      <p className="font-mono text-xs text-ink-muted">Saldo</p>
      <p className={`font-display text-2xl font-semibold ${balance < 0 ? 'text-amber' : 'text-ink'}`}>{formatRupiah(balance)}</p>

      <div className="mt-4 flex flex-col gap-2">
        <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Keterangan (contoh: Jajan)" className="glass-panel rounded-xl px-3 py-2 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none" />
        <div className="flex gap-2">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addEntry()}
            type="number"
            min="0"
            placeholder="Jumlah (Rp)"
            className="glass-panel min-w-0 flex-1 rounded-xl px-3 py-2 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none"
          />
          <button onClick={() => setType('in')} className={`glass-panel shrink-0 rounded-xl px-3 py-2 font-mono text-xs transition-colors ${type === 'in' ? 'text-teal' : 'text-ink-muted'}`}>
            Masuk
          </button>
          <button onClick={() => setType('out')} className={`glass-panel shrink-0 rounded-xl px-3 py-2 font-mono text-xs transition-colors ${type === 'out' ? 'text-amber' : 'text-ink-muted'}`}>
            Keluar
          </button>
        </div>
        <button onClick={addEntry} className="glass-panel rounded-xl px-4 py-2 font-body text-sm font-medium text-ink transition-transform hover:scale-[1.02] active:scale-95">
          Tambah catatan
        </button>
      </div>

      <ul className="mt-4 flex flex-col gap-2">
        {entries.length === 0 && <p className="font-mono text-xs text-ink-muted">Belum ada catatan</p>}
        {entries
          .slice()
          .reverse()
          .map((entry) => (
            <li key={entry.id} className="glass-panel flex items-center justify-between gap-3 rounded-xl px-3 py-2.5">
              <span className="min-w-0 flex-1 truncate font-body text-sm text-ink">{entry.label}</span>
              <span className={`shrink-0 font-mono text-xs ${entry.type === 'in' ? 'text-teal' : 'text-amber'}`}>
                {entry.type === 'in' ? '+' : '-'}
                {formatRupiah(entry.amount)}
              </span>
              <button onClick={() => deleteEntry(entry.id)} aria-label="Hapus catatan" className="shrink-0 font-mono text-xs text-ink-muted transition-colors hover:text-ink">
                ✕
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
