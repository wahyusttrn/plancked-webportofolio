'use client';

import BlinkingEdge from '@/components/blinking-edge';
import NavbarDark from '@/components/navbar-dark';
import VideoPlayer from '@/components/video-player';
import { works } from '@/db/works';
import Image from 'next/image';

const TwoDPage = () => {
  return (
    <>
      <div className="font-sans text-redish bg-sec-background w-dvw flex flex-col justify-center items-center">
        <NavbarDark />
        <div className="w-4/5 mt-28">
          <div className="">
            <h1 className="text-redish max-w-3xl">
              <b>Planck.</b> 2D art station
            </h1>
          </div>
        </div>
        <section className="relative w-screen flex justify-center mt-10">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 justify-center min-h-screen w-4/5">
            {works.map((e, i) => {
              if (e.type === '2d') {
                return (
                  <VideoPlayer
                    key={i}
                    src={`/works/${e.type}/${e.title}.mp4`}
                    thumbnailSrc={`/works/thumbnail/${e.type}/${e.title}.png`}
                    className={`w-full ${e.space === 'wide' && 'md:col-span-3 sm:col-span-2'}`}
                  />
                );
              } else if (e.type === 'pamflet') {
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
      <BlinkingEdge />
    </>
  );
};

export default TwoDPage;
