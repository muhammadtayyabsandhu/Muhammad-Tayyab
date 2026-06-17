export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-black to-transparent border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Muhammad Tayyab</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300 transition">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition">About</a>
            <a href="#" className="text-white hover:text-gray-300 transition">Services</a>
            <a href="#" className="text-white hover:text-gray-300 transition">Contact</a>
          </div>

          <div className="flex md:hidden">
            <button className="inline-flex items-center justify-center p-2">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
