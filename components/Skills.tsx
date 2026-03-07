'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '⚡',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Three.js / WebGL', level: 75 },
      ]
    },
    {
      title: 'Backend',
      icon: '🔧',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python / Django', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'GraphQL', level: 82 },
      ]
    },
    {
      title: 'Tools & Cloud',
      icon: '☁️',
      skills: [
        { name: 'AWS / GCP', level: 80 },
        { name: 'Docker / K8s', level: 78 },
        { name: 'Git / CI/CD', level: 92 },
        { name: 'Figma', level: 75 },
      ]
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    skillCategories.forEach((_, catIndex) => {
      gsap.fromTo(`.skill-category-${catIndex}`,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );

      gsap.fromTo(`.skill-bar-${catIndex}`,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          stagger: 0.15,
          scrollTrigger: {
            trigger: `.skill-category-${catIndex}`,
            start: 'top 80%',
          }
        }
      );
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className="relative py-32 px-6 bg-zinc-900/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-indigo-400 text-sm mb-4 tracking-widest uppercase">Skills & Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title}
              className={`skill-category-${catIndex} bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors duration-300`}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-zinc-100">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-300 text-sm">{skill.name}</span>
                      <span className="font-mono text-indigo-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className={`skill-bar-${catIndex} h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full origin-left`}
                        style={{ transform: `scaleX(${skill.level / 100})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
