import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const socialLinks = [
    { name: 'GitHub', icon: '⌘', href: '#' },
    { name: 'LinkedIn', icon: '◈', href: '#' },
    { name: 'Twitter', icon: '◉', href: '#' },
    { name: 'Email', icon: '✉', href: 'mailto:hello@alexchen.dev' },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.contact-content',
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

    gsap.fromTo('.contact-form input, .contact-form textarea, .contact-form button',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
        }
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    gsap.to('.submit-btn', {
      scale: 1.05,
      duration: 0.2,
      yoyo: true,
      repeat: 1
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-6 bg-zinc-900/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div className="contact-content">
            <p className="font-mono text-indigo-400 text-sm mb-4 tracking-widest uppercase">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4 mb-12">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <span className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                    <span className="text-xl text-zinc-400 group-hover:text-white">{link.icon}</span>
                  </span>
                  <div>
                    <p className="font-semibold text-zinc-100">{link.name}</p>
                    <p className="text-sm text-zinc-500">{link.name === 'Email' ? 'hello@alexchen.dev' : `Visit my ${link.name}`}</p>
                  </div>
                  <span className="ml-auto text-zinc-600 group-hover:text-indigo-400 transition-colors">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="submit-btn w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
