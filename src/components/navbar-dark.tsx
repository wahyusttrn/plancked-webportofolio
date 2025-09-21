'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const NavbarDark: React.FC<{ opacity: number; display?: string }> = ({ opacity, display = 'flex' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { title: string; route: string }[] = [
    {
      title: '3d',
      route: '/3d'
    },
    {
      title: '2d',
      route: '/2d'
    },
    {
      title: 'me',
      route: '/me'
    }
  ];

  return (
    <nav
      className="text-redish font-sans font-bold w-dvw h-16 md:px-32 px-10 flex items-center justify-between fixed top-0 right-0 z-[999]"
      style={{ opacity, display }}
    >
      <Link className="py-4 px-5 italic hover:underline" href={'/'}>
        (ħ)
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between">
        {navLinks.map((navLink, i) => (
          <Link key={i} className="py-4 px-5 uppercase hover:underline" href={navLink.route}>
            {navLink.title}
          </Link>
        ))}
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer z-50"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-8 h-0.5 bg-redish transform transition duration-300 ease-in-out
            ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
          className={`block w-8 h-0.5 bg-redish transition-opacity duration-300
            ${isOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-8 h-0.5 bg-redish transform transition duration-300 ease-in-out
            ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed md:hidden top-0 right-0 w-full h-screen bg-sec-background transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((navLink, i) => (
            <Link
              key={i}
              className="py-4 px-5 uppercase hover:underline text-2xl"
              href={navLink.route}
              onClick={() => setIsOpen(false)}
            >
              {navLink.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarDark;
