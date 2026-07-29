const links = [
  {href: '#projects', label: 'Projects'},
  {href: '#mini-projects', label: 'Mini-Projects'},
  {href: '#certificates', label: 'Certificates'},
  {href: '#contact', label: 'Contact'},
];

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(94%,720px)] -translate-x-1/2">
      <nav className="glass-nav flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
        <a href="#top" className="shrink-0 font-display text-sm font-semibold tracking-tight text-ink">
          Fatih<span className="text-teal">.</span>
        </a>
        <ul className="no-scrollbar flex items-center gap-3 overflow-x-auto sm:gap-5">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a href={link.href} className="font-body text-xs text-ink-muted transition-colors hover:text-ink sm:text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
