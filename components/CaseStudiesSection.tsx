"use client";

import { ArrowRight, Search, ShoppingCart, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    icon: Search,
    title: 'Designing a High-Traffic Search Service',
    tech: ['Spring Boot', 'Elasticsearch', 'Redis'],
    focus: ['Performance', 'Pagination', 'Sorting'],
    tags: ['Scalability', 'System Design', 'Backend'],
  },
  {
    icon: ShoppingCart,
    title: 'Building an Event-Driven Order System',
    tech: ['Java', 'Kafka', 'PostgreSQL'],
    focus: ['Event Sourcing', 'CQRS', 'Eventual Consistency'],
    tags: ['Architecture', 'Microservices', 'Backend'],
  },
  {
    icon: Shield,
    title: 'Implementing RBAC Authorization Service',
    tech: ['Spring Security', 'JWT', 'Redis'],
    focus: ['Security', 'Token Management', 'Caching'],
    tags: ['Security', 'Backend', 'Auth'],
  },
  {
    icon: Zap,
    title: 'Real-Time Notification System Design',
    tech: ['WebSocket', 'Redis Pub/Sub', 'React'],
    focus: ['Real-time', 'Scalability', 'Frontend'],
    tags: ['Full Stack', 'System Design', 'Real-time'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
  },
};

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-primary font-mono text-sm mb-2">{"// DEEP DIVES"}</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Engineering Case Studies
            </h2>
          </div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <Button variant="ghost" className="group font-mono self-start sm:self-auto">
              View All
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-6 rounded-xl bg-card border border-border cursor-pointer overflow-hidden"
            >
              {/* Hover gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Header */}
              <div className="relative z-10 flex items-start gap-4 mb-4">
                <motion.div 
                  className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <study.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {study.title}
                </h3>
              </div>

              {/* Tech Stack */}
              <div className="relative z-10 mb-4">
                <p className="text-xs text-muted-foreground mb-2 font-mono">TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((t) => (
                    <motion.span 
                      key={t} 
                      className="tag-primary font-mono text-xs"
                      whileHover={{ scale: 1.05 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Focus Areas */}
              <div className="relative z-10 mb-4">
                <p className="text-xs text-muted-foreground mb-2 font-mono">FOCUS</p>
                <p className="text-sm text-secondary-foreground">
                  {study.focus.join(' • ')}
                </p>
              </div>

              {/* Tags */}
              <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-border">
                {study.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <motion.div 
                className="absolute bottom-6 right-6"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-5 h-5 text-primary" />
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
