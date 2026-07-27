import Link from 'next/link';
import {notFound} from 'next/navigation';
import Image from 'next/image';
import {projects, getProjectBySlug} from '@/lib/data';

export function generateStaticParams() {
  return projects.map((p) => ({slug: p.slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const project = getProjectBySlug(slug);
  return {title: project ? `${project.title} — Portfolio` : 'Project'};
}

function SectionLabel({children}: {children: React.ReactNode}) {
  return <span className="font-mono text-xs tracking-widest text-teal">{children}</span>;
}

export default async function ProjectDetailPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-6 pb-24 pt-28">
      <div className="mx-auto w-full max-w-3xl">
        <Link href="/#projects" className="font-body text-sm text-ink-muted transition-colors hover:text-ink">
          ← Kembali ke daftar project
        </Link>

        <div className="glass-panel mt-6 rounded-3xl px-8 py-10 sm:px-12 sm:py-14">
          <SectionLabel>{project.tag}</SectionLabel>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{project.title}</h1>

          <div className="mt-10 flex flex-col gap-10">
            <section>
              <SectionLabel>PROBLEM</SectionLabel>
              <p className="mt-2 font-body leading-relaxed text-ink-muted">{project.problem}</p>
            </section>

            <section>
              <SectionLabel>USER</SectionLabel>
              <p className="mt-2 font-body leading-relaxed text-ink-muted">{project.user}</p>
            </section>

            <section>
              <SectionLabel>SOLUTION</SectionLabel>
              <p className="mt-2 font-body leading-relaxed text-ink-muted">{project.solution}</p>
            </section>

            <section>
              <SectionLabel>KEY FEATURES</SectionLabel>
              <ul className="mt-2 flex flex-col gap-1.5">
                {project.keyFeatures.map((f) => (
                  <li key={f} className="flex gap-2 font-body leading-relaxed text-ink-muted">
                    <span className="text-violet">›</span>
                    {f}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionLabel>CHALLENGE</SectionLabel>
              <p className="mt-2 font-body leading-relaxed text-ink-muted">{project.challenge}</p>
            </section>

            <section>
              <SectionLabel>IMPACT</SectionLabel>
              <p className="mt-2 font-body leading-relaxed text-ink-muted">{project.impact}</p>
            </section>

            <section>
              <SectionLabel>TECH CHOICES</SectionLabel>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techChoices.map((t) => (
                  <div key={t.name} className="glass-panel rounded-xl px-4 py-3">
                    <p className="font-mono text-xs text-amber">{t.name}</p>
                    <p className="mt-1 max-w-[220px] font-body text-xs text-ink-muted">{t.reason}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionLabel>SCREENSHOT</SectionLabel>
              <div className="mt-3 flex flex-col gap-4">
                {project.screenshots.length === 0 ? (
                  <div className="glass-panel flex aspect-video items-center justify-center rounded-2xl">
                    <p className="font-mono text-xs text-ink-muted">Screenshot belum ditambahkan</p>
                  </div>
                ) : (
                  project.screenshots.map((s) => (
                    <div key={s.src} className="glass-panel overflow-hidden rounded-2xl">
                      {/* Taruh file gambar asli di public{s.src} agar tampil di sini */}
                      <Image src={s.src} alt={s.alt} width={960} height={540} className="block h-auto w-full" />
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
