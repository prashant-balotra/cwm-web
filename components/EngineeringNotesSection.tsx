"use client";

import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const notes = [
  {
    title: 'Why Offset Pagination Fails at Scale',
    category: 'Performance',
    readTime: '5 min read',
  },
  {
    title: 'JWT Is Not Authentication',
    category: 'Security',
    readTime: '4 min read',
  },
  {
    title: 'MongoDB vs MySQL — Real Decision Matrix',
    category: 'Database',
    readTime: '7 min read',
  },
  {
    title: 'The Hidden Cost of Microservices',
    category: 'Architecture',
    readTime: '6 min read',
  },
  {
    title: 'Caching Strategies That Actually Work',
    category: 'Performance',
    readTime: '8 min read',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }
  },
};

const EngineeringNotesSection = () => {
  return (
    <section id="notes" className="py-24 bg-secondary/30">
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
            <p className="text-primary font-mono text-sm mb-2">{"// SHORT READS"}</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Engineering Notes & Learnings
            </h2>
          </div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <Button variant="ghost" className="group font-mono self-start sm:self-auto">
              Read All Notes
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Notes List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-3"
        >
          {notes.map((note, index) => (
            <motion.article
              key={note.title}
              variants={itemVariants}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              className="group flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all cursor-pointer"
            >
              {/* Icon */}
              <motion.div 
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {note.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="tag-primary text-xs">{note.category}</span>
                  <span>{note.readTime}</span>
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="flex-shrink-0"
              >
                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringNotesSection;
