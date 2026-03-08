import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.about-card', 
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );

    gsap.fromTo('.about-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        }
      }
    );
  }, []);

  const stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-sans text-indigo-400 text-6xl font-bold mb-4 tracking-widest uppercase">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
            The Developer Behind the Code
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="about-card">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                  I'm a passionate fullstack developer with expertise in building 
                  <span className="text-indigo-400"> scalable web applications</span> and 
                  <span className="text-purple-400"> immersive digital experiences</span>.
                </p>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  My journey began with curiosity about how things work on the web. 
                  Today, I specialize in React, Node.js, Python, and cloud architecture. 
                  I believe in writing clean, maintainable code and creating intuitive user interfaces.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className="about-line bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-indigo-500/30 transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-zinc-400 mt-1">{stat.label}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
