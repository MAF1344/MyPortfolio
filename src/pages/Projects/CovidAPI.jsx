const images = [
  '/images/projects/CovidLanding/1.png',
  '/images/projects/CovidLanding/2.png',
  '/images/projects/CovidLanding/3.png',
  '/images/projects/CovidLanding/4.png',
]

function Section({ title, children }) {
  return (
    <section className="mb-6">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      {children}
    </section>
  )
}

export default function CovidLanding() {
  return (
    <div className="mx-auto mt-14 max-w-4xl px-4 py-8 sm:mt-20">
      <a href="/#projects" className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-700">
        <i className="fa-solid fa-arrow-left mr-2"></i>Kembali
      </a>

      <h1 className="mt-5 mb-6 text-4xl font-bold">Landing Page Covid-19</h1>

      {/* Gambar Project */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Covid Landing screenshot ${index + 1}`}
            className="rounded-lg shadow-md"
          />
        ))}
      </div>

      <Section title="Tech Stack">
        <ul className="list-disc pl-6">
          <li>React.js</li>
          <li>CSS Module untuk styling per-komponen</li>
          <li>Public Covid-19 API (data realtime)</li>
        </ul>
      </Section>

      <Section title="Fitur Utama">
        <ul className="list-disc pl-6">
          <li>Menampilkan data kasus Covid-19 (positif, sembuh, meninggal)</li>
          <li>Update data realtime dari API</li>
          <li>Layout responsive sederhana</li>
          <li>
            Pemisahan styling dengan <code>.module.css</code> untuk setiap komponen
          </li>
        </ul>
      </Section>

      <Section title="Source Code">
        <p>
          Cek kode project ini di{' '}
          <a
            href="https://github.com/MAF1344/frontend-midterm-project.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub Repository
          </a>{' '}
          atau{' '}
          <a
            href="https://github.com/MAF1344/frontend-final-project.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Ini
          </a>
        </p>
      </Section>

      <Section title="Next Improvement / Roadmap">
        <ul className="list-disc pl-6">
          <li>Menambahkan grafik interaktif (misalnya pakai Chart.js / Recharts)</li>
          <li>Filter data berdasarkan negara/provinsi</li>
          <li>Dark mode toggle</li>
          <li>Menampilkan riwayat data harian</li>
        </ul>
      </Section>

      <a href="/#projects" className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-700">
        <i className="fa-solid fa-arrow-left mr-2"></i>Kembali
      </a>
    </div>
  )
}
