// src/components/Hero.tsx
export default function Hero() {
    return (
      <section className="p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-700">
          Transform Your Workflows with Expert AI Integration.
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
          Merlin AI partners with Boston-area businesses to integrate practical AI solutions.
          No complex jargon—just tangible results.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Book Your Free Consultation
        </a>
      </section>
    );
  }
  