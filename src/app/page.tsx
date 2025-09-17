'use client';

import LogoShowcase from '@/components/logo-showcase';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = Math.min(window.scrollY / (window.innerHeight * 0.5), 1);
      const opacity = Math.max(0, Math.min(1, (scrollProgress - 0.7) * 3.5));
      setTextOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">
      <header>
        <div className="h-[230vh]">
          <div className="h-screen w-screen sticky top-0">
            <LogoShowcase />
            <div
              className="absolute bottom-24 left-1/12 transition-opacity duration-300"
              style={{ opacity: textOpacity }}
            >
              <p className="font-bold italic">(ħ)</p>
              <p>
                <b>Planck.</b> quick tour
              </p>
            </div>
          </div>
        </div>
      </header>

      <p className="font-bold italic text-center text-xl py-5">(ħ)</p>

      <section className="relative overflow-hidden">
        <div className="min-h-screen w-56 absolute top-0 right-0 bg-gradient-to-l from-redish/55 to-sec-background/0 opacity-50"></div>
        <div className="min-h-screen w-56 absolute top-0 left-0 bg-gradient-to-r from-redish/55 to-sec-background/0 opacity-50"></div>
        <div className="flex items-center justify-center min-h-screen bg-sec-background">
          <h1 className="text-redish">Hello.</h1>
        </div>
      </section>
    </div>
  );
}
