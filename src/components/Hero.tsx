
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Exceptional
            <span className="block text-amber-400">Hospitality</span>
            Management
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Elevating guest experiences through innovative management solutions and unparalleled service excellence across luxury properties worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Explore Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
