
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-800">PremiumStay</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">Home</a>
              <a href="#services" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">Services</a>
              <a href="#about" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">About</a>
              <a href="#portfolio" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">Portfolio</a>
              <a href="#contact" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-amber-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">Home</a>
              <a href="#services" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">Services</a>
              <a href="#about" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">About</a>
              <a href="#portfolio" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">Portfolio</a>
              <a href="#contact" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
