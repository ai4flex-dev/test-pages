import { useState } from 'react';
import { Menu, X, ChevronDown, RefreshCw } from 'lucide-react';

const Navigation = ({ items }) => (
  <nav className="hidden md:block">
    <ul className="flex items-center gap-6">
      {items.map((item) => (
        <li key={item.name}>
          <button
            onClick={item.onClick}
            className={`text-white hover:text-white/90 transition-colors font-medium ${
              item.isActive ? 'border-b-2 border-white pb-1' : ''
            }`}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

const MobileNav = ({ items, isOpen, onToggle }) => (
  <div className="md:hidden relative">
    <button
      onClick={onToggle}
      className="text-white p-2 hover:bg-green-800 rounded-lg transition-colors"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
    
    {isOpen && (
      <div className="absolute top-12 right-0 w-48 bg-white rounded-lg shadow-lg py-2">
        {items.map((item) => (
          <button
            key={item.name}
            onClick={item.onClick}
            className={`w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 transition-colors ${
              item.isActive ? 'bg-green-50 font-medium' : ''
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    )}
  </div>
);

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReloading, setIsReloading] = useState(false);
  const [activeTab, setActiveTab] = useState('CAO Tool');
  
  const navigationItems = [
    { 
      name: 'CAO Tool', 
      onClick: () => setActiveTab('CAO Tool'),
      isActive: activeTab === 'CAO Tool'
    },
    { 
      name: 'Mail AI', 
      onClick: () => setActiveTab('Mail AI'),
      isActive: activeTab === 'Mail AI'
    },
    { 
      name: 'Vertaling', 
      onClick: () => setActiveTab('Vertaling'),
      isActive: activeTab === 'Vertaling'
    },
    { 
      name: 'Contact', 
      onClick: () => setActiveTab('Contact'),
      isActive: activeTab === 'Contact'
    }
  ];

  const handleRefresh = () => {
    setIsReloading(true);
    const iframe = document.getElementById('cao-tool-frame');
    if (iframe) {
      iframe.src = iframe.src;
    }
    setTimeout(() => setIsReloading(false), 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                <span className="text-green-700 font-bold text-xl">A4F</span>
              </div>
              <span className="text-xl font-semibold hidden sm:inline">AI4Flex Platform</span>
              <span className="text-xl font-semibold sm:hidden">A4F</span>
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

      <main className="flex-grow p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{activeTab}</h1>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={isReloading}
            >
              <RefreshCw 
                size={16} 
                className={`text-gray-600 ${isReloading ? 'animate-spin' : ''}`}
              />
              <span className="text-gray-600">Refresh</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-2.5 flex items-center justify-between border-b">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">CAO Tool</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
            
            <div className="relative bg-white">
              <iframe
                id="cao-tool-frame"
                src="https://caotool.up.railway.app/"
                title="CAO Tool Interface"
                className="w-full h-[calc(100vh-220px)] border-none"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-4">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-sm text-gray-500">&copy; 2024 AI4Flex Platform. All rights reserved.</p>
            <div className="flex gap-4">
              <button 
                onClick={() => console.log('Privacy Policy clicked')}
                className="text-sm text-gray-500 hover:text-green-700 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => console.log('Terms of Service clicked')}
                className="text-sm text-gray-500 hover:text-green-700 transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
