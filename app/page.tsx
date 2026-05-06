import clsx from 'clsx';

const services = [
  { 
    title: "Cardiac Catheterization", 
    desc: "Diagnostic and interventional procedures using advanced imaging technology",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  { 
    title: "Coronary Angioplasty", 
    desc: "Minimally invasive procedure to open blocked coronary arteries",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  { 
    title: "Heart Rhythm Management", 
    desc: "Diagnosis and treatment of arrhythmias and pacemaker management",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  },
  { 
    title: "Echocardiography", 
    desc: "Comprehensive ultrasound imaging of the heart structure and function",
    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
  },
  { 
    title: "Preventive Cardiology", 
    desc: "Risk assessment, lifestyle counseling, and prevention strategies",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  { 
    title: "Heart Failure Management", 
    desc: "Comprehensive care for chronic heart failure conditions",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  }
];

const education = [
  { year: "2010-2012", title: "Fellowship in Interventional Cardiology", place: "Cleveland Clinic", desc: "Specialized training in complex coronary interventions" },
  { year: "2007-2010", title: "Residency in Internal Medicine", place: "Johns Hopkins Hospital", desc: "Clinical excellence award recipient" },
  { year: "2003-2007", title: "MD - Doctor of Medicine", place: "Johns Hopkins University", desc: "Graduated with honors, Alpha Omega Alpha" },
  { year: "1999-2003", title: "BS in Biology", place: "Stanford University", desc: "Summa Cum Laude" }
];

const testimonials = [
  { name: "James R.", text: "Dr. Chen saved my life. His expertise and care during my emergency procedure was exceptional." },
  { name: "Susan K.", text: "After years of struggling with heart issues, Dr. Chen finally provided answers and effective treatment." },
  { name: "Robert T.", text: "The most thorough and compassionate cardiologist I've ever had. Highly recommended." }
];

export default function Home() {
  return (
    <main className={clsx('min-h-screen', 'bg-white')}>
      {/* Navigation */}
      <nav className={clsx('fixed', 'top-0', 'left-0', 'right-0', 'bg-white/95', 'backdrop-blur-sm', 'z-50', 'border-b', 'border-slate-200', 'animate-fade-in')}>
        <div className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'py-4')}>
          <div className={clsx('flex', 'items-center', 'justify-between')}>
            <div className={clsx('flex', 'items-center', 'gap-3')}>
              <div className={clsx('w-10', 'h-10', 'bg-teal-600', 'rounded-lg', 'flex', 'items-center', 'justify-center')}>
                <svg className={clsx('w-6', 'h-6', 'text-white')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className={clsx('font-semibold', 'text-slate-800', 'block')}>Dr. Michael Chen</span>
                <span className={clsx('text-xs', 'text-slate-500')}>MD, FACC</span>
              </div>
            </div>
            <div className={clsx('hidden', 'md:flex', 'items-center', 'gap-8')}>
              <a href="#about" className={clsx('text-slate-600', 'hover:text-teal-600', 'transition-colors', 'text-sm', 'font-medium')}>About</a>
              <a href="#services" className={clsx('text-slate-600', 'hover:text-teal-600', 'transition-colors', 'text-sm', 'font-medium')}>Services</a>
              <a href="#experience" className={clsx('text-slate-600', 'hover:text-teal-600', 'transition-colors', 'text-sm', 'font-medium')}>Experience</a>
              <a href="#testimonials" className={clsx('text-slate-600', 'hover:text-teal-600', 'transition-colors', 'text-sm', 'font-medium')}>Testimonials</a>
              <a href="#contact" className={clsx('bg-teal-600', 'text-white', 'px-5', 'py-2', 'rounded-full', 'text-sm', 'font-medium', 'hover:bg-teal-700', 'transition-colors')}>Book Appointment</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={clsx('pt-32', 'pb-20', 'px-6', 'bg-gradient-to-br', 'from-slate-50', 'via-white', 'to-teal-50', 'relative', 'overflow-hidden')}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Medical Cross */}
          <div className={clsx('absolute top-20 left-10 w-16 h-16 opacity-10 animate-float', 'delay-300')}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-teal-600">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
            </svg>
          </div>
          {/* Floating Heart */}
          <div className={clsx('absolute top-40 right-20 w-12 h-12 opacity-10 animate-float', 'delay-500')}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-teal-600">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          {/* Floating Circle Pulse */}
          <div className={clsx('absolute bottom-40 left-20 w-20 h-20 rounded-full border-4 border-teal-200 opacity-20 animate-ping', 'delay-700')} />
          {/* Animated Gradient Orb */}
          <div className={clsx('absolute -top-20 -right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-pulse-soft')} />
          <div className={clsx('absolute -bottom-20 -left-20 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse-soft', 'delay-500')} />
        </div>

        <div className={clsx('max-w-7xl', 'mx-auto', 'relative', 'z-10')}>
          <div className={clsx('grid', 'md:grid-cols-2', 'gap-16', 'items-center')}>
            <div>
              <div className={clsx('inline-flex', 'items-center', 'gap-2', 'bg-teal-100', 'text-teal-700', 'px-4', 'py-2', 'rounded-full', 'text-sm', 'font-medium', 'mb-6', 'animate-fade-in-up')}>
                <span className={clsx('w-2', 'h-2', 'bg-teal-600', 'rounded-full')}></span>
                Board Certified Cardiologist
              </div>
              <h1 className={clsx('text-5xl', 'md:text-6xl', 'font-bold', 'text-slate-900', 'mb-6', 'leading-tight', 'animate-fade-in-up', 'delay-100')}>
                Your Heart Health <span className="text-teal-600">Comes First</span>
              </h1>
              <p className={clsx('text-xl', 'text-slate-600', 'mb-8', 'leading-relaxed', 'animate-fade-in-up', 'delay-200')}>
                Dr. Michael Chen is a fellowship-trained interventional cardiologist with 15+ years of experience providing exceptional cardiac care in New York City.
              </p>
              <div className={clsx('flex', 'flex-wrap', 'gap-4')}>
                <a href="#contact" className={clsx('bg-teal-600', 'text-white', 'px-8', 'py-4', 'rounded-full', 'font-semibold', 'hover:bg-teal-700', 'transition-all', 'duration-300', 'inline-flex', 'items-center', 'gap-2', 'animate-fade-in-up', 'delay-300', 'hover:scale-105', 'hover:shadow-lg', 'hover:shadow-teal-600/25', 'group')}>
                  Schedule Consultation
                  <svg className={clsx('w-5', 'h-5', 'group-hover:translate-x-1', 'transition-transform')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#services" className={clsx('border-2', 'border-slate-300', 'text-slate-700', 'px-8', 'py-4', 'rounded-full', 'font-semibold', 'hover:border-teal-600', 'hover:text-teal-600', 'transition-all', 'duration-300', 'animate-fade-in-up', 'delay-400', 'hover:scale-105')}>
                  Our Services
                </a>
              </div>
            </div>
            <div className={clsx('relative', 'animate-slide-in-right', 'delay-200')}>
              {/* Pulsing Rings */}
              <div className={clsx('absolute', 'inset-0', 'flex', 'items-center', 'justify-center')}>
                <div className={clsx('w-96', 'h-96', 'rounded-full', 'border-2', 'border-teal-300/30', 'animate-ping', 'delay-300')} />
              </div>
              <div className={clsx('absolute', 'inset-0', 'flex', 'items-center', 'justify-center')}>
                <div className={clsx('w-88', 'h-88', 'rounded-full', 'border', 'border-teal-400/20', 'animate-pulse-soft')} />
              </div>
              
              {/* Main Profile Container */}
              <div className={clsx('w-80', 'h-80', 'md:w-96', 'md:h-96', 'mx-auto', 'bg-gradient-to-br', 'from-teal-100', 'to-teal-200', 'rounded-full', 'flex', 'items-center', 'justify-center', 'p-4', 'relative', 'animate-float', 'delay-200')}>
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
                  alt="Dr. Michael Chen"
                  className={clsx('w-64', 'h-64', 'md:w-80', 'md:h-80', 'rounded-full', 'shadow-2xl', 'object-cover', 'border-4', 'border-white', 'hover:scale-105', 'transition-transform', 'duration-500')}
                />
              </div>
              
              {/* Floating Decorative Icons */}
              <div className={clsx('absolute', '-top-4', '-right-4', 'w-12', 'h-12', 'bg-white', 'rounded-full', 'shadow-lg', 'flex', 'items-center', 'justify-center', 'animate-float', 'delay-300')}>
                <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div className={clsx('absolute', 'top-1/4', '-left-6', 'w-10', 'h-10', 'bg-teal-600', 'rounded-full', 'shadow-lg', 'flex', 'items-center', 'justify-center', 'animate-float', 'delay-500')}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              
              {/* Stats Badge */}
              <div className={clsx('absolute', '-bottom-4', 'left-1/2', 'transform', '-translate-x-1/2', 'bg-white', 'px-6', 'py-3', 'rounded-2xl', 'shadow-xl', 'animate-float', 'delay-100')}>
                <div className={clsx('flex', 'items-center', 'gap-3')}>
                  <div className={clsx('flex', '-space-x-2')}>
                    {[1,2,3].map(i => (
                      <div key={i} className={clsx('w-8', 'h-8', 'bg-teal-500', 'rounded-full', 'border-2', 'border-white')}></div>
                    ))}
                  </div>
                  <div>
                    <p className={clsx('font-semibold', 'text-slate-900')}>2,500+</p>
                    <p className={clsx('text-sm', 'text-slate-500')}>Patients Treated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={clsx('grid', 'grid-cols-2', 'md:grid-cols-4', 'gap-6', 'mt-20')}>
            {[
              { value: "15+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: "2,500+", label: "Patients Treated", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { value: "99%", label: "Success Rate", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: "50+", label: "Research Papers", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }
            ].map((stat, i) => (
              <div key={i} className={clsx('bg-white', 'p-6', 'rounded-2xl', 'shadow-lg', 'border', 'border-slate-100', 'text-center', 'animate-fade-in-up', 'hover:scale-110', 'hover:shadow-xl', 'hover:shadow-teal-600/10', 'hover:border-teal-300', 'transition-all', 'duration-300', 'group', 'cursor-pointer')} style={{animationDelay: `${i * 0.15}s`}}>
                <div className={clsx('w-12', 'h-12', 'mx-auto', 'mb-3', 'bg-teal-100', 'rounded-xl', 'flex', 'items-center', 'justify-center', 'group-hover:bg-teal-600', 'transition-colors', 'duration-300')}>
                  <svg className={clsx('w-6', 'h-6', 'text-teal-600', 'group-hover:text-white', 'transition-colors')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <p className={clsx('text-3xl', 'font-bold', 'text-teal-600', 'mb-1', 'group-hover:scale-110', 'transition-transform', 'duration-300')}>{stat.value}</p>
                <p className={clsx('text-slate-600', 'text-sm', 'group-hover:text-slate-800', 'transition-colors')}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={clsx('py-24', 'px-6')}>
        <div className={clsx('max-w-7xl', 'mx-auto')}>
          <div className={clsx('grid', 'md:grid-cols-2', 'gap-16', 'items-center')}>
            <div className={clsx('bg-gradient-to-br', 'from-slate-100', 'to-slate-200', 'rounded-3xl', 'p-12', 'animate-slide-in-left')}>
              <div className="space-y-6">
                <div className={clsx('bg-white', 'p-6', 'rounded-2xl', 'shadow-lg', 'hover:shadow-xl', 'hover:shadow-teal-600/10', 'hover:-translate-y-1', 'transition-all', 'duration-300', 'group', 'cursor-pointer', 'animate-fade-in-up')} style={{animationDelay: '0.1s'}}>
                  <div className={clsx('flex', 'items-start', 'gap-4')}>
                    <div className={clsx('w-12', 'h-12', 'bg-teal-100', 'rounded-xl', 'flex', 'items-center', 'justify-center', 'flex-shrink-0', 'group-hover:bg-teal-600', 'transition-colors', 'duration-300')}>
                      <svg className={clsx('w-6', 'h-6', 'text-teal-600', 'group-hover:text-white', 'transition-colors')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={clsx('font-semibold', 'text-slate-900', 'mb-1', 'group-hover:text-teal-600', 'transition-colors')}>Board Certified</h4>
                      <p className={clsx('text-slate-600', 'text-sm')}>American Board of Internal Medicine</p>
                    </div>
                  </div>
                </div>
                <div className={clsx('bg-white', 'p-6', 'rounded-2xl', 'shadow-lg', 'hover:shadow-xl', 'hover:shadow-teal-600/10', 'hover:-translate-y-1', 'transition-all', 'duration-300', 'group', 'cursor-pointer', 'animate-fade-in-up')} style={{animationDelay: '0.2s'}}>
                  <div className={clsx('flex', 'items-start', 'gap-4')}>
                    <div className={clsx('w-12', 'h-12', 'bg-teal-100', 'rounded-xl', 'flex', 'items-center', 'justify-center', 'flex-shrink-0', 'group-hover:bg-teal-600', 'transition-colors', 'duration-300')}>
                      <svg className={clsx('w-6', 'h-6', 'text-teal-600', 'group-hover:text-white', 'transition-colors')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={clsx('font-semibold', 'text-slate-900', 'mb-1', 'group-hover:text-teal-600', 'transition-colors')}>Top Hospital</h4>
                      <p className={clsx('text-slate-600', 'text-sm')}>NYC Cardiac Center</p>
                    </div>
                  </div>
                </div>
                <div className={clsx('bg-white', 'p-6', 'rounded-2xl', 'shadow-lg', 'hover:shadow-xl', 'hover:shadow-teal-600/10', 'hover:-translate-y-1', 'transition-all', 'duration-300', 'group', 'cursor-pointer', 'animate-fade-in-up')} style={{animationDelay: '0.3s'}}>
                  <div className={clsx('flex', 'items-start', 'gap-4')}>
                    <div className={clsx('w-12', 'h-12', 'bg-teal-100', 'rounded-xl', 'flex', 'items-center', 'justify-center', 'flex-shrink-0', 'group-hover:bg-teal-600', 'transition-colors', 'duration-300')}>
                      <svg className={clsx('w-6', 'h-6', 'text-teal-600', 'group-hover:text-white', 'transition-colors')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={clsx('font-semibold', 'text-slate-900', 'mb-1', 'group-hover:text-teal-600', 'transition-colors')}>Published Researcher</h4>
                      <p className={clsx('text-slate-600', 'text-sm')}>50+ peer-reviewed publications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <span className={clsx('text-teal-600', 'font-semibold', 'text-sm', 'uppercase', 'tracking-wider')}>About Dr. Chen</span>
              <h2 className={clsx('text-4xl', 'font-bold', 'text-slate-900', 'mt-4', 'mb-6')}>Leading Cardiac Care With Compassion & Excellence</h2>
              <p className={clsx('text-slate-600', 'leading-relaxed', 'mb-6')}>
                Dr. Michael Chen brings over 15 years of specialized experience in interventional cardiology. 
                His approach combines cutting-edge medical technology with deeply personalized, compassionate care 
                that puts patients at ease while delivering world-class treatment outcomes.
              </p>
              <p className={clsx('text-slate-600', 'leading-relaxed', 'mb-8')}>
                He completed his fellowship at the prestigious Cleveland Clinic and has been recognized with 
                numerous awards for clinical excellence. His research has contributed to advancing cardiac care 
                protocols used in hospitals nationwide.
              </p>
              <div className={clsx('flex', 'flex-wrap', 'gap-4')}>
                <span className={clsx('bg-slate-100', 'text-slate-700', 'px-4', 'py-2', 'rounded-full', 'text-sm', 'font-medium', 'hover:bg-teal-600', 'hover:text-white', 'hover:scale-110', 'transition-all', 'duration-300', 'cursor-pointer', 'animate-fade-in-up')} style={{animationDelay: '0.1s'}}>Interventional Cardiology</span>
                <span className={clsx('bg-slate-100', 'text-slate-700', 'px-4', 'py-2', 'rounded-full', 'text-sm', 'font-medium', 'hover:bg-teal-600', 'hover:text-white', 'hover:scale-110', 'transition-all', 'duration-300', 'cursor-pointer', 'animate-fade-in-up')} style={{animationDelay: '0.2s'}}>Heart Failure</span>
                <span className={clsx('bg-slate-100', 'text-slate-700', 'px-4', 'py-2', 'rounded-full', 'text-sm', 'font-medium', 'hover:bg-teal-600', 'hover:text-white', 'hover:scale-110', 'transition-all', 'duration-300', 'cursor-pointer', 'animate-fade-in-up')} style={{animationDelay: '0.3s'}}>Preventive Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={clsx('py-24', 'px-6', 'bg-slate-50')}>
        <div className={clsx('max-w-7xl', 'mx-auto')}>
          <div className={clsx('text-center', 'mb-16', 'animate-fade-in-up')}>
            <span className={clsx('text-teal-600', 'font-semibold', 'text-sm', 'uppercase', 'tracking-wider')}>Our Services</span>
            <h2 className={clsx('text-4xl', 'font-bold', 'text-slate-900', 'mt-4')}>Comprehensive Cardiac Care</h2>
            <p className={clsx('text-slate-600', 'mt-4', 'max-w-2xl', 'mx-auto')}>
              From preventive screenings to complex interventional procedures, we offer a full spectrum of cardiac services.
            </p>
          </div>
          <div className={clsx('grid', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8')}>
            {services.map((service, i) => (
              <div key={i} className={clsx('bg-white', 'p-8', 'rounded-2xl', 'shadow-lg', 'hover:shadow-2xl', 'hover:shadow-teal-600/20', 'transition-all', 'duration-500', 'group', 'animate-fade-in-up', 'hover:-translate-y-3', 'cursor-pointer', 'border', 'border-transparent', 'hover:border-teal-200')} style={{animationDelay: `${i * 0.1}s`}}>
                <div className={clsx('w-14', 'h-14', 'bg-slate-100', 'rounded-2xl', 'flex', 'items-center', 'justify-center', 'mb-6', 'group-hover:bg-teal-600', 'group-hover:scale-110', 'group-hover:rotate-3', 'transition-all', 'duration-500', 'shadow-md', 'group-hover:shadow-lg')}>
                  <svg className={clsx('w-7', 'h-7', 'text-slate-600', 'group-hover:text-white', 'transition-colors', 'duration-300')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className={clsx('text-xl', 'font-semibold', 'text-slate-900', 'mb-3', 'group-hover:text-teal-600', 'transition-colors', 'duration-300')}>{service.title}</h3>
                <p className={clsx('text-slate-600', 'group-hover:text-slate-700', 'transition-colors', 'duration-300')}>{service.desc}</p>
                <div className={clsx('mt-4', 'flex', 'items-center', 'gap-2', 'text-teal-600', 'font-medium', 'text-sm', 'opacity-0', 'group-hover:opacity-100', 'transform', 'translate-x-[-10px]', 'group-hover:translate-x-0', 'transition-all', 'duration-300')}>
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={clsx('py-24', 'px-6')}>
        <div className={clsx('max-w-7xl', 'mx-auto')}>
          <div className={clsx('text-center', 'mb-16', 'animate-fade-in-up')}>
            <span className={clsx('text-teal-600', 'font-semibold', 'text-sm', 'uppercase', 'tracking-wider')}>Education & Experience</span>
            <h2 className={clsx('text-4xl', 'font-bold', 'text-slate-900', 'mt-4')}>A Legacy of Excellence</h2>
          </div>
          <div className={clsx('max-w-4xl', 'mx-auto')}>
            {education.map((edu, i) => (
              <div key={i} className={clsx('flex', 'gap-8', 'mb-12', 'last:mb-0', 'animate-fade-in-up', 'group', 'cursor-pointer')} style={{animationDelay: `${i * 0.15}s`}}>
                <div className={clsx('flex', 'flex-col', 'items-center')}>
                  <div className={clsx('w-4', 'h-4', 'bg-teal-600', 'rounded-full', 'group-hover:scale-150', 'group-hover:shadow-lg', 'group-hover:shadow-teal-600/50', 'transition-all', 'duration-300', 'relative')}>
                    <div className={clsx('absolute', 'inset-0', 'bg-teal-400', 'rounded-full', 'animate-ping', 'opacity-0', 'group-hover:opacity-75')}></div>
                  </div>
                  {i !== education.length - 1 && <div className={clsx('w-0.5', 'flex-1', 'bg-slate-200', 'mt-2', 'group-hover:bg-teal-400', 'transition-colors', 'duration-300')}></div>}
                </div>
                <div className={clsx('flex-1', 'pb-12', 'group-hover:translate-x-2', 'transition-transform', 'duration-300')}>
                  <span className={clsx('text-teal-600', 'font-semibold', 'text-sm', 'inline-block', 'group-hover:scale-110', 'transition-transform')}>{edu.year}</span>
                  <h3 className={clsx('text-xl', 'font-semibold', 'text-slate-900', 'mt-1', 'group-hover:text-teal-600', 'transition-colors')}>{edu.title}</h3>
                  <p className={clsx('text-slate-700', 'font-medium')}>{edu.place}</p>
                  <p className={clsx('text-slate-500', 'mt-2')}>{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={clsx('py-24', 'px-6', 'bg-gradient-to-br', 'from-teal-600', 'to-teal-800')}>
        <div className={clsx('max-w-7xl', 'mx-auto')}>
          <div className={clsx('text-center', 'mb-16', 'animate-fade-in-up')}>
            <span className={clsx('text-teal-200', 'font-semibold', 'text-sm', 'uppercase', 'tracking-wider')}>Testimonials</span>
            <h2 className={clsx('text-4xl', 'font-bold', 'text-white', 'mt-4')}>What Patients Say</h2>
          </div>
          <div className={clsx('grid', 'md:grid-cols-3', 'gap-8')}>
            {testimonials.map((t, i) => (
              <div key={i} className={clsx('bg-white/10', 'backdrop-blur-sm', 'p-8', 'rounded-2xl', 'animate-fade-in-up', 'hover:bg-white/20', 'hover:scale-105', 'hover:shadow-2xl', 'transition-all', 'duration-500', 'group', 'cursor-pointer', 'border', 'border-white/10', 'hover:border-white/30')} style={{animationDelay: `${i * 0.15}s`}}>
                <div className={clsx('flex', 'gap-1', 'mb-4')}>
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className={clsx('w-5', 'h-5', 'text-yellow-400', 'fill-current', 'group-hover:scale-110', 'transition-transform', 'duration-300')} style={{animationDelay: `${s * 0.05}s`}} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={clsx('text-white/90', 'mb-6', 'italic', 'group-hover:text-white', 'transition-colors', 'duration-300')}>"{t.text}"</p>
                <p className={clsx('text-white', 'font-semibold', 'group-hover:text-teal-200', 'transition-colors')}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={clsx('py-24', 'px-6')}>
        <div className={clsx('max-w-7xl', 'mx-auto')}>
          <div className={clsx('grid', 'md:grid-cols-2', 'gap-16')}>
            <div className="animate-slide-in-left">
              <span className={clsx('text-teal-600', 'font-semibold', 'text-sm', 'uppercase', 'tracking-wider')}>Get In Touch</span>
              <h2 className={clsx('text-4xl', 'font-bold', 'text-slate-900', 'mt-4', 'mb-6')}>Schedule Your Consultation</h2>
              <p className={clsx('text-slate-600', 'mb-8')}>
                Take the first step toward better heart health. Schedule a consultation with Dr. Chen today.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", label: "Phone", value: "(212) 555-0123" },
                  { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", value: "appointments@drmichaelchen.md" },
                  { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Address", value: "123 Medical Center Drive, New York, NY 10021" },
                  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Office Hours", value: "Mon - Fri: 8:00 AM - 6:00 PM" }
                ].map((item, i) => (
                  <div key={i} className={clsx('flex', 'items-center', 'gap-4', 'group', 'cursor-pointer', 'p-3', 'rounded-xl', 'hover:bg-slate-50', 'transition-all', 'duration-300', 'animate-fade-in-up')} style={{animationDelay: `${i * 0.1}s`}}>
                    <div className={clsx('w-12', 'h-12', 'bg-teal-100', 'rounded-xl', 'flex', 'items-center', 'justify-center', 'group-hover:bg-teal-600', 'group-hover:scale-110', 'transition-all', 'duration-300', 'shadow-sm', 'group-hover:shadow-md')}>
                      <svg className={clsx('w-6', 'h-6', 'text-teal-600', 'group-hover:text-white', 'transition-colors')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                      <p className={clsx('text-sm', 'text-slate-500')}>{item.label}</p>
                      <p className={clsx('font-semibold', 'text-slate-900', 'group-hover:text-teal-600', 'transition-colors')}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={clsx('bg-slate-50', 'p-8', 'rounded-3xl', 'animate-slide-in-right', 'relative', 'overflow-hidden')}>
              {/* Decorative background */}
              <div className={clsx('absolute', '-top-20', '-right-20', 'w-40', 'h-40', 'bg-teal-200/30', 'rounded-full', 'blur-2xl')} />
              <div className={clsx('absolute', '-bottom-20', '-left-20', 'w-40', 'h-40', 'bg-teal-300/20', 'rounded-full', 'blur-2xl')} />
              
              <form className={clsx('space-y-6', 'relative', 'z-10')}>
                <div className={clsx('grid', 'md:grid-cols-2', 'gap-6')}>
                  <div className={clsx('relative', 'group')}>
                    <input type="text" placeholder="First Name" className={clsx('w-full', 'px-4', 'py-3', 'rounded-xl', 'border', 'border-slate-200', 'focus:border-teal-500', 'focus:ring-2', 'focus:ring-teal-200', 'outline-none', 'transition-all', 'duration-300', 'hover:border-teal-300', 'bg-white/80', 'backdrop-blur-sm')} />
                    <div className={clsx('absolute', 'bottom-0', 'left-0', 'h-0.5', 'bg-teal-600', 'transition-all', 'duration-500', 'w-0', 'group-focus-within:w-full')} />
                  </div>
                  <div className={clsx('relative', 'group')}>
                    <input type="text" placeholder="Last Name" className={clsx('w-full', 'px-4', 'py-3', 'rounded-xl', 'border', 'border-slate-200', 'focus:border-teal-500', 'focus:ring-2', 'focus:ring-teal-200', 'outline-none', 'transition-all', 'duration-300', 'hover:border-teal-300', 'bg-white/80', 'backdrop-blur-sm')} />
                    <div className={clsx('absolute', 'bottom-0', 'left-0', 'h-0.5', 'bg-teal-600', 'transition-all', 'duration-500', 'w-0', 'group-focus-within:w-full')} />
                  </div>
                </div>
                <div className={clsx('relative', 'group')}>
                  <input type="email" placeholder="Email Address" className={clsx('w-full', 'px-4', 'py-3', 'rounded-xl', 'border', 'border-slate-200', 'focus:border-teal-500', 'focus:ring-2', 'focus:ring-teal-200', 'outline-none', 'transition-all', 'duration-300', 'hover:border-teal-300', 'bg-white/80', 'backdrop-blur-sm')} />
                  <div className={clsx('absolute', 'bottom-0', 'left-0', 'h-0.5', 'bg-teal-600', 'transition-all', 'duration-500', 'w-0', 'group-focus-within:w-full')} />
                </div>
                <div className={clsx('relative', 'group')}>
                  <input type="tel" placeholder="Phone Number" className={clsx('w-full', 'px-4', 'py-3', 'rounded-xl', 'border', 'border-slate-200', 'focus:border-teal-500', 'focus:ring-2', 'focus:ring-teal-200', 'outline-none', 'transition-all', 'duration-300', 'hover:border-teal-300', 'bg-white/80', 'backdrop-blur-sm')} />
                  <div className={clsx('absolute', 'bottom-0', 'left-0', 'h-0.5', 'bg-teal-600', 'transition-all', 'duration-500', 'w-0', 'group-focus-within:w-full')} />
                </div>
                <div className={clsx('relative', 'group')}>
                  <textarea placeholder="Your Message" rows={4} className={clsx('w-full', 'px-4', 'py-3', 'rounded-xl', 'border', 'border-slate-200', 'focus:border-teal-500', 'focus:ring-2', 'focus:ring-teal-200', 'outline-none', 'transition-all', 'duration-300', 'resize-none', 'hover:border-teal-300', 'bg-white/80', 'backdrop-blur-sm')}></textarea>
                </div>
                <button type="submit" className={clsx('w-full', 'bg-teal-600', 'text-white', 'py-4', 'rounded-xl', 'font-semibold', 'hover:bg-teal-700', 'transition-all', 'duration-300', 'hover:shadow-lg', 'hover:shadow-teal-600/30', 'hover:scale-[1.02]', 'active:scale-[0.98]', 'relative', 'overflow-hidden', 'group')}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={clsx('bg-slate-900', 'text-slate-400', 'py-12', 'px-6')}>
        <div className={clsx('max-w-7xl', 'mx-auto')}>
          <div className={clsx('flex', 'flex-col', 'md:flex-row', 'justify-between', 'items-center', 'gap-6')}>
            <div className={clsx('flex', 'items-center', 'gap-3')}>
              <div className={clsx('w-10', 'h-10', 'bg-teal-600', 'rounded-lg', 'flex', 'items-center', 'justify-center')}>
                <svg className={clsx('w-6', 'h-6', 'text-white')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
              <span className={clsx('font-semibold', 'text-white', 'block')}>Dr. Michael Chen</span>
              <span className={clsx('text-xs', 'text-slate-400')}>MD, FACC</span>
            </div>
            </div>
            <p className="text-sm">© 2024 Dr. Michael Chen, MD, FACC. All rights reserved.</p>
            <div className={clsx('flex', 'gap-6')}>
              <a href="#" className={clsx('hover:text-white', 'transition-all', 'duration-300', 'hover:-translate-y-1')}>Privacy</a>
              <a href="#" className={clsx('hover:text-white', 'transition-all', 'duration-300', 'hover:-translate-y-1')}>Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
