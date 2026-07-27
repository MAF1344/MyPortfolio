export type Project = {
  slug: string;
  title: string;
  tag: string;
  problem: string;
  user: string;
  solution: string;
  keyFeatures: string[];
  challenge: string;
  impact: string;
  techChoices: {name: string; reason: string}[];
  screenshots: {src: string; alt: string}[];
};

export type MiniProject = {
  slug: string;
  name: string;
  icon: string; // emoji placeholder, can be swapped for a real icon component later
};

// Kode proyek siap pakai untuk portofolio
export const projects: Project[] = [
  {
    slug: 'online-bookstore',
    title: 'Toko Buku Online',
    tag: 'Django · PostgreSQL',
    problem: 'Toko buku lokal masih mengandalkan pencatatan manual dan transaksi langsung di tempat, sehingga jangkauan pembeli terbatas dan pengelolaan stok barang sering tidak sinkron.',
    user: 'Pembaca buku yang ingin mencari dan membeli buku secara daring, serta pengelola toko yang membutuhkan sistem terpusat untuk mencatat penjualan dan stok.',
    solution: 'Membangun platform e-commerce berbasis web yang memungkinkan pengguna menjelajahi katalog serta bertransaksi secara mandiri, dilengkapi dengan panel manajemen internal untuk pengelola toko.',
    keyFeatures: ['Katalog buku interaktif dengan pencarian dan filter berdasarkan kategori', 'Sistem keranjang belanja dan proses checkout transaksi', 'Dashboard admin untuk pengelolaan stok, kategori, dan riwayat pesanan'],
    challenge: 'Mengatur relasi basis data agar pencatatan transaksi tetap konsisten saat stok buku berkurang, serta menangani struktur query Django agar proses muat halaman katalog tetap responsif.',
    impact: 'Memahami penerapan arsitektur MVT (Model-View-Template) pada Django secara menyeluruh serta belajar merancang skema relasional yang aman untuk transaksi dasar.',
    techChoices: [
      {
        name: 'Django',
        reason: 'Menyediakan fitur bawaan yang lengkap seperti ORM dan sistem otentikasi admin, sehingga mempercepat proses pembuatan alur kerja backend.',
      },
      {
        name: 'PostgreSQL',
        reason: 'Basis data relasional yang andal untuk menangani integritas data transaksi dan relasi antar tabel secara terstruktur.',
      },
    ],
    screenshots: [],
  },
  {
    slug: 'internal-management-app',
    title: 'Internal Management App',
    tag: 'React · Express · PostgreSQL',
    problem: 'Alur kerja internal tim masih mencatat dan membagikan data operasional secara manual menggunakan spreadsheet terpisah, yang berisiko memicu duplikasi data dan kendala aksesibilitas.',
    user: 'Tim operasional dan manajemen internal yang membutuhkan satu platform terpusat untuk mengelola, memantau, dan membagikan data kerja harian secara real-time.',
    solution: 'Mengembangkan aplikasi manajemen internal berbasis SPA (Single Page Application) untuk menyatukan pencatatan data dan menyederhanakan komunikasi antar peran kerja.',
    keyFeatures: [
      'Manajemen data terpusat dengan pembatasan hak akses berbasis peran (Role-Based Access Control)',
      'Fitur pencarian instan dan penyaringan laporan untuk kebutuhan evaluasi',
      'Integrasi REST API antar modul untuk memastikan konsistensi data',
    ],
    challenge: 'Merancang arsitektur komponen React yang rapi agar state aplikasi tetap terjaga dengan baik, serta mengamankan endpoint API di sisi Express dari akses yang tidak terautentikasi.',
    impact: 'Memberikan pengalaman langsung dalam membangun aplikasi full-stack terpisah (decoupled architecture) serta memahami pentingnya konsistensi REST API.',
    techChoices: [
      {
        name: 'React',
        reason: 'Memudahkan pembuatan antarmuka pengguna (UI) yang dinamis, interaktif, dan reaktif terhadap perubahan data.',
      },
      {
        name: 'Express + Node.js',
        reason: 'Kerangka kerja backend yang ringan dan fleksibel untuk membuat REST API yang efisien dalam menangani permintaan data.',
      },
      {
        name: 'PostgreSQL',
        reason: 'Sangat cocok untuk menyimpan data operasional yang membutuhkan struktur kueri kompleks dan skala relasi yang rapi.',
      },
    ],
    screenshots: [],
  },
];

// Fase 3 akan mengisi mini-project yang benar-benar interaktif.
export const miniProjects: MiniProject[] = [
  {
    slug: 'calculator',
    name: 'Calculator',
    icon: '🧮',
  },
  {
    slug: 'tic-tac-toe',
    name: 'Tic-Tac-Toe',
    icon: '⭕',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const contactLinks = [
  {label: 'Email', value: 'malfatih1344@gmail.com', href: 'mailto:malfatih1344@gmail.com'},
  {label: 'GitHub', value: 'github.com/maf1344', href: 'https://github.com/maf1344'},
  {label: 'LinkedIn', value: 'linkedin.com/in/malfatih', href: 'https://linkedin.com/in/malfatih'},
];
