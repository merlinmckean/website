export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Use JS to get the current year dynamically */}
        <p>© {new Date().getFullYear()} Merlin AI. All Rights Reserved.</p>
        <nav className="footer-nav">
           {/* Example if you add Privacy/Terms pages later */}
           {/* <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link> */}
        </nav>
      </div>
    </footer>
  );
}