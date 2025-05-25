import * as React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-sm">
      <div className="font-bold text-2xl text-blue-700 tracking-tight">Merlin AI</div>
      <div className="flex space-x-8 text-lg font-medium ml-auto">
        <a href="/" className="text-gray-700 hover:text-blue-700 transition-colors">Home</a>
        <a href="/services" className="text-gray-700 hover:text-blue-700 transition-colors">Services</a>
        <a href="/about" className="text-gray-700 hover:text-blue-700 transition-colors">About</a>
        <a href="/contact" className="text-gray-700 hover:text-blue-700 transition-colors">Contact</a>
      </div>
    </nav>
  );
}
