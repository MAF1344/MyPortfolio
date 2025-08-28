const images = [
  '/images/projects/Portfolio/1.png',
  '/images/projects/Portfolio/2.png',
  '/images/projects/Portfolio/3.png',
  '/images/projects/Portfolio/4.png',
]

function Section({ title, children }) {
  return (
    <section className="mb-6">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      {children}
    </section>
  )
}

export default function Portfolio() {
  return (
    <div className="mx-auto mt-14 max-w-4xl px-4 py-8 sm:mt-20">
      <a href="/#projects" className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-700">
        <i class="fa-solid fa-arrow-left mr-2"></i>Kembali
      </a>

      <h1 className="mt-5 mb-6 text-4xl font-bold">Portfolio Website</h1>

      {/* Gambar Project */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Portfolio screenshot ${index + 1}`}
            className="rounded-lg shadow-md"
          />
        ))}
      </div>

      <Section title="Tech Stack">
        <ul className="list-disc pl-6">
          <li>React.js (Vite)</li>
          <li>TailwindCSS 4</li>
          <li>FontAwesome 7</li>
        </ul>
      </Section>

      <Section title="Fitur Utama">
        <ul className="list-disc pl-6">
          <li>Halaman portfolio responsif (desktop & mobile)</li>
          <li>Daftar proyek dengan detail deskripsi</li>
          <li>Integrasi ikon sosial media</li>
          <li>UI clean dengan TailwindCSS 4 + animasi hover</li>
        </ul>
      </Section>

      <Section title="Source Code">
        <p>
          Kamu bisa cek kode lengkap project ini di{' '}
          <a
            href="https://github.com/MAF1344/MyPortfolio.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub Repository
          </a>
        </p>
      </Section>

      <Section title="Next Improvement / Roadmap">
        <p className="list-none italic">*belum ada rencana update untuk saat ini</p>
        <ul className="list-disc pl-6">
          {/* <li>Menambahkan dark mode toggle</li>
          <li>Halaman blog untuk berbagi artikel</li>
          <li>Integrasi contact form dengan email API</li>
          <li>SEO optimization (meta tags, sitemap)</li> */}
        </ul>
      </Section>

      <a href="/#projects" className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-700">
        <i class="fa-solid fa-arrow-left mr-2"></i>Kembali
      </a>
    </div>
  )
}
