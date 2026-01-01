"use client";

import { ArrowUpRight, Github, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Event Booking Platform',
    description: 'Full-stack event management with seat reservation and payment integration.',
    difficulty: 'Advanced',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'Stripe'],
    githubUrl: '#',
  },
  {
    title: 'Property Search System',
    description: 'Elasticsearch-powered property search with advanced filters and geo-queries.',
    difficulty: 'Intermediate',
    tech: ['Java', 'Elasticsearch', 'Angular', 'Redis'],
    githubUrl: '#',
  },
  {
    title: 'Auth Service with RBAC',
    description: 'Complete authentication system with role-based access control.',
    difficulty: 'Intermediate',
    tech: ['Spring Security', 'JWT', 'PostgreSQL'],
    githubUrl: '#',
  },
];

const difficultyColors: Record<string, string> = {
  'Beginner': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Intermediate': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Advanced': 'bg-red-500/10 text-red-400 border-red-500/20',
};

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
  },
};

const EngineeringBuildsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// HANDS-ON"}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Engineering Builds
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are build-along projects, not tutorials. Dive into real architectures.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col p-6 rounded-xl bg-card border border-border"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <motion.div 
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Layers className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
                <motion.span 
                  className={`tag text-xs ${difficultyColors[project.difficulty]}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {project.difficulty}
                </motion.span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="ghost" size="sm" className="font-mono" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="ml-auto">
                  <Button variant="ghost" size="sm" className="font-mono">
                    View
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringBuildsSection;
