'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/services', label: 'Services' },
    { href: '/process', label: 'Process' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About' },
    { href: '/book-a-call', label: 'Book a Call' },
  ];

  return (
    <header className="sticky top-0 z-20 w-full border-b border-neutral-800
                       bg-neutral-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3
                      md:px-6">
        {/* Logo mark */}
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <img src="/images/logo-mark.svg" alt="Merlin AI logo" className="h-6 w-6" />
          <span className="hidden sm:inline">Merlin AI</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-blue-400">
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav className="md:hidden border-t border-neutral-800 bg-neutral-950">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-4 py-3 text-sm hover:bg-neutral-900"
              onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
