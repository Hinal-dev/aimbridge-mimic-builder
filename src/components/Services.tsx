
import { Building2, Users, TrendingUp, Shield, Handshake, RefreshCw, Hammer, DollarSign, Target, UserCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Hotel Operations Management",
      description: "Day-to-day management of limited-service properties with a focus on guest satisfaction, operational efficiency, and profitability."
    },
    {
      icon: Handshake,
      title: "Franchise Development & Negotiation",
      description: "Expert guidance in selecting the right franchise brand, negotiating favorable terms, and navigating the approval process."
    },
    {
      icon: RefreshCw,
      title: "Franchise Conversion Services",
      description: "Seamless brand transitions, including rebranding, compliance, and operational alignment to meet new franchise standards."
    },
    {
      icon: Hammer,
      title: "Property Renovation & Construction Oversight",
      description: "Hands-on project management for renovations, PIP compliance, and ground-up construction, ensuring projects are completed on time and within budget."
    },
    {
      icon: DollarSign,
      title: "Financial Performance & Reporting",
      description: "Robust budgeting, forecasting, and detailed reporting to drive accountability and maximize return on investment."
    },
    {
      icon: Target,
      title: "Sales & Marketing Strategy",
      description: "Implementation of proven sales tactics, local marketing initiatives, and revenue management tools to increase visibility and bookings."
    },
    {
      icon: UserCheck,
      title: "Human Resources & Staff Development",
      description: "Recruitment, training, and retention strategies to build strong, guest-focused teams and support positive work culture."
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#101923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive hospitality management solutions designed to elevate your property's performance and guest experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-[#FFA233]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFA233]/20 transition-colors duration-300">
                <service.icon className="text-[#FFA233]" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#101923] mb-3 leading-tight">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
