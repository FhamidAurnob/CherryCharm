// app/components/ProductCard.tsx
'use client';  // Add this at the top

import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Button } from './ui/Button';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { useState } from 'react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
  };
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const addToCart = useCartStore((state) => state.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <motion.img
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            <Button
              size="sm"
              className="bg-white text-purple-900 hover:bg-purple-600 hover:text-white"
              onClick={() => addToCart(product)}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href={`/product/${product.id}`}>
              <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10">
                <Eye className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-900 text-sm font-medium rounded-full">
            {product.category}
          </span>
        </div>

        {/* Like Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-6">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600">${product.price}</span>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => addToCart(product)}
            className="hover:bg-purple-600 hover:text-white"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};