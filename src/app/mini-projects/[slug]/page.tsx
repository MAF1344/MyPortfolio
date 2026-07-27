import {notFound} from 'next/navigation';
import Link from 'next/link';
import {miniProjects} from '@/lib/data';
import Calculator from '@/components/mini-projects/Calculator';
import TicTacToe from '@/components/mini-projects/TicTacToe';

// Daftarkan komponen mini-project di sini. Setiap slug baru di data.ts
// butuh entry baru di sini juga.
const registry: Record<string, React.ComponentType> = {
  calculator: Calculator,
  'tic-tac-toe': TicTacToe,
};

export function generateStaticParams() {
  return miniProjects.map((mp) => ({slug: mp.slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const mp = miniProjects.find((m) => m.slug === slug);
  return {title: mp ? `${mp.name} — Portfolio` : 'Mini-Project'};
}

export default async function MiniProjectDetailPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const meta = miniProjects.find((m) => m.slug === slug);
  const Component = registry[slug];

  if (!meta || !Component) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-6 pb-24 pt-28">
      <div className="w-full max-w-xs">
        <Link href="/#mini-projects" className="font-body text-sm text-ink-muted transition-colors hover:text-ink">
          ← Kembali
        </Link>

        <div className="mt-4 mb-6 text-center">
          <span className="text-3xl" aria-hidden="true">
            {meta.icon}
          </span>
          <h1 className="mt-2 font-display text-2xl font-semibold text-ink">{meta.name}</h1>
        </div>

        <Component />
      </div>
    </main>
  );
}
