'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Lottie from 'lottie-react';
import heroLottie from '../public/hero-lottie.json';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const experiences = [
  {
    role: 'IT Specialist',
    company: 'National Law University (NUSRL), Ranchi',
    period: 'August 2024 – Present',
    summary: 'Spearheading the Samarth E-governance suite as Nodal Officer. Organized workshop on Data Security Awareness. Coordinating ERP implementations with external vendors. Managing IT procurement and infrastructure.',
  },
  {
    role: 'Project Associate (IT)',
    company: 'Institute of Pesticide Formulation Technology (IPFT)',
    period: 'April 2024 – August 2024',
    summary: 'Administered GLP lab IT systems. Ensured compliance with technical standards. Supported vendor coordination and IT procurement.',
  },
  {
    role: 'Graduate Apprentice Trainee (GAT)',
    company: 'Central Coalfields Limited (CCL)',
    period: 'November 2020 – November 2021',
    summary: 'Executed IT infrastructure development projects. Supported procurement of hardware and networking equipment. Worked on Oracle Server (PL-SQL).',
  },
];

const skills = [
  {
    name: 'Network Management',
    description: 'Infrastructure Support, Systems Integration, Hardware Maintenance.',
  },
  {
    name: 'Web & Systems',
    description: 'E-governance Suite Management, ERP Implementation, Cloud-Hosted Systems.',
  },
  {
    name: 'Cyber Security & Operations',
    description: 'Data Security Protocols, IT Procurement, Tender Management, Vendor Coordination.',
  },
];

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState('about');
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    const ids = sections.map((section) => section.id);
    const sectionElements = ids.map((id) => document.getElementById(id));

    const updateActive = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.25;
      const found = sectionElements
        .filter(Boolean)
        .find((section) => {
          const rect = section!.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          return scrollY >= top;
        });
      setActiveSection(found?.id ?? 'about');

      const experience = document.getElementById('experience');
      if (experience) {
        const rect = experience.getBoundingClientRect();
        const progress = Math.min(Math.max((window.innerHeight - rect.top) / (rect.height + window.innerHeight / 2), 0), 1);
        setTimelineProgress(progress);
      }
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, []);

  const sectionMotion = {
    initial: { opacity: 0, y: 24, filter: 'blur(12px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <div className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-300/80">PSJ</div>
          <nav className="relative flex gap-6 text-sm text-slate-300">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`transition duration-300 ${activeSection === section.id ? 'text-slate-50' : 'hover:text-slate-100'}`}
              >
                {section.label}
              </a>
            ))}
            <motion.span
              className="absolute bottom-0 h-0.5 w-20 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
              animate={{ x: sections.findIndex((section) => section.id === activeSection) * 96 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22, duration: reduceMotion ? 0 : 0.45 }}
            />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8">
        <motion.section
          id="about"
          className="relative overflow-hidden rounded-[32px] border border-slate-500/20 bg-slate-900/80 p-8 shadow-soft backdrop-blur-2xl sm:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <motion.div
              {...(reduceMotion ? {} : sectionMotion)}
              className="space-y-6"
            >
              <div className="inline-flex items-center rounded-full bg-slate-800/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-300/90 shadow-sm shadow-sky-500/10">
                IT Professional
              </div>
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-300/70">Hello, I’m Pratap</p>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Dedicated IT professional building secure and efficient systems.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  With a B.Tech in Computer Science and over three years of experience, I specialize in network infrastructure, e-governance platforms, and cyber security. Focused on government sector opportunities, I excel in vendor coordination and ERP implementation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950">
                  Contact me
                </a>
                <a href="#experience" className="inline-flex items-center justify-center rounded-full border border-slate-700/80 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950">
                  View experience
                </a>
              </div>
            </motion.div>

            <motion.div
              {...(reduceMotion ? {} : {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.9, ease: 'easeOut', delay: 0.15 },
              })}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-4 shadow-soft"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(94,234,212,0.12),transparent_24%)]" />
              <div className="relative flex min-h-[320px] items-center justify-center">
                <div className="w-full max-w-xs rounded-3xl bg-slate-900/90 p-6 shadow-xl shadow-slate-950/40">
                  <div className="mb-4 text-sm uppercase tracking-[0.24em] text-sky-300/80">Stronger hiring</div>
                  <div className="mb-6 h-72 overflow-hidden rounded-3xl bg-slate-950">
                    <Lottie animationData={heroLottie} loop autoplay className="h-full w-full" />
                  </div>
                  <p className="text-sm leading-6 text-slate-300">
                    A thoughtful and polished brand voice with motion that supports clarity and trust.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="mt-16 rounded-[32px] border border-slate-500/20 bg-slate-900/80 p-8 shadow-soft backdrop-blur-2xl sm:p-12"
          {...(reduceMotion ? {} : sectionMotion)}
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.5fr] lg:items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-sky-300/80">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                <p className="text-sm uppercase tracking-[0.3em]">Experience</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Career milestones with subtle motion.
                </h2>
                <p className="max-w-2xl text-slate-300/90 leading-8">
                  A concise timeline that displays progress, clarity, and steady forward momentum for leadership hiring and team growth.
                </p>
              </div>
            </div>

            <div className="relative rounded-[28px] border border-slate-700/60 bg-slate-950/90 p-6 shadow-soft">
              <div className="absolute inset-y-6 left-8 w-0.5 bg-slate-700/70" />
              <motion.div
                className="absolute left-8 top-6 w-0.5 origin-top rounded-full bg-sky-400"
                style={{ height: `${timelineProgress * 100}%` }}
                transition={{ ease: 'easeOut', duration: 0.6 }}
              />
              <div className="space-y-8">
                {experiences.map((item, index) => (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-3 top-2 h-4 w-4 rounded-full border-2 border-slate-200 bg-slate-950" />
                    <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">{item.period}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                    <p className="text-sm font-medium text-slate-300/90">{item.company}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300/80">{item.summary}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="mt-16 space-y-8"
          {...(reduceMotion ? {} : sectionMotion)}
        >
          <div className="rounded-[32px] border border-slate-500/20 bg-slate-900/80 p-8 shadow-soft backdrop-blur-2xl sm:p-12">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80">Skills</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Core competencies that drive my work.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group rounded-[28px] border border-slate-700/70 bg-slate-950/90 p-6 shadow-soft transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                whileHover={reduceMotion ? undefined : { y: -3, rotate: [0, 0.3, 0] }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                    Expertise
                  </span>
                  <div className="h-10 w-10 rounded-2xl bg-slate-800/90 ring-1 ring-white/5" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{skill.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300/85">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="mt-16 rounded-[32px] border border-slate-500/20 bg-slate-900/80 p-8 shadow-soft backdrop-blur-2xl sm:p-12"
          {...(reduceMotion ? {} : sectionMotion)}
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.5fr] lg:items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-sky-300/80">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                <p className="text-sm uppercase tracking-[0.3em]">Education</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Academic foundation and continuous learning.
                </h2>
                <p className="max-w-2xl text-slate-300/90 leading-8">
                  Committed to ongoing professional development and organizational growth.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-700/60 bg-slate-950/90 p-6 shadow-soft">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">Degree</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">B.Tech in Computer Science and Engineering</h3>
                  <p className="text-sm font-medium text-slate-300/90">Aryabhatta Knowledge University</p>
                  <p className="text-sm text-slate-300/80">2019</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">Languages</p>
                  <p className="mt-2 text-sm text-slate-300/90">Fluent in English and Hindi</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="mt-16 rounded-[32px] border border-slate-500/20 bg-slate-900/80 p-8 shadow-soft backdrop-blur-2xl sm:p-12"
          {...(reduceMotion ? {} : sectionMotion)}
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80">Contact</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let’s connect for IT opportunities.
              </h2>
              <p className="max-w-xl text-slate-300/90 leading-8">
                Reach out to discuss network infrastructure, e-governance, or cyber security roles. I’m focused on government sector positions and continuous professional growth.
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:pratapshekhar@rocketmail.com"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  pratapshekhar@rocketmail.com
                </a>
                <p className="text-sm text-slate-300/80">Mobile: 9128141303</p>
                <p className="text-sm text-slate-300/80">Jagatpuram, Kanke, Ranchi, Jharkhand</p>
              </div>
            </div>

            <motion.div
              className="rounded-[32px] border border-slate-700/70 bg-slate-950/95 p-6 shadow-soft"
              {...(reduceMotion ? {} : {
                initial: { opacity: 0, scale: 0.98 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.7 },
              })}
            >
              <div className="mb-6 rounded-3xl bg-slate-900/90 p-5 shadow-inner shadow-slate-950/30">
                <div className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Small motion</div>
                <div className="mt-4 h-64 overflow-hidden rounded-3xl bg-slate-950">
                  <Lottie animationData={heroLottie} loop autoplay className="h-full w-full" />
                </div>
              </div>
              <div className="space-y-4 text-sm text-slate-300/90">
                <p>Available for IT specialist roles in government sector, focusing on network management and cyber security.</p>
                <p>Prefer a reduced-motion experience? Your system preference is detected automatically.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
