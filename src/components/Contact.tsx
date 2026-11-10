import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import SuccessModal from "@/components/SuccessModal";
import {
  buildGmailComposeUrl,
  isLeadDeliveryConfigured,
  submitLead,
} from "@/lib/leads";

const interests = [
  "Free Demo Class",
  "Course Details & Fees",
  "Batch Timings",
  "Placement Assistance",
  "Doubt / General Inquiry",
];

const modes = ["Online (Live)", "Offline / Classroom", "Hybrid"];

type Status = "idle" | "submitting" | "error";

const PHONE = "9391983250";
const PHONE_INTL = "919391983250";
const EMAIL = "info@bpmrsapfico.com";

const fieldClass =
  "w-full px-3.5 py-3 rounded-lg border border-slate-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all text-slate-900 text-base sm:text-sm";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const lead = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      interest: String(fd.get("interest") || ""),
      mode: String(fd.get("mode") || ""),
      message: String(fd.get("message") || "").trim(),
    };

    if (!lead.name || !lead.email || !lead.phone) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and phone number.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    // Until a Google Sheet webhook or Supabase project is configured, hand the
    // request to Gmail compose so the enquiry still reaches the inbox.
    if (!isLeadDeliveryConfigured()) {
      window.open(
        buildGmailComposeUrl(lead, EMAIL),
        "_blank",
        "noopener,noreferrer",
      );
    }

    try {
      await submitLead(lead);
    } catch {
      setStatus("error");
      setErrorMsg(
        "We couldn't submit your request right now. Please try again or call us directly.",
      );
      return;
    }

    form.reset();
    setStatus("idle");
    setShowSuccess(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy-900 py-14 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 bg-hero-pattern opacity-60" />
      <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-navy-700/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-14">
          <span className="text-xs sm:text-sm font-bold text-gold-400 uppercase tracking-widest">
            Enrol Today
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Start Your SAP FICO Journey{" "}
            <span className="text-gold-400">Today</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gold-400" />
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-navy-300 leading-relaxed">
            Fill in the form and our team will contact you via WhatsApp or
            phone. Prefer to talk now? Call us directly for an instant response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">
          {/* Info cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 sm:gap-4 lg:gap-5">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-4 p-4 sm:p-5 md:p-6 rounded-2xl bg-gold-500 hover:bg-gold-400 transition-colors"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-navy-900/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-navy-900" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-navy-900/70 uppercase tracking-wider">
                  Call / WhatsApp
                </div>
                <div className="text-base md:text-lg font-bold text-navy-900 mt-0.5">
                  +91 93919 83250
                </div>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 p-4 sm:p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-gold-400" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-navy-400 uppercase tracking-wider">
                  Email
                </div>
                <div className="text-white font-semibold mt-0.5 text-sm md:text-base truncate">
                  {EMAIL}
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 sm:p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 sm:col-span-2 lg:col-span-1">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-gold-400" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-navy-400 uppercase tracking-wider">
                  Training Mode
                </div>
                <div className="text-white font-semibold mt-0.5 text-sm md:text-base">
                  Online & Offline Available
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${PHONE_INTL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 sm:p-5 md:p-6 rounded-2xl bg-green-500/10 border border-green-400/30 hover:bg-green-500/20 transition-colors sm:col-span-2 lg:col-span-1"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-green-400/70 uppercase tracking-wider">
                  WhatsApp Us
                </div>
                <div className="text-green-300 font-semibold mt-0.5 text-sm md:text-base">
                  Chat Instantly
                </div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl md:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-1">
                Request a Free Demo
              </h3>
              <p className="text-sm text-slate-500 mb-2">
                Share a few details and we&apos;ll get back to you within one
                working day.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  placeholder="you@email.com"
                  className={fieldClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    I'm Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className={`${fieldClass} bg-white`}
                  >
                    <option value="">Select an option...</option>
                    {interests.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="mode"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Training Mode
                  </label>
                  <select
                    id="mode"
                    name="mode"
                    className={`${fieldClass} bg-white`}
                  >
                    <option value="">Select mode...</option>
                    {modes.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Message / Question
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your background and what you're looking to achieve..."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm md:text-base transition-colors shadow-lg"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Request Free Demo Class
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400">
                Or call us directly:{" "}
                <a
                  href={`tel:${PHONE}`}
                  className="text-gold-600 font-bold hover:underline"
                >
                  +91 93919 83250
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </section>
  );
}
