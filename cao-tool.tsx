const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('CAO Tool');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-green-700 text-white">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-700 font-bold text-xl">A4F</span>
              </div>
              <span className="font-semibold text-lg">AI4Flex Platform</span>
            </div>

            <div className="hidden md:flex gap-6">
              <button 
                className={`text-white ${activeTab === 'CAO Tool' ? 'border-b-2 border-white' : ''}`}
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

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {isMenuOpen && (
            <div className="mt-2 md:hidden">
              <button 
                className="block w-full text-left text-white py-2"
                onClick={() => {
                  setActiveTab('CAO Tool');
                  setIsMenuOpen(false);
                }}
              >
                CAO Tool
              </button>
              <button 
                className="block w-full text-left text-white py-2"
                onClick={() => {
                  setActiveTab('Mail AI');
                  setIsMenuOpen(false);
                }}
              >
                Mail AI
              </button>
              <button 
                className="block w-full text-left text-white py-2"
                onClick={() => {
                  setActiveTab('Vertaling');
                  setIsMenuOpen(false);
                }}
              >
                Vertaling
              </button>
            </div>
          )}
        </div>
      </nav>

      <main className="p-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-2 flex justify-between items-center border-b">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-sm text-gray-600">CAO Tool</span>
            </div>

            <iframe
              src="https://caotool.up.railway.app/"
              title="CAO Tool"
              className="w-full h-[calc(100vh-200px)]"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
