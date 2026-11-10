import { ArrowRight, Play, BookOpen, Users, Award, Clock } from 'lucide-react';

const badges = [
  { icon: BookOpen, label: 'SAP FICO Training' },
  { icon: Users, label: 'Expert Trainers' },
  { icon: Award, label: 'Certification' },
  { icon: Clock, label: 'Flexible Batches' },
];

const modules = [
  'Financial Accounting (FI)',
  'Controlling (CO)',
  'SAP S/4HANA Finance',
  'General Ledger',
  'Accounts Payable / Receivable',
  'Asset Accounting',
  'Cost Center & Profit Center',
  'COPA & Product Costing',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-900 flex items-center py-8 sm:py-10 lg:py-12"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-hero-pattern opacity-100" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-700/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-start gap-2 max-w-full px-3.5 py-1.5 sm:py-2 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-400 text-xs sm:text-sm font-semibold leading-snug mb-4 sm:mb-5">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-400 animate-pulse flex-shrink-0" />
            Your Trusted Partner for SAP Finance Excellence
          </div>

          <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.12] tracking-tight">
            <span className="text-gold-400">ERPWorld</span>{' '}
            <span className="block">SAP FICO</span>
            <span className="block bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              Training & Consulting
            </span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-navy-200 font-medium tracking-wide">
            Learn Today &nbsp;|&nbsp; Implement Tomorrow &nbsp;|&nbsp; Lead the Future
          </p>

          <p className="mt-2.5 text-sm text-navy-300 leading-relaxed max-w-xl">
            Industry-leading SAP FICO training from beginner to advanced level. Gain
            real-time project experience, expert mentorship, and the career support
            needed to launch your SAP career.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm sm:text-base transition-all shadow-xl shadow-gold-500/20 hover:-translate-y-0.5"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/5 transition-colors"
            >
              <Play className="w-4 h-4 fill-white" />
              View Courses
            </a>
          </div>

          <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
                <span className="text-[11px] sm:text-xs text-navy-200 font-medium leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — module tags */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="w-full rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 border border-white/10 shadow-2xl p-6 flex flex-col gap-6 overflow-hidden">
              <div className="absolute inset-0 bg-hero-pattern opacity-30" />
              <div className="relative z-10">
                <div className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">
                  What You Will Learn
                </div>
                <div className="flex flex-wrap gap-2">
                  {modules.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-700/80 border border-navy-600 text-navy-100 text-xs font-medium hover:border-gold-400/50 hover:text-gold-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-3">
                <div className="bg-navy-700/80 border border-navy-600 rounded-xl p-3.5">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-navy-300 text-xs mt-0.5">Students Trained</div>
                </div>
                <div className="bg-gold-500/20 border border-gold-400/30 rounded-xl p-3.5">
                  <div className="text-2xl font-bold text-gold-400">95%</div>
                  <div className="text-navy-300 text-xs mt-0.5">Placement Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
