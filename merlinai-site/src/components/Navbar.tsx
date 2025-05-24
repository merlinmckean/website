import * as React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-700 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Merlin AI</div>
      <div>
        <a href="/" className="mr-6 hover:underline">Home</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
