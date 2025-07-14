'use client';

import { motion } from 'framer-motion';

import './Hero.css';

export default function Hero() {
  return (
    <main className='hero_wrap flex items-end'>
      <motion.div
        className='hero_slider'
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 5,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <h1 className='hero_heading'>TRANSFORM • ALIGN • FUTURISTIC •</h1>
      </motion.div>
    </main>
  );
}
