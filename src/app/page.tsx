import LogoShowcase from '@/components/logo-showcase';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans">
      <header className="" id="home">
        <div className="absolute bottom-24 left-1/12">
          <p className="font-bold italic">(ħ)</p>
          <p>
            <b>Planck.</b> quick tour
          </p>
        </div>
        <div className="">
          <LogoShowcase />
        </div>
      </header>

      <p className="font-bold italic text-center text-xl py-5">(ħ)</p>

      <section className="relative overflow-hidden">
        <div className="min-h-screen w-56 absolute top-0 right-0 bg-gradient-to-l from-redish/55 to-sec-background/0 opacity-50"></div>
        <div className="min-h-screen w-56 absolute top-0 left-0 bg-gradient-to-r from-redish/55 to-sec-background/0 opacity-50"></div>
        <div className="flex items-center justify-center min-h-screen bg-sec-background">
          <h1 className="text-background">Hello.</h1>
        </div>
      </section>
    </div>
  );
}
