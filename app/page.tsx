'use client';
import { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Cursor from '../components/Cursor';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      <div ref={cursorRef} className="fixed w-6 h-6 rounded-full border border-indigo-500/50 pointer-events-none z-[9999] mix-blend-difference" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-800/50">
        <p className="font-mono">© 2024 Alex Chen. Crafted with passion.</p>
      </footer>
    </div>
  );
}
