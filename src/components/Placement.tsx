import { Briefcase, FileText, MessageCircle, Users } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Resume Crafting',
    description: 'Our placement team reviews and optimizes your resume specifically for SAP FICO roles.',
  },
  {
    icon: MessageCircle,
    title: 'Mock Interviews',
    description: 'Realistic SAP technical and HR interview simulations with detailed feedback.',
  },
  {
    icon: Briefcase,
    title: 'Job Referrals',
    description: 'Direct connections with our network of SAP hiring partners and system integrators.',
  },
  {
    icon: Users,
    title: 'LinkedIn Optimization',
    description: 'Professional profile setup to attract SAP recruiters and headhunters.',
  },
];

export default function Placement() {
  return (
    <section id="placement" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="text-sm font-bold text-gold-600 uppercase tracking-widest">
            Career Placement
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            We Don't Stop at Training —{' '}
            <span className="text-gold-500">We Get You Placed</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gold-400" />
          <p className="mt-5 text-base text-slate-500 leading-relaxed">
            Our 360-degree placement support has helped 500+ students land SAP FICO roles
            at leading IT companies and enterprises across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12 md:mb-14">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 md:p-7 border border-slate-200 hover:border-gold-300 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 group-hover:bg-navy-900 flex items-center justify-center transition-colors duration-300">
                <Icon className="w-6 h-6 text-navy-700 group-hover:text-gold-400 transition-colors duration-300" />
              </div>
              <h3 className="mt-5 font-bold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <figure>
          <img
            src={`${import.meta.env.BASE_URL}images/erpworld-placements.webp`}
            alt="ERPWorld SAP FICO learners placed at TCS, Infosys, Wipro, HCLTech, Cognizant, Deloitte, Accenture, Capgemini, Tech Mahindra and other companies"
            width={1672}
            height={941}
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-2xl md:rounded-3xl shadow-xl ring-1 ring-slate-200"
          />
        </figure>
      </div>
    </section>
  );
}
