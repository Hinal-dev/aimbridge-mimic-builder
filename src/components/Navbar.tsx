
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#101923] shadow-sm sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/424a4c9b-9fa9-4b73-a3e7-6c5241defb12.png" 
              alt="Gold Coast Hospitality Management" 
              className="h-24 w-auto"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">Home</a>
              <a href="#services" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">Services</a>
              <a href="#about" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">About</a>
              {/* <a href="#portfolio" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">Portfolio</a> */}
              <a href="#contact" className="text-slate-700 hover:text-amber-600 transition-colors duration-200 font-medium">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#FFA233] transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" onClick={handleLinkClick} className="text-gray-300 hover:text-[#FFA233] transition-colors duration-200 font-medium">Home</a>
              <a href="#services" onClick={handleLinkClick} className="text-gray-300 hover:text-[#FFA233] transition-colors duration-200 font-medium">Services</a>
              <a href="#about" onClick={handleLinkClick} className="text-gray-300 hover:text-[#FFA233] transition-colors duration-200 font-medium">About</a>
              <a href="#portfolio" onClick={handleLinkClick} className="text-gray-300 hover:text-[#FFA233] transition-colors duration-200 font-medium">Portfolio</a>
              <a href="#contact" onClick={handleLinkClick} className="text-gray-300 hover:text-[#FFA233] transition-colors duration-200 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
