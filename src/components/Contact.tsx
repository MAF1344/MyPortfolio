import {contactLinks} from '@/lib/data';
import Reveal from '@/components/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <Reveal>
        <div className="glass-panel mx-auto w-full max-w-3xl rounded-3xl px-8 py-12 text-center sm:px-12">
          <span className="font-mono text-xs tracking-widest text-teal">[ CONTACT ]</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">Mari terhubung</h2>
          <p className="mx-auto mt-3 max-w-md font-body text-sm text-ink-muted">Terbuka untuk kolaborasi, diskusi project, atau sekadar say hi.</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-panel rounded-full px-5 py-2.5 font-body text-sm text-ink-muted transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
