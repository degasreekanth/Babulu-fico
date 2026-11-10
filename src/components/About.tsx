import { CheckCircle2, Target, Zap, Heart } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'Empowering Careers. Delivering Excellence. We exist to make SAP FICO education accessible, practical, and career-ready.',
  },
  {
    icon: Zap,
    title: 'Our Approach',
    text: 'Hands-on labs with live SAP systems, real-time project walkthroughs, and dedicated mentorship at every step.',
  },
  {
    icon: Heart,
    title: 'Our Promise',
    text: "We stay with you beyond the course — interview support, resume guidance, and a alumni network you can rely on.",
  },
];

const facts = [
  'Live SAP system access throughout the course',
  'Weekday & weekend batches available',
  'Online and offline (hybrid) modes',
  'Recorded sessions for flexible revision',
  'Regular doubt-clearing sessions',
  'Study materials and configuration notes provided',
  'Certificate on course completion',
  'Lifetime access to alumni community',
];

export default function About() {
  return (
    <section id="about" className="py-6 sm:py-8 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <span className="text-xs sm:text-sm font-bold text-gold-600 uppercase tracking-widest">
              About ERPWorld
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              India's Premier SAP FICO{' '}
              <span className="text-gold-500">Training Institute</span>
            </h2>
            <div className="mt-2.5 w-16 h-1 rounded-full bg-gold-400" />
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              ERPWorld was founded with one purpose: to bridge
              the gap between SAP education and real-world implementation. Our trainers
              are practicing SAP consultants who bring live project experience directly
              into the classroom.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you are a fresh graduate looking to break into the SAP world, an
              accounts professional aiming to upskill, or a career switcher targeting the
              SAP job market, we have a course and a support system built for you.
            </p>

            <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-3 sm:gap-4">
              {[['500+', 'Students Trained'], ['95%', 'Placement Rate'], ['8+', 'Years of Excellence']].map(([value, label]) => (
                <div key={label} className="text-center p-3.5 sm:p-4 rounded-xl bg-navy-900 shadow-lg">
                  <div className="text-xl sm:text-2xl font-bold text-gold-400">{value}</div>
                  <div className="text-[11px] sm:text-xs text-navy-200 mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-6 grid sm:grid-cols-3 gap-3 sm:gap-4">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Icon className="w-5 h-5 text-gold-500 mb-2.5" />
                  <div className="font-bold text-navy-900 text-sm">{title}</div>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-4">
            <div className="bg-navy-900 rounded-2xl p-5 sm:p-6 shadow-2xl">
              <h3 className="text-gold-400 font-bold text-sm uppercase tracking-widest mb-4">
                What's Included
              </h3>
              <ul className="space-y-3">
                {facts.map((fact) => (
                  <li key={fact} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span className="text-navy-100 text-sm">{fact}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 block w-full text-center py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold transition-colors"
              >
                Talk to an Advisor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
