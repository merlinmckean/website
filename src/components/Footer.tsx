export default function Footer() {
    return (
      <footer className="border-t border-neutral-800 bg-neutral-950 py-6 text-center
                         text-sm text-neutral-500">
        © {new Date().getFullYear()} Merlin AI · Boston, MA
      </footer>
    );
  }
  