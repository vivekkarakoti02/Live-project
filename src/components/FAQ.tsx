import { useState } from 'react';
import { motion } from 'motion/react';

export default function FAQ() {
  const faqs = [
    { q: "What services does The Viraj offer?", a: "We provide complete interior design solutions including Full Interiors, Modular Kitchens, Living Spaces, Renovation, and Estimation services — all tailored to your vision and budget." },
    { q: "Do you handle both residential and commercial projects?", a: "Yes. We specialize in both residential homes and commercial spaces such as offices, studios, and retail interiors." },
    { q: "What is included in your 'Full Interior' service?", a: "Our Full Interior service covers end-to-end design — from conceptual planning and 3D visualization to execution, furniture, lighting, and décor installation." },
    { q: "Do you offer customized designs?", a: "Absolutely. Every project at The Viraj is customized to reflect your taste, space, and lifestyle. We never use one-size-fits-all designs." },
    { q: "How long does a typical interior project take?", a: "The duration depends on project size and scope. A full home interior usually takes 8–12 weeks from design approval to completion." },
    { q: "What is the process for starting a project with The Viraj?", a: "It begins with a free consultation and estimation. Once we understand your requirements, we provide design concepts, a detailed quotation, and then move to execution upon approval." },
    { q: "Can I get an estimate before finalizing the design?", a: "Yes, our Estimation Service provides accurate cost projections before you commit to a full design plan — ensuring complete transparency." },
    { q: "What materials and brands do you use?", a: "We use only trusted brands and premium materials for long-lasting quality — including hardware from Hettich, Hafele, and Greenply, among others." },
    { q: "Do you provide 3D design or visualization?", a: "Yes, every client receives 3D renderings to visualize their space before work begins — helping you make confident design decisions." },
    { q: "What makes The Viraj different from other interior firms?", a: "We blend creativity, technical precision, and emotional design. Our approach ensures each home we design feels personal, functional, and timeless." },
    { q: "Can you work with my existing furniture or layout?", a: "Yes. We can redesign around your existing furniture or layout to optimize space and refresh the overall look." },
    { q: "How do you manage budgets and cost overruns?", a: "We plan every detail upfront through our Estimation Service, maintain transparent pricing, and provide regular updates throughout execution." },
    { q: "What is a Modular Kitchen, and why choose one?", a: "A Modular Kitchen is a system of pre-designed units and components that create a smart, space-efficient, and stylish cooking area. It offers easy maintenance and flexible design." },
    { q: "Can I visit ongoing or completed projects?", a: "Yes, you can visit select ongoing or completed sites (with client consent) to understand our workmanship and design quality." },
    { q: "Do you handle renovation projects for old homes or apartments?", a: "Yes, we specialize in modern renovations — transforming older homes into beautiful, functional spaces without losing their charm." },
    { q: "Is there a warranty on your work?", a: "Yes, we offer warranties on fittings, materials, and craftsmanship, depending on the project type and vendor agreements." },
    { q: "Do you provide design-only services without execution?", a: "Yes, if you prefer to manage execution independently, we can provide detailed design plans and guidance." },
    { q: "What payment structure do you follow?", a: "Our standard payment schedule is milestone-based — starting with a booking amount, followed by stage-wise payments through design and execution." },
    { q: "Can you work within my existing budget?", a: "Of course. We adapt designs and materials to align with your budget while maintaining aesthetics and quality." },
    { q: "How can I get started?", a: "Simply click the [Get Estimate] button or contact us directly via phone or email. Our team will schedule a consultation and guide you through the next steps toward your dream home." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24">
      <section className="py-24 px-6 bg-[var(--color-primary-bg)] min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="mb-4">Frequently Asked Questions</h1>
            <p className="text-[var(--color-text-muted)]">Find answers to common questions about our services and process</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border border-[var(--color-border)] bg-[var(--color-card-bg)] rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--color-border)] transition-colors"
                >
                  <span className="font-semibold text-base pr-8">{faq.q}</span>
                  <span className={`text-[var(--color-accent)] text-2xl transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}>+</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)] text-sm">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
