
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
                  <div className="text-gray-300">contact@premiumstay.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-300">123 Hospitality Avenue<br />New York, NY 10001</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-amber-400">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors duration-200"
              />
              <textarea 
                rows={5}
                placeholder="Your Message"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors duration-200 resize-none"
              ></textarea>
              <button 
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center group"
              >
                Send Message
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
