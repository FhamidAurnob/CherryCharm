'use client';

import { useState } from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { ProductCard } from '../components/ProductCard';
import { Container } from '../components/ui/Container';
import { AnimatedSection } from '../components/AnimatedSection';
import { products, categories } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gray-50">
        <Container>
          <AnimatedSection>
            <h1 className="text-5xl font-bold mb-4">Our Collection</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Explore our carefully curated collection of premium handbags, each piece designed to complement your unique style.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Filters and Products */}
      <section className="py-12">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <Button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full flex items-center justify-center"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Filters Sidebar */}
            <AnimatePresence>
              {(isFilterOpen || true) && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={`lg:w-64 flex-shrink-0 ${!isFilterOpen ? 'hidden lg:block' : 'block'}`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4 lg:hidden">
                      <h3 className="font-semibold">Filters</h3>
                      <button onClick={() => setIsFilterOpen(false)}>
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Categories */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Categories</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <label key={category.name} className="flex items-center justify-between cursor-pointer">
                            <span className="text-gray-700 hover:text-purple-600 transition-colors">
                              {category.name}
                            </span>
                            <span className="text-sm text-gray-500">({category.count})</span>
                            <input
                              type="radio"
                              name="category"
                              value={category.name}
                              checked={selectedCategory === category.name}
                              onChange={(e) => setSelectedCategory(e.target.value)}
                              className="ml-2"
                            />
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h3 className="font-semibold mb-3">Price Range</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="500"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                          className="w-full"
                        />
                        <input
                          type="range"
                          min="0"
                          max="500"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products
                </p>
                <select className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}