import { Link, useLocation } from 'react-router-dom';

const footerLinks = [
  { to: '/about', label: 'Acerca de' },
  { to: '/privacy-policy', label: 'Politica de privacidad' },
  { to: '/terms', label: 'Términos' },
  { to: '/contact', label: 'Contacto' },
];

export default function GlobalFooter() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <footer className={`global-footer ${isHome ? 'home' : ''}`}>
      <div className="global-footer-inner">
        <nav className="global-footer-nav" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to} className="global-footer-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
