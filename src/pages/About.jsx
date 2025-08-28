export default function About() {
  return (
    <div
      className="mx-auto max-w-2xl p-8 pt-20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold">Tentang Saya</h1>
      <p className="mt-2 leading-relaxed text-gray-700">
        Saya seorang Pengembang Web yang bersemangat dan gemar membangun situs web yang modern,
        responsif, dan interaktif. Saya senang mempelajari teknologi baru dan terus meningkatkan
        keterampilan saya untuk menghasilkan proyek berkualitas tinggi.
      </p>

      <h3 className="mt-6 text-2xl font-semibold">Skills</h3>
      <ul className="mt-3 grid grid-cols-2 gap-3 text-gray-600">
        <li>HTML5 & CSS3</li>
        <li>JavaScript</li>
        <li>MySQL</li>
        <li>React.js</li>
        <li>TailwindCss</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Python</li>
        <li>Django</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
  )
}
