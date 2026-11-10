import {
  Phone,
  Mail,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <img
              src={`${import.meta.env.BASE_URL}images/erpworld-logo-light.png`}
              alt="ERPWorld — SAP FICO Training Institute"
              width={900}
              height={380}
              className="h-16 sm:h-20 md:h-24 w-auto"
            />

            <p className="mt-5 sm:mt-6 text-navy-300 text-sm leading-relaxed max-w-md">
              India's premier SAP FICO training institute delivering
              industry-ready professionals through hands-on, project-based
              learning and comprehensive placement support.
            </p>

            <div className="mt-4 text-gold-400 text-sm font-semibold italic">
              "Empowering Careers. Delivering Excellence."
            </div>

            <div className="flex gap-3 mt-6">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "#contact" },
                { icon: Youtube, label: "YouTube", href: "#courses" },
                { icon: Instagram, label: "Instagram", href: "#about" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gold-500 flex items-center justify-center text-navy-300 hover:text-navy-900 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-gold-400 font-bold text-sm uppercase tracking-widest mb-5">
              Courses
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "SAP FI & CO Fundamentals",
                "GL, AP/AR & Asset Accounting",
                "S/4HANA FICO & COPA",
                "Complete Course Bundle",
                "Corporate Training",
              ].map((c) => (
                <li key={c}>
                  <a
                    href="#courses"
                    className="inline-block py-0.5 text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold-400 font-bold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:9391983250"
                  className="flex items-center gap-2.5 text-navy-300 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  +91 93919 83250
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bpmrsapfico.com"
                  className="flex items-center gap-2.5 text-navy-300 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  info@bpmrsapfico.com
                </a>
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-block px-5 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-bold transition-colors"
            >
              Enroll Now
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-navy-500">
          <p>
            &copy; {new Date().getFullYear()} ERPWorld. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#courses"
              className="hover:text-navy-300 transition-colors"
            >
              Courses
            </a>
            <a
              href="#contact"
              className="hover:text-navy-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
