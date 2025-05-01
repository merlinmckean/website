// src/app/page.tsx
import Link from 'next/link'; // Import if you need internal links

export default function HomePage() {
  return (
    // The hero section content goes here
    <section id="hero" className="hero-section">
      {/* Use the container class for consistent padding/width */}
      <div className="container">
          <div className="hero-content"> {/* Apply hero-content styles */}
              <h1>Transform Your Workflows with Expert AI Integration.</h1>
              <p>
                  Merlin AI partners with small and medium-sized businesses in the Boston area
                  to integrate practical AI solutions. We streamline your processes, automate
                  tasks, and enhance efficiency – no complex jargon, just tangible results.
              </p>
              {/* Use <a> for hash links on the same page */}
              <a href="#contact-form" className="cta-button">
                  Book Your Free Consultation
              </a>
              {/* If linking to a different page (e.g., /contact), use Link:
              <Link href="/contact" className="cta-button">
                  Book Your Free Consultation
              </Link>
              */}
          </div>
      </div>
    </section>

    // --- Add other sections of your homepage below ---
    // <section id="services" className="services-section">...</section>
    // <section id="contact-form" className="contact-section">...</section>
  );
}