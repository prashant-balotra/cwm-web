"use client";

import { Zap, GitBranch, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: Zap,
    title: 'Real Problems',
    description: 'Built from production-like use cases, not demo apps.',
  },
  {
    icon: GitBranch,
    title: 'Architecture First',
    description: 'Diagrams, data flow, scalability & failure scenarios.',
  },
  {
    icon: Scale,
    title: 'Tradeoffs Explained',
    description: 'Why this approach, why not the others.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
  },
};

const DifferenceSection = () => {
  return (
    <section className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Not Just Code.{' '}
            <span className="text-gradient">Engineering Thinking.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What separates this content from 90% of developer blogs.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-xl bg-card border border-border"
            >
              {/* Glow Effect */}
              <motion.div 
                className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                  transition={{ duration: 0.2 }}
                >
                  <card.icon className="w-6 h-6 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Corner accent */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 rounded-tr-xl"
                initial={{ background: 'transparent' }}
                whileHover={{ 
                  background: 'linear-gradient(135deg, transparent 50%, hsl(var(--primary) / 0.1) 100%)' 
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DifferenceSection;
