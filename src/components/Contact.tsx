
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'service_tha7c1n';
      const templateId = 'template_h90htjv';
      const publicKey = 'C73A5pr5vwerRp0Z7';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'info@goldcoasthm.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#101923] text-white">
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
            <h3 className="text-2xl font-bold mb-8 text-[#FFA233]">Contact Information</h3>
            <div className="space-y-6">
              {/* <div className="flex items-center">
                <div className="bg-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Phone size={24} />
                </div> */}
                {/* <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-300">+1 (555) 123-4567</div>
                </div> */}
              {/* </div> */}
              
              <div className="flex items-center">
                <div className="bg-[#FFA233] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">info@goldcoasthm.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-[#FFA233] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Headquarters</div>
                  <div className="text-gray-300">New York</div>
                </div>
              </div>
            </div>

            {/* <div className="mt-12 p-6 bg-white/10 rounded-lg">
              <h4 className="text-lg font-semibold text-[#FFA233] mb-4">Setup Required</h4>
              <p className="text-sm text-gray-300 mb-4">
                To enable email functionality, please:
              </p>
              <ol className="text-sm text-gray-300 space-y-2 list-decimal list-inside">
                <li>Create a free account at <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFA233] hover:underline">EmailJS.com</a></li>
                <li>Set up an email service (Gmail, Outlook, etc.)</li>
                <li>Create an email template</li>
                <li>Replace the placeholder credentials in the code with your actual EmailJS Service ID, Template ID, and Public Key</li>
              </ol>
            </div> */}
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#FFA233]">Send a Message to Management</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFA233] transition-colors duration-200"
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
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFA233] transition-colors duration-200"
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Call Back Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFA233] transition-colors duration-200"
                />
              </div>
              <textarea 
                name="message"
                rows={5}
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFA233] transition-colors duration-200 resize-none"
              ></textarea>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-[#FFA233] hover:bg-[#FF8C00] disabled:bg-[#FFA233]/50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center group"
              >
                {isSubmitting ? 'Sending...' : 'Send Message to Management'}
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
