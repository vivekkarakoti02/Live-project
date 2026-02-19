import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-24">
      <section className="py-12 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="mb-4">Let's Start Your Transformation.</h1>
            <p className="text-[var(--color-text-muted)]">Get in touch with our team</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-8 bg-[#141414] border border-white/5">
                <h3 className="text-lg mb-2">Phone</h3>
                <p className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </p>
              </div>
              <div className="p-8 bg-[#141414] border border-white/5">
                <h3 className="text-lg mb-2">Email</h3>
                <p className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  <a href="mailto:hello@theviraj.com">hello@theviraj.com</a>
                </p>
              </div>
              <div className="p-8 bg-[#141414] border border-white/5">
                <h3 className="text-lg mb-2">Office</h3>
                <p className="text-[var(--color-text-muted)]">
                  123 Design Avenue,<br />
                  Creative City, India
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.form 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#141414] p-8 md:p-12 border border-white/5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Name</label>
                    <input type="text" id="name" className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white focus:border-[var(--color-accent)] focus:outline-none transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white focus:border-[var(--color-accent)] focus:outline-none transition-colors" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Service Required</label>
                    <select id="service" className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white focus:border-[var(--color-accent)] focus:outline-none transition-colors appearance-none" required>
                      <option value="">Select a service</option>
                      <option value="kitchen">Modular Kitchen</option>
                      <option value="full-interior">Full Interior</option>
                      <option value="living-spaces">Living Spaces</option>
                      <option value="renovation">Renovation</option>
                      <option value="estimation">Estimation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Estimated Budget</label>
                    <input type="text" id="budget" placeholder="e.g., Rs. 5,00,000" className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white focus:border-[var(--color-accent)] focus:outline-none transition-colors" />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white focus:border-[var(--color-accent)] focus:outline-none transition-colors"></textarea>
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto">Start Your Journey</button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
