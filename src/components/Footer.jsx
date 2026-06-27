export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="footer-brand">Imasha Ilamperuma</p>
          <p className="footer-note">Crafted with precision and purpose.</p>
        </div>
      </div>
      <div className="container">
        <p className="footer-copy">© {new Date().getFullYear()} Imasha Ilamperuma. All rights reserved.</p>
      </div>
    </footer>
  )
}
