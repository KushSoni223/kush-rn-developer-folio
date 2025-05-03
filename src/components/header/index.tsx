'use client';

import Image from 'next/image';
/* eslint-disable @typescript-eslint/no-require-imports */
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-400 ease-in-out ${
        isScroll
          ? 'mx-10 rounded-b-lg bg-zinc-900 py-4 shadow-md'
          : 'bg-zinc-800 py-6'
      }`}
    >
      <div className="container mx-auto flex items-center gap-6 transition-all duration-300">
        <Link href="/">
          <Image
            src={require('../../../public/code.svg')}
            alt="VegCart"
            style={{
              filter: 'invert(1)',
            }}
            className={`transition-all duration-300 ease-in-out ${
              isScroll ? 'w-10' : 'w-10'
            }`}
          />
        </Link>
        <nav className="ml-auto">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href=""
                className={`rounded-4xl px-4 py-2 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black ${
                  isScroll ? 'text-base' : 'text-lg'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="rounded-4xl px-4 py-2 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="rounded-4xl px-4 py-2 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="rounded-4xl px-4 py-2 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
