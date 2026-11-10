import { PhoneCall, ClipboardList, BookOpen, Rocket } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    number: '01',
    title: 'Free Counselling',
    description:
      'Speak with our SAP career advisor to understand which course level suits your background and career goals.',
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Enrolment & Demo',
    description:
      'Attend a free demo class to experience our teaching style, then complete a quick online enrolment.',
  },
  {
    icon: BookOpen,
    number: '03',
    title: 'Live Training',
    description:
      'Join your batch — weekday or weekend — with access to a live SAP system, recorded sessions, and study materials.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Placement Support',
    description:
      'Resume building, mock interviews, job portal registration, and direct referrals to our hiring partner network.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-6 sm:py-8 lg:py-10 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5 lg:mb-6">
          <span className="text-xs sm:text-sm font-bold text-gold-400 uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Your Journey to{' '}
            <span className="text-gold-400">SAP Career Success</span>
          </h2>
          <div className="mt-2.5 mx-auto w-16 h-1 rounded-full bg-gold-400" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-11 left-[62%] w-full h-px bg-gradient-to-r from-gold-500/40 to-transparent" />
                )}
                <div className="relative p-4 sm:p-5 lg:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold-400/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gold-500/20 group-hover:bg-gold-500 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-5 h-5 text-gold-400 group-hover:text-navy-900 transition-colors duration-300" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-navy-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 sm:mt-6 text-center">
          <a
            href="tel:9391983250"
            className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm sm:text-base transition-all shadow-xl shadow-gold-500/20 hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
            Call Now: +91 93919 83250
          </a>
        </div>
      </div>
    </section>
  );
}
