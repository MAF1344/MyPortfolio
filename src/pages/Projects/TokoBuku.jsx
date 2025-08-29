const images = [
  '/images/projects/TokoBukuDjango/frontend.png',
  '/images/projects/TokoBukuDjango/backend.png',
  '/images/projects/TokoBukuDjango/PG-Admin.png',
]

function Section({ title, children }) {
  return (
    <section className="mb-6">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      {children}
    </section>
  )
}

export default function TokoBuku() {
  return (
    <div className="mx-auto mt-14 max-w-4xl px-4 py-8 sm:mt-20">
      <a href="/#projects" className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-700">
        <i className="fa-solid fa-arrow-left mr-2"></i>Kembali
      </a>

      <h1 className="mt-5 mb-6 text-4xl font-bold">Toko Buku Digital</h1>

      {/* Gambar Project */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Toko Buku screenshot ${index + 1}`}
            className="rounded-lg shadow-md"
          />
        ))}
      </div>

      <Section title="Tech Stack">
        <ul className="list-disc pl-6">
          <li>Django (Backend + Frontend Template)</li>
          <li>PostgreSQL</li>
          <li>HTML, CSS (Responsive Styling)</li>
        </ul>
      </Section>

      <Section title="Fitur Utama">
        <ul className="list-disc pl-6">
          <li>Login, Register, Logout (Autentikasi user)</li>
          <li>Kelola profil pengguna</li>
          <li>Kelola data buku (CRUD, khusus admin)</li>
          <li>Kelola data transaksi (CRUD, khusus admin)</li>
          <li>Transaksi pembelian buku (untuk semua user)</li>
          <li>Tampilan website responsive untuk berbagai ukuran layar</li>
        </ul>
      </Section>

      <Section title="Source Code">
        <p>
          Kamu bisa cek kode lengkap project ini di{' '}
          <a
            href="https://github.com/MAF1344/TokoBuku.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub Repository
          </a>
        </p>
      </Section>

      <Section title="Next Improvement / Roadmap">
        <ul className="list-disc pl-6">
          <li>Integrasi pembayaran online</li>
          <li>Rekomendasi buku berdasarkan kategori / histori pembelian</li>
          <li>Fitur wishlist untuk user</li>
          <li>Optimisasi UI/UX agar lebih modern</li>
        </ul>
      </Section>

      <a href="/#projects" className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-700">
        <i className="fa-solid fa-arrow-left mr-2"></i>Kembali
      </a>
    </div>
  )
}
