// src/app/contact/page.tsx

export default function ContactPage() {
    return (
      <section className="p-10">
        <h1 className="text-2xl font-bold text-blue-700">Contact Us</h1>
        <p className="mt-4 text-gray-600">Reach out to book a free consultation or learn more.</p>
        <a
          href="mailto:hello@merlinai.work"
          className="mt-6 inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Email Us
        </a>
      </section>
    );
  }
  