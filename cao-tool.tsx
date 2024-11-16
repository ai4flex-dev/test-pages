import { useState } from 'react';
import { Menu, X, ChevronDown, RefreshCw } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReloading, setIsReloading] = useState(false);
  const [activeTab, setActiveTab] = useState('CAO Tool');

  const handleRefresh = () => {
    setIsReloading(true);
    const iframe = document.getElementById('cao-tool-frame');
    if (iframe) {
      iframe.src = iframe.src;
    }
    setTimeout(() => setIsReloading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-green-700 text-white shadow-lg">
        <div className="mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-700 font-bold text-xl">A4F</span>
              </div>
              <span className="font-semibold text-lg">AI4Flex Platform</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <button 
                className="text-white border-b-2 border-white"
                onClick={() => setActiveTab('CAO Tool')}
              >
                CAO Tool
              </button>
              <button 
                className="text-white hover:text-gray-200"
                onClick={() => setActiveTab('Mail AI')}
              >
                Mail AI
              </button>
              <button 
                className="text-white hover:text-gray-200"
                onClick={() => setActiveTab('Vertaling')}
              >
                Vertaling
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-2 md:hidden">
              <div className="flex flex-col space-y-2 pt-2 pb-3">
                <button 
                  className="text-white py-2 px-4 rounded hover:bg-green-600"
                  onClick={() => {
                    setActiveTab('CAO Tool');
                    setIsMenuOpen(false);
                  }}
                >
                  CAO Tool
                </button>
                <button 
                  className="text-white py-2 px-4 rounded hover:bg-green-600"
                  onClick={() => {
                    setActiveTab('Mail AI');
                    setIsMenuOpen(false);
                  }}
                >
                  Mail AI
                </button>
                <button 
                  className="text-white py-2 px-4 rounded hover:bg-green-600"
                  onClick={() => {
                    setActiveTab('Vertaling');
                    setIsMenuOpen(false);
                  }}
                >
                  Vertaling
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">{activeTab}</h1>
          <button
            onClick={handleRefresh}
            disabled={isReloading}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
          >
            <RefreshCw 
              className={`h-5 w-5 ${isReloading ? 'animate-spin' : ''}`} 
            />
            <span>Refresh</span>
          </button>
        </div>

        {/* CAO Tool Window */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Window Header */}
          <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">CAO Tool</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Iframe Container */}
          <div className="relative">
            <iframe
              id="cao-tool-frame"
              src="https://caotool.up.railway.app/"
              title="CAO Tool"
              className="w-full h-[calc(100vh-260px)]"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
