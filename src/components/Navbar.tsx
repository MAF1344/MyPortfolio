const links = [
  { href: "#projects", label: "Projects" },
  { href: "#mini-projects", label: "Mini-Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(92%,720px)] -translate-x-1/2">
      <nav className="glass-nav flex items-center justify-between rounded-full px-5 py-3">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-ink"
        >
          Fatih<span className="text-teal">.</span>
        </a>
        <ul className="flex items-center gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
