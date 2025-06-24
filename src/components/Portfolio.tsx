
import { MapPin, Star } from 'lucide-react';

const Portfolio = () => {
  const properties = [
    {
      name: "Grand Marina Resort",
      location: "Miami, Florida",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      type: "Luxury Resort"
    },
    {
      name: "Metropolitan Suites",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      type: "Business Hotel"
    },
    {
      name: "Oceanview Boutique",
      location: "San Diego, CA",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      type: "Boutique Hotel"
    },
    {
      name: "Alpine Lodge",
      location: "Aspen, Colorado",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      type: "Mountain Resort"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover some of the exceptional properties we manage across the globe, each delivering unique experiences while maintaining our standards of excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-amber-600">
                  {property.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{property.name}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="text-amber-400 fill-current" size={16} />
                    <span className="ml-1 text-sm font-semibold text-gray-700">{property.rating}</span>
                  </div>
                  <button className="text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
