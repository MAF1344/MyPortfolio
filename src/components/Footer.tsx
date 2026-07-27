export default function Footer() {
  return (
    <footer className="px-6 pb-10">
      <p className="text-center font-mono text-xs text-ink-muted">
        © {new Date().getFullYear()} — dibangun oleh{' '}
        <a href="https://github.com/maf1344" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
          Fatih
        </a>
      </p>
    </footer>
  );
}
