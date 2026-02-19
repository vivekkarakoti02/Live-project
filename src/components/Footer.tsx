import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary-bg)] border-t border-[var(--color-border)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-sm flex items-center justify-center text-black font-bold text-xs">
                V
              </div>
              <span className="text-lg font-bold tracking-tight">The Viraj</span>
            </div>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
              Because Every Home Deserves a Soul.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-[var(--color-text-primary)]">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">About</Link></li>
              <li><Link to="/services" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">Services</Link></li>
              <li><Link to="/faq" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-[var(--color-text-primary)]">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-sm text-[var(--color-text-muted)]">
                <a href="tel:+919876543210" className="hover:text-[var(--color-accent)] transition-colors">📞 +91 98765 43210</a>
              </li>
              <li className="text-sm text-[var(--color-text-muted)]">
                <a href="mailto:hello@theviraj.com" className="hover:text-[var(--color-accent)] transition-colors">📧 hello@theviraj.com</a>
              </li>
              <li className="text-sm text-[var(--color-text-muted)]">
                📍 123 Design Avenue, Creative City, India
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-[var(--color-text-primary)]">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-sm">Instagram</a>
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-sm">Facebook</a>
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-sm">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} The Viraj. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]">Privacy Policy</a>
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
