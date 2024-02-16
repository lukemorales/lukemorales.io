'use client';

import { motion } from 'framer-motion';

export const UnderConstruction: React.FC = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: -200 }}
      transition={{ delay: 0.1, type: 'spring', damping: 12 }}
      className="mt-8 bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      Under construction
    </motion.h1>
  );
};
