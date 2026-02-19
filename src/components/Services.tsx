import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Full Interior Design",
      tagline: "End-to-end transformation from flooring to ceiling.",
      desc: "We manage everything — layout, materials, lighting, and furniture — while you relax and watch your vision come alive.",
      features: ["Complete spatial planning", "Material selection", "Lighting design", "Furniture curation", "Project management"],
      img: "https://picsum.photos/seed/viraj-full/800/600",
      linkText: "Get Estimate"
    },
    {
      title: "Modular Kitchen Design",
      tagline: "Smart, ergonomic, and stylish kitchens.",
      desc: "Crafted for efficiency and durability using high-moisture-resistant materials and premium hardware.",
      features: ["Smart storage solutions", "Premium hardware (Hettich, Hafele)", "Moisture resistant materials", "Appliance integration", "Custom layouts"],
      img: "https://picsum.photos/seed/viraj-kitchen-mod/800/600",
      linkText: "Request Kitchen Estimate"
    },
    {
      title: "Living Spaces Design",
      tagline: "Creating the heart of your home.",
      desc: "We design inviting living rooms where aesthetics meet comfort — blending textures, tones, and light.",
      features: ["Custom furniture design", "TV unit solutions", "Ambient lighting", "Color coordination", "Space optimization"],
      img: "https://picsum.photos/seed/viraj-living-space/800/600",
      linkText: "Get Estimate"
    },
    {
      title: "Renovation & Remodeling",
      tagline: "Giving old spaces a new soul.",
      desc: "We rejuvenate aging homes with modern finishes, updated plumbing, and refined design.",
      features: ["Structural assessment", "Plumbing/Electrical upgrades", "Modern finishes", "Heritage preservation", "Project documentation"],
      img: "https://picsum.photos/seed/viraj-reno-serv/800/600",
      linkText: "Start Your Renovation"
    },
    {
      title: "Estimation & Budget Planning",
      tagline: "Precise, itemized budgeting for total clarity.",
      desc: "Using The Viraj Estimator, we provide transparent, itemized cost breakdowns so your project stays on budget.",
      features: ["Detailed cost breakdown", "Material estimates", "Timeline projections", "Budget optimization", "Transparent pricing"],
      img: "https://picsum.photos/seed/viraj-est-serv/800/600",
      linkText: "Get Your Estimate Now"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://picsum.photos/seed/viraj-services/1920/1080")',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-lg text-gray-300">
            From concept to completion, we create interiors that inspire and endure.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-2xl md:text-3xl mb-4">{service.title}</h2>
                <p className="text-[var(--color-accent)] font-medium mb-6 italic text-sm">{service.tagline}</p>
                <p className="text-[var(--color-text-muted)] mb-8 text-base">{service.desc}</p>
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-outline text-xs">
                  {service.linkText} →
                </Link>
              </div>
              <div className={idx % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="aspect-[4/3] overflow-hidden rounded-sm border border-white/5">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#141414] text-center">
        <h2 className="mb-6">Let's Bring Your Vision to Life</h2>
        <p className="text-[var(--color-text-muted)] mb-8">Schedule your free consultation and get a detailed estimate today.</p>
        <div className="flex justify-center gap-4">
          <Link to="/contact" className="btn-primary">Get Estimate</Link>
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
