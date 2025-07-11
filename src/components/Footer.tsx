
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#101923] text-gray-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Gold Coast Hospitality</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Elevating hospitality experiences through exceptional management and innovative solutions.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-amber-600 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#FFA233] transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#FFA233] transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#FFA233] transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>
          
          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#FFA233] transition-colors duration-200">Property Management</a></li>
              <li><a href="#" className="hover:text-[#FFA233] transition-colors duration-200">Staff Training</a></li>
              <li><a href="#" className="hover:text-[#FFA233] transition-colors duration-200">Revenue Optimization</a></li>
              <li><a href="#" className="hover:text-[#FFA233] transition-colors duration-200">Quality Assurance</a></li>
            </ul>
          </div> */}
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#FFA233] transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-[#FFA233] transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-[#FFA233] transition-colors duration-200">News & Events</a></li>
              <li><a href="#" className="hover:text-[#FFA233] transition-colors duration-200">Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              {/* <p>123 Hospitality Avenue</p> */}
              <p>New York</p>
              {/* <p>+1 (555) 123-4567</p> */}
              <p>info@goldcoasthm.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 PremiumStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
