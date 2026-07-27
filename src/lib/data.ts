export type Project = {
  slug: string;
  title: string;
  tag: string;
};

export type MiniProject = {
  slug: string;
  name: string;
  icon: string; // emoji placeholder, can be swapped for a real icon component later
};

// Fase 2 akan mengisi struktur lengkap (Problem, User, Solution, dst) per project.
export const projects: Project[] = [
  {
    slug: "online-bookstore",
    title: "Online Bookstore",
    tag: "Django · PostgreSQL",
  },
  {
    slug: "internal-management-app",
    title: "Internal Management App",
    tag: "React · Express · PostgreSQL",
  },
];

// Fase 3 akan mengisi mini-project yang benar-benar interaktif.
export const miniProjects: MiniProject[] = [
  {
    slug: "calculator",
    name: "Calculator",
    icon: "🧮",
  },
  {
    slug: "tic-tac-toe",
    name: "Tic-Tac-Toe",
    icon: "⭕",
  },
];
