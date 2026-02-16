'use client';


import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { AnimatedSection } from './components/AnimatedSection';
import { Container } from './components/ui/Container';
import { Button } from './components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Shield, Truck, RotateCcw, CreditCard } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Premium Quality',
      description: 'Handcrafted with the finest materials',
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Free Shipping',
      description: 'On orders over $100',
    },
    {
      icon: <RotateCcw className="h-6 w-6" />,
      title: '30-Day Returns',
      description: 'Hassle-free returns',
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Secure Payments',
      description: '100% secure checkout',
    },
  ];

  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most loved handbags, carefully selected for their timeless elegance
            </p>
          </AnimatedSection>

          <ProductGrid />

          <AnimatedSection delay={0.2} className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <Container>
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Stay in Style</h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter and get 10% off your first purchase
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </form>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}