import { Link } from 'react-router-dom'
import '../../src/index.css'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Website portfolio pribadi untuk menampilkan proyek dan informasi singkat saya.',
    link: '/projects/portfolio',
  },
  {
    title: 'Puskesmas',
    description: 'Aplikasi manajemen data puskesmas sederhana menggunakan Laravel dan MySQL.',
    link: '/projects/puskesmas',
  },
  {
    title: 'Toko Buku',
    description: 'Aplikasi toko buku online dengan fitur katalog, profil, dan checkout.',
    link: '/projects/toko-buku',
  },
]

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl p-8 pt-20">
      <h2 className="mb-2 text-3xl font-bold">Proyek</h2>
      <h5 className="mb-6 text-gray-600">
        Berikut adalah beberapa proyek yang sudah saya kerjakan
      </h5>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            {project.link !== '#' ? (
              <Link to={project.link} className="mt-3 inline-block text-blue-500 hover:underline">
                View Project →
              </Link>
            ) : (
              <span className="mt-3 inline-block cursor-not-allowed text-gray-400">
                Coming Soon
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
