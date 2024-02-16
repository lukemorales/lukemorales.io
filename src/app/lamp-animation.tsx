'use client';

import { motion } from 'framer-motion';

export const LampAnimation: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.5, width: '15rem' }}
        whileInView={{ opacity: 1, width: '30rem' }}
        transition={{
          duration: 0.8,
          type: 'spring',
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-[#5041ff] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
      >
        <div className="absolute  bottom-0 left-0 z-20 h-40 w-[100%] bg-[#0a0c13] [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute  bottom-0 left-0 z-20 h-[100%]  w-40 bg-[#0a0c13] [mask-image:linear-gradient(to_right,white,transparent)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.5, width: '15rem' }}
        whileInView={{ opacity: 1, width: '30rem' }}
        transition={{
          duration: 0.8,
          type: 'spring',
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-[#5041ff] text-white [--conic-position:from_290deg_at_center_top]"
      >
        <div className="absolute  bottom-0 right-0 z-20 h-[100%]  w-40 bg-[#0a0c13] [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div className="absolute  bottom-0 right-0 z-20 h-40 w-[100%] bg-[#0a0c13] [mask-image:linear-gradient(to_top,white,transparent)]" />
      </motion.div>

      <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#0a0c13] blur-2xl" />
      <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
      <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#5041ff] opacity-50 blur-3xl" />

      <motion.div
        initial={{ width: '8rem' }}
        whileInView={{ width: '16rem' }}
        transition={{
          duration: 0.8,
          type: 'spring',
        }}
        className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#a8a2e6] blur-2xl"
      />
      <motion.div
        initial={{ width: '15rem' }}
        whileInView={{ width: '30rem' }}
        transition={{
          duration: 0.8,
          type: 'spring',
        }}
        className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#a8a2e6] "
      />

      <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#0a0c13] " />
    </>
  );
};
