import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://picsum.photos/seed/viraj-home/1920/1080")',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[var(--color-primary-bg)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
          >
            Because Every Home <br />
            <span className="text-[var(--color-accent)] italic font-serif">Deserves a Soul.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10"
          >
            End-to-end interior design and renovation solutions — crafted with emotion, elegance, and precision.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link to="/contact" className="btn-primary">
              Get Estimate
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-24 px-6 bg-[var(--color-primary-bg)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-4 block">Who We Are</span>
            <h2 className="mb-6">Designing Dreams, <br />Building Comfort.</h2>
            <p className="text-[var(--color-text-muted)] mb-6 text-base">
              At The Viraj, we believe great interiors are born from a deep understanding of your lifestyle. Our team of experts crafts beautiful, functional, and timeless spaces — whether you're building new, renovating, or simply refreshing your home.
            </p>
            <Link to="/about" className="text-[var(--color-accent)] border-b border-[var(--color-accent)] pb-1 hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] transition-colors text-sm uppercase tracking-widest font-semibold">
              Learn More About Us
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://picsum.photos/seed/viraj-living/800/1000" 
                alt="Modern Living Room" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[var(--color-secondary-bg)] p-8 flex flex-col justify-center border border-[var(--color-border)] z-10 hidden md:flex">
              <span className="text-4xl font-bold text-[var(--color-accent)] mb-2">10+</span>
              <span className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider">Years of Excellence</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-[var(--color-secondary-bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-4 block">Our Expertise</span>
            <h2>Crafted For You</h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
              We bring design, functionality, and craftsmanship together to transform every corner of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Full Interior Design", img: "https://picsum.photos/seed/viraj-interior/600/400", desc: "End-to-end transformation from flooring to ceiling." },
              { title: "Modular Kitchen", img: "https://picsum.photos/seed/viraj-kitchen/600/400", desc: "Smart, ergonomic, and stylish kitchens." },
              { title: "Living Spaces", img: "https://picsum.photos/seed/viraj-livingroom/600/400", desc: "Creating the heart of your home with customized furniture." },
              { title: "Renovation", img: "https://picsum.photos/seed/viraj-reno/600/400", desc: "Giving old spaces a new soul through expert upgrades." },
              { title: "Estimation", img: "https://picsum.photos/seed/viraj-est/600/400", desc: "Precise, itemized budgeting with The Viraj Estimator." },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group card overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-lg mb-3">{service.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm mb-6">{service.desc}</p>
                  <Link to="/contact" className="text-[var(--color-accent)] text-xs uppercase tracking-widest font-bold hover:text-[var(--color-text-primary)] transition-colors">
                    Get Estimate →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-[var(--color-primary-bg)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="aspect-square overflow-hidden rounded-sm relative">
              <img 
                src="https://picsum.photos/seed/viraj-team/800/800" 
                alt="Design Team" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-[var(--color-accent)]/10 mix-blend-multiply"></div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-4 block">Why Choose Us</span>
            <h2 className="mb-8">Your Vision, Our Expertise</h2>
            <ul className="space-y-6">
              {[
                "Certified Designers & Experienced Managers",
                "Transparent Pricing & Detailed Estimation",
                "Premium Materials (Hettich, Hafele, Greenply)",
                "100% Personalized Design — No Templates",
                "End-to-End Execution & On-Time Delivery"
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-[var(--color-accent)] mt-1">✓</span>
                  <p className="text-sm text-[var(--color-text-muted)]">{item}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[var(--color-card-bg)] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Design Your Dream Space?</h2>
          <p className="text-[var(--color-text-muted)] text-base mb-10">
            Let's create something extraordinary — with beauty, comfort, and purpose in every detail.
          </p>
          <Link to="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
