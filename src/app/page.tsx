'use client';

import LogoShowcase from '@/components/logo-showcase';
import { useState, useEffect } from 'react';
import NavbarDark from '@/components/navbar-dark';
import Navbar from '@/components/navbar';
import BlinkingEdge from '@/components/blinking-edge';
import VideoPlayer from '@/components/video-player';

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
      console.log(overlayOpacity);
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
            <VideoPlayer
              src="/works/3d/gnine.mp4"
              thumbnailSrc="/works/3d/gnine_thumbnail.png"
              className="w-full md:col-span-3 sm:col-span-2"
            />
            <VideoPlayer src="/works/3d/maba_party.mp4" className="w-full" />
            <VideoPlayer src="/works/3d/chariot.mp4" className="w-full" />
            <VideoPlayer src="/works/3d/soul_essence.mp4" className="w-full" />
          </div>
        </section>
      </div>
      <BlinkingEdge opacity={overlayOpacity} display={display} />
    </>
  );
}
