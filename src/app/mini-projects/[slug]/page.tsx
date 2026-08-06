import {notFound} from 'next/navigation';
import {miniProjects} from '@/lib/data';
import Calculator from '@/components/mini-projects/Calculator';
import AgeCalculator from '@/components/mini-projects/AgeCalculator';
import TodoList from '@/components/mini-projects/TodoList';
import TicTacToe from '@/components/mini-projects/TicTacToe';
import SuitJepang from '@/components/mini-projects/SuitJepang';
import MoneyTracker from '@/components/mini-projects/MoneyTracker';
import TimeCalculator from '@/components/mini-projects/TimeCalculator';
import Link from 'next/link';

const componentMap: Record<string, React.ComponentType> = {
  calculator: Calculator,
  'age-calculator': AgeCalculator,
  'todo-list': TodoList,
  'tic-tac-toe': TicTacToe,
  'suit-jepang': SuitJepang,
  'money-tracker': MoneyTracker,
  'time-calculator': TimeCalculator,
};

export default async function MiniProjectPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const project = miniProjects.find((item) => item.slug === slug);
  const Component = componentMap[slug];

  if (!project || !Component) {
    notFound();
  }

  return (
    <section className="px-6 py-24">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-8 flex flex-col gap-3 rounded-3xl bg-paper/80 p-6 shadow-xl shadow-black/5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-amber">[ MINI-PROJECT ]</p>
              <h1 className="mt-2 font-display text-3xl font-semibold text-ink">{project.name}</h1>
            </div>
            <Link href="/" className="glass-panel rounded-full px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.02] active:scale-95">
              Kembali
            </Link>
          </div>
          <p className="font-body text-sm text-ink-muted mb-4">Klik tombol di bawah untuk mencoba mini-project secara langsung.</p>
          <Component />
        </div>
      </div>
    </section>
  );
}
