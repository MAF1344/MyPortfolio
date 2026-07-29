'use client';

import {useState} from 'react';

type Choice = 'Batu' | 'Gunting' | 'Kertas';

const choices: {name: Choice; emoji: string}[] = [
  {name: 'Batu', emoji: '✊'},
  {name: 'Gunting', emoji: '✌️'},
  {name: 'Kertas', emoji: '✋'},
];

const beats: Record<Choice, Choice> = {
  Batu: 'Gunting',
  Gunting: 'Kertas',
  Kertas: 'Batu',
};

function emojiOf(choice: Choice) {
  return choices.find((c) => c.name === choice)!.emoji;
}

export default function SuitJepang() {
  const [player, setPlayer] = useState<Choice | null>(null);
  const [computer, setComputer] = useState<Choice | null>(null);
  const [score, setScore] = useState({win: 0, lose: 0, draw: 0});

  function play(choice: Choice) {
    // eslint-disable-next-line react-hooks/purity -- dipanggil dari onClick, bukan saat render
    const cpu = choices[Math.floor(Math.random() * choices.length)].name;
    setPlayer(choice);
    setComputer(cpu);

    if (choice === cpu) {
      setScore((s) => ({...s, draw: s.draw + 1}));
    } else if (beats[choice] === cpu) {
      setScore((s) => ({...s, win: s.win + 1}));
    } else {
      setScore((s) => ({...s, lose: s.lose + 1}));
    }
  }

  function resetScore() {
    setScore({win: 0, lose: 0, draw: 0});
    setPlayer(null);
    setComputer(null);
  }

  let resultText = 'Pilih salah satu untuk mulai main';
  if (player && computer) {
    if (player === computer) resultText = 'Seri!';
    else if (beats[player] === computer) resultText = 'Kamu menang! 🎉';
    else resultText = 'Kamu kalah!';
  }

  return (
    <div className="glass-panel mx-auto flex w-full max-w-xs flex-col items-center gap-5 rounded-3xl p-6">
      <div className="flex w-full items-center justify-around">
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono text-xs text-ink-muted">Kamu</span>
          <span className="text-4xl">{player ? emojiOf(player) : '❔'}</span>
        </div>
        <span className="font-display text-lg text-ink-muted">vs</span>
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono text-xs text-ink-muted">Komputer</span>
          <span className="text-4xl">{computer ? emojiOf(computer) : '❔'}</span>
        </div>
      </div>

      <p className="font-body text-sm font-medium text-ink">{resultText}</p>

      <div className="flex gap-3">
        {choices.map((c) => (
          <button key={c.name} onClick={() => play(c.name)} aria-label={c.name} className="glass-panel flex h-16 w-16 items-center justify-center rounded-2xl text-2xl transition-transform hover:scale-[1.08] active:scale-95">
            {c.emoji}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 font-mono text-xs text-ink-muted">
        <span className="text-teal">Menang: {score.win}</span>
        <span className="text-amber">Kalah: {score.lose}</span>
        <span>Seri: {score.draw}</span>
      </div>

      <button onClick={resetScore} className="font-body text-xs text-ink-muted transition-colors hover:text-ink">
        Reset skor
      </button>
    </div>
  );
}
