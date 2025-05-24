import * as React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 p-4 text-center mt-10">
      &copy; {new Date().getFullYear()} Merlin AI. All rights reserved.
    </footer>
  );
}
