'use client';

import {useState, useRef, useEffect, useCallback} from 'react';
import {certificates, type Certificate} from '@/lib/data';
import Reveal from '@/components/Reveal';
import CertificateModal from './CertificateModal';

const track = [...certificates, ...certificates];

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const drag = useRef({active: false, startX: 0, scrollLeft: 0, moved: false});
  const autoScroll = useRef(true);
  const rafId = useRef(0);

  // Auto-scroll loop with seamless infinite resetting
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const scroll = () => {
      if (autoScroll.current && !drag.current.active) {
        el.scrollLeft += 0.5;

        // Infinite loop threshold adjustment
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += halfWidth;
        }
      }
      rafId.current = requestAnimationFrame(scroll);
    };

    rafId.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const handleDragStart = useCallback((pageX: number) => {
    const el = marqueeRef.current;
    if (!el) return;

    drag.current.active = true;
    drag.current.moved = false;
    drag.current.startX = pageX - el.offsetLeft;
    drag.current.scrollLeft = el.scrollLeft;
    autoScroll.current = false;

    el.classList.add('grabbing');
    el.classList.remove('grab');
  }, []);

  const handleDragMove = useCallback((pageX: number) => {
    if (!drag.current.active) return;
    const el = marqueeRef.current;
    if (!el) return;

    const x = pageX - el.offsetLeft;
    const walk = (x - drag.current.startX) * 1.5;

    if (Math.abs(walk) > 5) {
      drag.current.moved = true;
    }

    let newScrollLeft = drag.current.scrollLeft - walk;
    const halfWidth = el.scrollWidth / 2;

    // Keep scroll within bounds while dragging so it wraps smoothly
    if (newScrollLeft >= halfWidth) {
      newScrollLeft -= halfWidth;
      drag.current.startX = pageX - el.offsetLeft;
      drag.current.scrollLeft = newScrollLeft;
    } else if (newScrollLeft < 0) {
      newScrollLeft += halfWidth;
      drag.current.startX = pageX - el.offsetLeft;
      drag.current.scrollLeft = newScrollLeft;
    }

    el.scrollLeft = newScrollLeft;
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!drag.current.active) return;
    drag.current.active = false;

    // Resume auto-scroll seamlessly
    autoScroll.current = true;

    const el = marqueeRef.current;
    if (el) {
      el.classList.remove('grabbing');
      el.classList.add('grab');
    }
  }, []);

  // Global mouse/touch release listeners so dragging outside the div releases smoothly
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleDragMove(e.pageX);
    const onMouseUp = () => handleDragEnd();
    const onTouchMove = (e: TouchEvent) => handleDragMove(e.touches[0].pageX);
    const onTouchEnd = () => handleDragEnd();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [handleDragMove, handleDragEnd]);

  return (
    <section id="certificates" className="py-24">
      <Reveal>
        <div className="mx-auto w-full max-w-3xl px-6">
          <span className="font-mono text-xs tracking-widest text-amber">[ CERTIFICATES ]</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">Sertifikat & pencapaian</h2>
        </div>

        <div ref={marqueeRef} className="cert-marquee grab no-scrollbar mt-8 select-none" onMouseDown={(e) => handleDragStart(e.pageX)} onTouchStart={(e) => handleDragStart(e.touches[0].pageX)}>
          <div className="cert-track">
            {track.map((cert, i) => (
              <button
                key={`${cert.slug}-${i}`}
                onClick={() => {
                  // Only open modal if user clicked without dragging
                  if (!drag.current.moved) {
                    setSelected(cert);
                  }
                }}
                className="cert-card flex w-64 shrink-0 flex-col gap-1.5 rounded-2xl px-5 py-4 text-left">
                <span className="text-2xl" aria-hidden="true">
                  🏅
                </span>
                <p className="line-clamp-2 font-display text-sm font-semibold text-ink">{cert.title}</p>
                <p className="font-mono text-xs text-amber">{cert.issuer}</p>
                <p className="font-body text-xs text-ink-muted">{cert.date}</p>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {selected && <CertificateModal cert={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
