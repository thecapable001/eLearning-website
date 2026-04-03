import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { getStoredSession, logoutUser } from "../../api/authService";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [session, setSession] = React.useState(() => getStoredSession());
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    setSession(getStoredSession());
    setMenuOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setSession(null);
    setMenuOpen(false);
    navigate("/");
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-navbar sticky-top${isScrolled ? " is-scrolled" : ""}`}>
      <div className="container">
        <nav
          className={`navbar navbar-expand-lg navbar-wrap${menuOpen ? " menu-open" : ""}`}
          aria-label="Primary"
        >
          <Link to="/" className="navbar-brand brand-wrap">
            <span className="brand-mark">
              <img
                src="/img/bytebridge-logo.png"
                alt="ByteBridge Logo"
                className="brand-logo"
              />
            </span>
            <span className="brand-text">
              <span className="brand-title">ByteBridge</span>
            </span>
          </Link>

          <button
            className={`navbar-toggler nav-toggle border-0 shadow-none${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-controls="navbarCollapse"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="toggler-line"></span>
            <span className="toggler-line"></span>
            <span className="toggler-line"></span>
          </button>

          <div
            className={`collapse navbar-collapse custom-navbar-collapse${menuOpen ? " show" : ""}`}
            id="navbarCollapse"
          >
            <div className="navbar-nav nav-links-row">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `nav-link modern-link${isActive ? " active-link" : ""}`
                  }
                >
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>

            <div className="nav-actions">
              {session ? (
                <>
                  <NavLink
                    to="/profile"
                    onClick={handleNavClick}
                    className="nav-action-link"
                  >
                    Dashboard
                  </NavLink>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="btn modern-btn nav-action-primary"
                  >
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <NavLink
                  to="/signin"
                  onClick={handleNavClick}
                  className="btn modern-btn nav-action-primary"
                >
                  <span>Get Started</span>
                </NavLink>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
