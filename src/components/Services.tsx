
import { Building2, Users, TrendingUp, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Property Management",
      description: "Complete operational oversight ensuring optimal performance and guest satisfaction across all property types."
    },
    {
      icon: Users,
      title: "Staff Excellence",
      description: "Comprehensive training programs and management systems that develop world-class hospitality teams."
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Strategic pricing and revenue management solutions that maximize profitability and market performance."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality standards and continuous monitoring to maintain exceptional service levels."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive hospitality management solutions designed to elevate your property's performance and guest experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                <service.icon className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
