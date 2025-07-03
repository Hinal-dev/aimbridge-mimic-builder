
import { Award, Globe, Users2, Building2, Calendar, Target, Heart, User } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, number: "1993", label: "Founded" },
    { icon: Building2, number: "250+", label: "Properties Managed" },
    { icon: Globe, number: "45", label: "Countries" },
    { icon: Users2, number: "50,000+", label: "Team Members" }
  ];

  const achievements = [
    { icon: Target, title: "Strategic Growth", description: "From a single budget motel to a trusted industry leader" },
    { icon: Award, title: "Operational Excellence", description: "Decades of hands-on experience across all hospitality facets" },
    { icon: Heart, title: "Guest-Focused", description: "Creating lasting impressions and elevating guest experiences" }
  ];

  const teamMembers = [
    { name: "Sirish Patel", title: "Chief Executive Officer" },
    { name: "Shiv Patel", title: "President" },
    { name: "Soniya Patel", title: "Vice President" },
    { name: "Chandni Dumbhalia", title: "Director of Operations" }
  ];

  return (
    <section id="about" className="py-20 bg-[#101923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Gold Coast
            <span className="block text-[#FFA233]">Hospitality Management</span>
          </h2>
        </div>

        {/* Company Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Founded in 1993 with a single budget motel in Auburn, NY, Gold Coast Hospitality Management has grown into a trusted leader in limited-service hospitality operations. Headquartered in Long Island, New York, we specialize in managing a diverse portfolio of franchised and independently operated properties.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our success is built on decades of hands-on experience in all facets of the industry—including daily hotel operations, construction and renovation, franchise negotiations, and brand conversions. At Gold Coast Hospitality Management, we bring a strategic, results-driven approach to every property we manage, with a focus on operational excellence, guest satisfaction, and long-term value.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Professional hospitality team meeting"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#FFA233] text-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <Award size={32} />
                <div>
                  <div className="font-bold text-lg">Industry Leader</div>
                  <div className="text-orange-100">Since 1993</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Vision</h3>
          <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Our vision goes beyond day-to-day operations. We are committed to building strong partnerships, adapting to evolving guest expectations, and positioning our properties for sustainable growth in an ever-changing hospitality landscape. We see every hotel as more than a business—it's an opportunity to create lasting impressions, build community trust, and elevate the guest experience. At Gold Coast Hospitality Management, we don't just manage properties—we shape their potential.
            </p>
          </div>
        </div>

        {/* Achievements Section - moved here for better flow */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#FFA233]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="text-[#FFA233]" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{achievement.title}</h4>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Leadership Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="bg-[#FFA233]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-[#FFA233]" size={32} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{member.name}</h4>
                <p className="text-[#FFA233] font-medium text-sm">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#FFA233]/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="text-[#FFA233]" size={24} />
              </div>
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
