'use client';

import {useEffect, useState} from 'react';

type Todo = {
  id: string;
  text: string;
  done: boolean;
};

const STORAGE_KEY = 'portfolio:todo-list';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [loaded, setLoaded] = useState(false);

  // Ambil data tersimpan saat komponen pertama kali muncul di browser.
  // localStorage hanya ada di browser (bukan di server), jadi ini WAJIB
  // di dalam useEffect, bukan langsung di useState.
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- memuat data awal dari localStorage (harus di effect, localStorage tidak ada di server)
        setTodos(JSON.parse(raw));
      } catch {
        // data korup/format lama, abaikan saja
      }
    }
    setLoaded(true);
  }, []);

  // Simpan tiap kali `todos` berubah — tapi tunggu sampai data awal
  // selesai dimuat (`loaded`), supaya tidak menimpa data lama dengan
  // array kosong sebelum sempat dibaca.
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos, loaded]);

  function addTodo() {
    const text = input.trim();
    if (!text) return;
    setTodos((prev) => [...prev, {id: crypto.randomUUID(), text, done: false}]);
    setInput('');
  }

  function toggleTodo(id: string) {
    setTodos((prev) => prev.map((t) => (t.id === id ? {...t, done: !t.done} : t)));
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <div className="glass-panel mx-auto w-full max-w-sm rounded-3xl p-5">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Tambah tugas baru..."
          className="glass-panel min-w-0 flex-1 rounded-xl px-3 py-2 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none"
        />
        <button onClick={addTodo} className="glass-panel shrink-0 rounded-xl px-4 py-2 font-body text-sm font-medium text-teal transition-transform hover:scale-[1.04] active:scale-95">
          Tambah
        </button>
      </div>

      <p className="mt-3 font-mono text-xs text-ink-muted">{todos.length === 0 ? 'Belum ada tugas' : remaining === 0 ? 'Semua tugas selesai 🎉' : `${remaining} tugas belum selesai`}</p>

      <ul className="mt-3 flex flex-col gap-2">
        {todos.map((todo) => (
          <li key={todo.id} className="glass-panel flex items-center gap-3 rounded-xl px-3 py-2.5">
            <button
              onClick={() => toggleTodo(todo.id)}
              aria-label={todo.done ? 'Tandai belum selesai' : 'Tandai selesai'}
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${todo.done ? 'border-teal bg-teal/20 text-teal' : 'border-white/25 text-transparent'}`}>
              ✓
            </button>
            <span className={`min-w-0 flex-1 truncate font-body text-sm ${todo.done ? 'text-ink-muted line-through' : 'text-ink'}`}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} aria-label="Hapus tugas" className="shrink-0 font-mono text-xs text-ink-muted transition-colors hover:text-amber">
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
