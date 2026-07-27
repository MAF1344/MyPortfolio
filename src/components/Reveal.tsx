'use client';

import {useEffect, useRef, useState} from 'react';

// Membungkus konten section: fade + geser naik sedikit saat elemen
// masuk viewport pertama kali. `motion-reduce:` membuatnya langsung
// tampil tanpa animasi untuk pengguna yang mengaktifkan reduced motion.
export default function Reveal({children}: {children: React.ReactNode}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {threshold: 0.15},
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
      {children}
    </div>
  );
}
