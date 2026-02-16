'use client';

import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';
import { products } from '@/lib/data';

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};