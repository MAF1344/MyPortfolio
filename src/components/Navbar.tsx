const links = [
  {href: '#projects', label: 'Projects'},
  {href: '#mini-projects', label: 'Mini-Projects'},
  {href: '#certificates', label: 'Certificates'},
  {href: '#contact', label: 'Contact'},
];

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(94%,720px)] -translate-x-1/2">
      <nav className="glass-nav flex items-center justify-between rounded-full px-3 py-3 sm:px-5 sm:py-3">
        <a href="#top" className="shrink-0 font-display text-xs font-semibold leading-none tracking-tight text-ink sm:text-sm">
          Fatih<span className="text-teal">.</span>
        </a>
        <ul className="no-scrollbar flex items-center gap-2 overflow-x-auto sm:gap-5">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a href={link.href} className="font-body text-[10px] leading-none text-ink-muted transition-colors hover:text-ink sm:text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
