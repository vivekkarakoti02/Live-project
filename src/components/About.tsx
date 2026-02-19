import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://picsum.photos/seed/viraj-about/1920/1080")',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            Designing Spaces. <br />
            <span className="text-[var(--color-accent)] italic font-serif">Building Souls.</span>
          </motion.h1>
          <p className="text-lg text-gray-300">
            At The Viraj, we believe great design isn't just about how a space looks — it's about how it feels.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto space-y-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-4 block">Our Story</span>
            <h2 className="mb-6">Where Passion Meets Precision.</h2>
            <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
              Founded with a vision to redefine Indian interiors, The Viraj began as a small studio driven by creativity, craftsmanship, and care. Over the years, we've grown into a full-service interior design company delivering exceptional spaces — from modern apartments and modular kitchens to luxury villas and commercial offices.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-4 block">Our Philosophy</span>
            <h2 className="mb-6">Design with Intention.</h2>
            <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
              We believe interior design should reflect more than trends — it should mirror your personality, habits, and aspirations. Every project we take on begins with listening — to understand your story, your rhythm, and how you want to live.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">From Vision to Reality.</h2>
            <p className="text-[var(--color-text-muted)]">Our structured yet flexible process ensures every detail is thoughtfully managed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your needs, preferences, and budget." },
              { step: "02", title: "Development", desc: "Our designers craft layouts, mood boards, and 3D renders." },
              { step: "03", title: "Estimation", desc: "Transparent budgeting using The Viraj Estimator." },
              { step: "04", title: "Execution", desc: "We handle on-site work, vendor coordination, and quality." },
              { step: "05", title: "Handover", desc: "Final inspection and finishing touches." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-6 border border-white/5 bg-[#0a0a0a] hover:border-[var(--color-accent)] transition-colors group"
              >
                <span className="text-3xl font-bold text-[var(--color-accent)]/20 mb-4 block group-hover:text-[var(--color-accent)] transition-colors">{item.step}</span>
                <h3 className="text-base mb-3">{item.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-4 block">The Team</span>
            <h2 className="mb-6">The People Behind the Vision.</h2>
            <p className="text-[var(--color-text-muted)] text-base mb-6">
              Our multidisciplinary team includes interior designers, architects, project managers, and skilled craftsmen — all united by a shared passion for design excellence.
            </p>
            <p className="text-[var(--color-text-muted)] text-base">
              Every project is handled with hands-on attention, combining creative insight with technical precision.
            </p>
          </div>
          <div className="aspect-video overflow-hidden rounded-sm">
            <img 
              src="https://picsum.photos/seed/viraj-team-work/800/600" 
              alt="Team at work" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#141414] text-center">
        <h2 className="mb-6">Let's Build Something Beautiful Together.</h2>
        <p className="text-[var(--color-text-muted)] mb-8">Talk to our designers today and get a customized estimate for your space.</p>
        <Link to="/contact" className="btn-primary">Get Estimate</Link>
      </section>
    </div>
  );
}
