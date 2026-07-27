export default function Footer() {
  return (
    <footer id="contact" className="px-6 pb-16 pt-8">
      <div className="glass-panel mx-auto w-full max-w-3xl rounded-2xl px-8 py-8 text-center">
        <p className="font-display text-lg font-medium text-ink">
          Mari terhubung
        </p>
        <p className="mt-2 font-body text-sm text-ink-muted">
          Bagian contact lengkap akan ditambahkan pada fase berikutnya.
        </p>
        <p className="mt-6 font-mono text-xs text-ink-muted">
          © {new Date().getFullYear()} — dibangun oleh <a href="https://github.com/maf1344" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Fatih</a>
        </p>
      </div>
    </footer>
  );
}
