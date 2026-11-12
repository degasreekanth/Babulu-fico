import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Placement", href: "#placement" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-navy-950 text-gold-400 text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-navy-300">
            Empowering Careers. Delivering Excellence.
          </span>
          <a
            href="tel:9391983250"
            className="flex items-center gap-1.5 hover:text-gold-300 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            +91 93919 83250
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/30"
            : "bg-navy-900"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 py-2 sm:py-2.5">
          <a
            href="#home"
            className="flex items-center shrink-0 transition-opacity hover:opacity-90"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/erpwonder-lockup-light.png`}
              alt="ERPWonder — SAP FICO Training Institute"
              width={760}
              height={252}
              className="h-7 sm:h-8 md:h-9 w-auto"
            />
          </a>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-navy-200 hover:text-gold-400 transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-bold transition-all shadow-lg shadow-gold-500/25 hover:-translate-y-0.5"
          >
            Enroll Now
          </a>

          <button
            className="-mr-2 p-2.5 lg:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden bg-navy-900 border-t border-white/10 max-h-[calc(100svh-4rem)] overflow-y-auto">
            <ul className="px-4 sm:px-6 py-3 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-navy-200 hover:text-gold-400 py-2.5 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:9391983250"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-gold-400 py-2 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  +91 93919 83250
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center px-5 py-3 rounded-lg bg-gold-500 text-navy-900 font-bold"
                >
                  Enroll Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
