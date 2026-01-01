"use client";

import { ArrowUpRight, Lock, Search, Database, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const architectures = [
  {
    icon: Lock,
    title: 'Auth Flow Architecture',
    description: 'JWT-based authentication with refresh token rotation',
    tags: ['Security', 'OAuth'],
  },
  {
    icon: Search,
    title: 'Search Pipeline Design',
    description: 'Elasticsearch with Redis caching layer',
    tags: ['Performance', 'Scalability'],
  },
  {
    icon: Database,
    title: 'Cache Strategy Patterns',
    description: 'Multi-level caching with invalidation',
    tags: ['Redis', 'Performance'],
  },
  {
    icon: Workflow,
    title: 'Event-Driven Architecture',
    description: 'Kafka-based async processing pipeline',
    tags: ['Microservices', 'Messaging'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
  },
};

const ArchitectureGallerySection = () => {
  return (
    <section id="architecture" className="py-24">
      <div className="section-container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// VISUAL AUTHORITY"}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            System Design & Architecture
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visual diagrams and architectural decisions behind real systems.
          </p>
        </motion.div>

        {/* Architecture Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {architectures.map((arch) => (
            <motion.div
              key={arch.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative aspect-square rounded-xl bg-card border border-border cursor-pointer overflow-hidden"
            >
              {/* Diagram Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-24 h-24 rounded-2xl bg-secondary/80 border border-border flex items-center justify-center">
                    <arch.icon className="w-10 h-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                  </div>
                </motion.div>
                
                {/* Grid lines for diagram effect */}
                <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity">
                  <defs>
                    <pattern id={`grid-${arch.title}`} width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${arch.title})`} />
                </svg>

                {/* Animated connection lines */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/40 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/30 rounded-full"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>

              {/* Content Overlay */}
              <motion.div 
                className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-card via-card/95 to-transparent"
                initial={{ y: 10, opacity: 0.9 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm mb-1">
                  {arch.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                  {arch.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {arch.tags.map((tag) => (
                    <span key={tag} className="tag text-[10px] py-0.5 px-1.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Hover Arrow */}
              <motion.div 
                className="absolute top-3 right-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureGallerySection;
