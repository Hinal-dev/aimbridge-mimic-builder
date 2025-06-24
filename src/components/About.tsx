
import { Award, Globe, Users2, Building2 } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Building2, number: "250+", label: "Properties Managed" },
    { icon: Globe, number: "45", label: "Countries" },
    { icon: Users2, number: "50,000+", label: "Team Members" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Leading Hospitality
              <span className="block text-amber-600">Management</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over two decades of experience in the hospitality industry, we have established ourselves as a trusted partner for luxury hotels, resorts, and hospitality brands worldwide. Our commitment to excellence drives everything we do.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that exceptional hospitality is built on three pillars: outstanding service, operational excellence, and genuine care for both guests and team members. This philosophy guides our approach to every property we manage.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-amber-600" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-slate-800">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Professional hospitality team meeting"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <Award size={32} />
                <div>
                  <div className="font-bold text-lg">Industry Leader</div>
                  <div className="text-amber-100">Since 2001</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
