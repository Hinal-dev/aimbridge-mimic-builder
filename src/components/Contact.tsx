
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your hospitality experience? Let's discuss how we can help transform your property.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-amber-400">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-300">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">contact@goldcoasthm.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-semibold">Headquarters</div>
                  <div className="text-gray-300">Long Island, New York</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-amber-400">Send a Message to Management</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Call Back Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                />
              </div>
              <textarea 
                name="message"
                rows={5}
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors duration-200 resize-none"
              ></textarea>
              <button 
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center group"
              >
                Send Message to Management
                <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
