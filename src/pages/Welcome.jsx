import foto from '/images/foto.jpg'

export default function Welcome() {
  return (
    <div
      className="flex flex-col items-center justify-center p-8 pt-20 md:p-20 md:pt-32"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={foto} alt="Fatih.jpg" className="mb-5 w-3xs rounded-full" />
      <h1 className="text-4xl font-bold">
        Hi, I'am <span className="text-blue-500">Muhammad Al Fatih</span>
      </h1>
      <p className="mt-3 text-lg text-gray-600">Web Developer | Tech Enthusiast | Problem Solver</p>
    </div>
  )
}
