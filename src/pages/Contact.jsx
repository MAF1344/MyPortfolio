export default function Contact() {
  const socials = [
    {
      name: 'Email',
      icon: '',
      link: 'mailto:malfatih1344@gmail.com',
      username: 'malfatih1344@gmail.com',
    },
    {
      name: 'GitHub',
      icon: '',
      link: 'https://github.com/MAF1344',
      username: '@MAF1344',
    },
    {
      name: 'LinkedIn',
      icon: '',
      link: 'https://linkedin.com/in/malfatih',
      username: 'Muhammad Al Fatih',
    },
    {
      name: 'Twitter/X',
      icon: '',
      link: 'https://twitter.com/yourusername',
      username: '@yourusername',
    },
    {
      name: 'Instagram',
      icon: '',
      link: 'https://instagram.com/fatih_1344',
      username: '@fatih_1344',
    },
  ];

  return (
    <div className="p-8 pt-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <p className="text-gray-500 mb-10 text-center">Find me on my social media platforms below 🚀</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {socials.map((social, idx) => (
          <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg">
            <div className="flex-shrink-0">{social.icon}</div>
            <div>
              <h3 className="font-semibold">{social.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{social.username}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
