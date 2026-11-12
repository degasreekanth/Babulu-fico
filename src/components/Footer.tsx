import {
  Phone,
  Mail,
  Globe,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 pb-6 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <img
              src={`${import.meta.env.BASE_URL}images/erpwonder-logo-light.png`}
              alt="ERPWonder — SAP FICO Training Institute"
              width={900}
              height={342}
              className="h-14 sm:h-16 md:h-20 w-auto"
            />

            <p className="mt-4 text-navy-300 text-sm leading-relaxed max-w-md">
              India's premier SAP FICO training institute delivering
              industry-ready professionals through hands-on, project-based
              learning and comprehensive placement support.
            </p>

            <div className="mt-3 text-gold-400 text-sm font-semibold italic">
              "Empowering Careers. Delivering Excellence."
            </div>

            <div className="flex gap-3 mt-5">
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
            <h3 className="text-gold-400 font-bold text-sm uppercase tracking-widest mb-4">
              Courses
            </h3>
            <ul className="space-y-2.5 text-sm">
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
            <h3 className="text-gold-400 font-bold text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
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
                  href="mailto:erpwondersapfi@gmail.com"
                  className="flex items-center gap-2.5 text-navy-300 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  erpwondersapfi@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://erpwonder.com"
                  className="flex items-center gap-2.5 text-navy-300 hover:text-gold-400 transition-colors"
                >
                  <Globe className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  erpwonder.com
                </a>
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-5 inline-block px-5 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-bold transition-colors"
            >
              Enroll Now
            </a>
          </div>
        </div>

        <div className="pt-5 flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-navy-500">
          <p>
            &copy; {new Date().getFullYear()} ERPWonder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
