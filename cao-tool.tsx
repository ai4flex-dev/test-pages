import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const Navigation = ({ items }) => (
  <nav className="hidden md:block">
    <ul className="flex items-center gap-6">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="text-white hover:text-white/80 transition-colors font-medium"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const MobileNav = ({ items, isOpen, onToggle }) => (
  <div className="md:hidden">
    <button
      onClick={onToggle}
      className="text-white p-2"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
    
    {isOpen && (
      <div className="absolute top-16 left-0 right-0 bg-green-700 p-4">
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-white hover:text-white/80 transition-colors block py-2"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFrameLoading, setIsFrameLoading] = useState(true);
  
  const navigationItems = [
    { name: 'CAO Tool', href: '#' },
    { name: 'Mail AI', href: '#' },
    { name: 'Vertaling', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                <span className="text-green-700 font-bold text-xl">A4F</span>
              </div>
              <span className="text-xl font-semibold">AI4Flex Platform</span>
            </div>
            
            <Navigation items={navigationItems} />
            <MobileNav 
              items={navigationItems}
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </header>

      <main className="flex-grow p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">CAO Tool</h1>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Refresh Tool
              </button>
            </div>
          </div>

          {isFrameLoading && (
            <Alert className="mb-4">
              <AlertTitle>Loading CAO Tool...</AlertTitle>
              <AlertDescription>
                Please wait while we load the tool. This may take a few seconds.
              </AlertDescription>
            </Alert>
          )}

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 font-medium">CAO Tool</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
            
            <iframe
              src="https://caotool.up.railway.app/"
              title="CAO Tool Interface"
              className="w-full h-[calc(100vh-240px)] border-none"
              sandbox="allow-scripts allow-same-origin allow-forms"
              onLoad={() => setIsFrameLoading(false)}
            />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">&copy; 2024 AI4Flex Platform. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
