export default function Hero() {
  return (
    <section id="top" className="flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto w-full max-w-3xl">
        <div className="glass-panel hero-enter rounded-3xl px-8 py-10 sm:px-12 sm:py-14">
          <span className="font-mono text-xs tracking-widest text-teal">[ Fatih — PROFIL SINGKAT ]</span>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">Muhammad Al Fatih</h1>

          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-ink-muted sm:text-lg">
            Berlatar belakang di bidang IT, saya memiliki minat pada teknologi digital dengan fokus utama di pengembangan web. Saya terbiasa menggunakan teknologi seperti React, Next.js, ExpressJS, dan beberapa lainnya untuk membangun
            aplikasi dan sistem informasi, sambil terus terbuka mempelajari berbagai bidang IT lainnya. Saat ini, saya aktif mengerjakan proyek berbasis web dan siap mengeksplorasi tantangan baru di dunia teknologi.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-ink px-5 py-2.5 font-body text-sm font-medium text-canvas transition-transform hover:scale-[1.03]">
              Lihat Project
            </a>
            <a href="#mini-projects" className="glass-panel rounded-full px-5 py-2.5 font-body text-sm font-medium text-ink transition-transform hover:scale-[1.03]">
              Coba Mini-Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
