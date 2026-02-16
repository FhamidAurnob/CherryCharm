// app/components/Hero.tsx
'use client';  // Add this at the top

import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import Link from 'next/link';


export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1584917865442-89e86c0b6f1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
          alt="Luxury handbags"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Discover Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              Perfect Companion
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-200 mb-8"
          >
            Explore our curated collection of luxury handbags crafted for the modern woman. 
            Each piece tells a unique story of elegance and sophistication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/products">
              <Button size="lg" className="w-full sm:w-auto bg-white text-purple-900 hover:bg-gray-100">
                Shop Now
              </Button>
            </Link>
            <Link href="/collections">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                View Collections
              </Button>
            </Link>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};