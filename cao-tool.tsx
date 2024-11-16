import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-[#276749] text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full" />
            <span className="text-xl font-medium">AI4Flex Platform</span>
          </div>
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <Link href="#" className="text-white hover:text-white/80 transition-colors">
                  CAO Tool
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white/80 transition-colors">
                  Mail AI
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white/80 transition-colors">
                  Vertaling
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white/80 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">CAO Tool</h1>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-200 px-4 py-2 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-gray-600">CAO Tool</span>
              </div>
              <iframe
                src="https://caotool.up.railway.app/"
                title="CAO Tool"
                className="w-full h-[calc(100vh-200px)] border-none"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 text-center p-4">
        <p>&copy; 2024 AI4Flex Platform. All rights reserved.</p>
      </footer>
    </div>
  )
}