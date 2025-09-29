'use client';

import LogoShowcase from '@/components/logo-showcase';
import { useState, useEffect } from 'react';
import NavbarDark from '@/components/navbar-dark';
import Navbar from '@/components/navbar';
import BlinkingEdge from '@/components/blinking-edge';
import VideoPlayer from '@/components/video-player';
import Image from 'next/image';
import { works } from '@/db/works';

export default function Home() {
  const [textOpacity, setTextOpacity] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = Math.min(window.scrollY / (window.innerHeight * 0.5), 2);

      const textOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.6) * 3));
      setTextOpacity(textOpacity);

      const overlayOpacity = Math.max(0, Math.min(1, (scrollProgress - 1.9) * 10));
      setOverlayOpacity(overlayOpacity);
      if (overlayOpacity > 0) {
        setDisplay('flex');
      } else {
        setDisplay('none');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavbarDark opacity={overlayOpacity} display={display} />
      <Navbar /> {/* this is still bad, doubled navbar */}
      <div className="font-sans bg-sec-background z-50">
        <header className="relative">
          <div className="h-[230vh]">
            <div className="h-screen w-screen sticky top-0 transition-all duration-300">
              <div className="absolute inset-0 bg-background" />
              <div
                className="absolute inset-0 transition-opacity duration-300 bg-sec-background"
                style={{ opacity: overlayOpacity }}
              />

              <div className="relative z-10">
                <LogoShowcase />
                <div
                  className="absolute bottom-24 left-1/12 transition-all duration-300"
                  style={{
                    opacity: textOpacity,
                    color: overlayOpacity > 0 ? 'var(--redish)' : 'initial'
                  }}
                >
                  <p className="font-bold italic">(ħ)</p>
                  <p>
                    <b>Planck.</b> quick tour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <p className="font-bold italic text-center text-xl py-5 text-redish">(ħ)</p>

        <section className="relative w-screen flex justify-center mt-10">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 justify-center min-h-screen w-4/5">
            {works.map((e, i) => {
              if (e.type !== 'pamflet') {
                return (
                  <VideoPlayer
                    key={i}
                    src={`/works/${e.type}/${e.title}.mp4`}
                    thumbnailSrc={`/works/thumbnail/${e.type}/${e.title}.png`}
                    className={`w-full ${e.space === 'wide' && 'md:col-span-3 sm:col-span-2'}`}
                  />
                );
              } else {
                return (
                  <Image
                    key={i}
                    src={`/works/pamflet/${e.title}.png`}
                    width={400}
                    height={400}
                    alt={e.title}
                    className={`w-full ${e.space === 'wide' && 'md:col-span-3 sm:col-span-2'}`}
                  />
                );
              }
            })}
          </div>
        </section>
      </div>
      <BlinkingEdge opacity={overlayOpacity} display={display} />
    </>
  );
}
