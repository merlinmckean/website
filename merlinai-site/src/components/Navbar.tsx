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
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        {/* Optional: Add a smaller CTA button here if desired */}
        {/* <a href="#contact-form" className="cta-button small-cta">Book Now</a> */}
      </div>
    </header>
  );
}