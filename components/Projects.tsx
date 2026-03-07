'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Nexus Dashboard',
      description: 'Enterprise analytics platform with real-time data visualization and AI-powered insights.',
      tags: ['Next.js', 'TypeScript', 'D3.js', 'AWS'],
      color: 'from-blue-500 to-cyan-500',
      year: '2024',
    },
    {
      title: 'Quantum E-Commerce',
      description: 'Headless e-commerce solution with sub-100ms page loads and seamless checkout experience.',
      tags: ['React', 'Node.js', 'Stripe', 'Redis'],
      color: 'from-purple-500 to-pink-500',
      year: '2024',
    },
    {
      title: 'Neural Chat',
      description: 'AI-powered customer support platform with natural language processing capabilities.',
      tags: ['Python', 'FastAPI', 'OpenAI', 'WebSocket'],
      color: 'from-emerald-500 to-teal-500',
      year: '2023',
    },
    {
      title: 'CryptoVault',
      description: 'Secure cryptocurrency portfolio tracker with real-time market data and analytics.',
      tags: ['Vue.js', 'GraphQL', 'PostgreSQL', 'Docker'],
      color: 'from-orange-500 to-red-500',
      year: '2023',
    },
    {
      title: 'MediCare+',
      description: 'Telemedicine platform connecting patients with healthcare providers worldwide.',
      tags: ['React Native', 'Firebase', 'WebRTC', 'HIPAA'],
      color: 'from-rose-500 to-red-500',
      year: '2023',
    },
    {
      title: 'DevFlow',
      description: 'Developer productivity suite with integrated CI/CD pipelines and code review tools.',
      tags: ['Go', 'React', 'Kubernetes', 'gRPC'],
      color: 'from-indigo-500 to-violet-500',
      year: '2022',
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.project-card',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="relative py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-indigo-400 text-sm mb-4 tracking-widest uppercase">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
            Projects That Define My Journey
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Placeholder with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-4xl">◈</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-zinc-500">{project.year}</span>
                  <button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                    <svg className="w-4 h-4 text-zinc-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>

                <h3 className="text-xl font-semibold text-zinc-100 mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-zinc-500 bg-zinc-800/50 rounded-full border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 border border-zinc-700 hover:border-indigo-500/50 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-zinc-800/50 group">
            View All Projects
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
