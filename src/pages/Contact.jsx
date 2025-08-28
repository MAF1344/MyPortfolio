import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Contact() {
  const socials = [
    {
      name: 'Email',
      icon: 'fa-solid fa-envelope',
      hover: `group-hover:bg-linear-45 group-hover:from-[#EA4335] group-hover:via-[#FBBC04] group-hover:to-[#34A853] group-hover:text-transparent group-hover:bg-clip-text`,
      link: 'mailto:malfatih1344@gmail.com',
      username: 'malfatih1344@gmail.com',
    },
    {
      name: 'GitHub',
      icon: 'fa-brands fa-github',
      hover: 'group-hover:text-black dark:group-hover:text-white',
      link: 'https://github.com/MAF1344',
      username: '@MAF1344',
    },
    {
      name: 'LinkedIn',
      icon: 'fa-brands fa-linkedin',
      hover: 'group-hover:text-blue-600',
      link: 'https://linkedin.com/in/malfatih',
      username: '@Muhammad Al Fatih',
    },
    {
      name: 'Twitter/X',
      icon: 'fa-brands fa-x-twitter',
      hover: 'group-hover:text-black dark:group-hover:text-white',
      link: 'https://x.com/1344MAF',
      username: '@1344MAF',
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-square-instagram',
      hover: `group-hover:bg-linear-to-bl group-hover:from-[#833ab4] group-hover:via-[#fd1d1d] group-hover:to-[#fcb045] group-hover:text-transparent group-hover:bg-clip-text`,
      link: 'https://instagram.com/fatih_1344',
      username: '@fatih_1344',
    },
  ]

  return (
    <div className="mx-auto max-w-4xl p-8 pt-20">
      <h2 className="mb-8 text-center text-3xl font-bold">Kontak Saya</h2>
      <p className="mb-10 text-center text-gray-500">
        Kamu bisa menghubungiku di beberapa sosial media berikut 🚀
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {socials.map((social, idx) => (
          <a
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            href={social.link}
            className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md hover:shadow-lg dark:bg-gray-800"
          >
            <i
              className={`text-5xl text-gray-500 transition-colors ${social.icon} ${social.hover}`}
            ></i>
            <div>
              <h3 className="font-semibold">{social.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{social.username}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
