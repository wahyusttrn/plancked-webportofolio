import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="h-80 w-dvw flex justify-center py-14 bg-sec-background font-sans">
        <div className="w-4/5">
          <h1 className="font-bold text-redish mb-3">contact</h1>
          <div className="flex flex-col">
            <Link className="text-redish hover:underline" href={'/'}>
              Instagram
            </Link>
            <Link className="text-redish hover:underline" href={'/'}>
              Email
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
