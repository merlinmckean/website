// src/components/ui/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="logo">
          Merlin AI
        </Link>
        <nav className="main-nav">
          <ul>
            {/* Use <a> for hash links if sections are on the homepage */}
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            {/* If these were separate pages, use <Link>:
            <li><Link href="/services">Services</Link></li>
             */}
          </ul>
        </nav>
        {/* Optional: Add a smaller CTA button here if desired */}
        {/* <a href="#contact-form" className="cta-button small-cta">Book Now</a> */}
      </div>
    </header>
  );
}