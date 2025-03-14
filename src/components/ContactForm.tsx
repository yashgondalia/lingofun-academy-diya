
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'French Beginner',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your inquiry! We'll contact you soon about your free demo.", {
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'French Beginner',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h4 className="section-subheading reveal">GET IN TOUCH</h4>
          <h2 className="section-heading reveal stagger-1">Book Your Free Demo</h2>
          <div className="w-20 h-1 bg-lingofun-primary mx-auto my-6 rounded reveal stagger-2"></div>
          <p className="text-gray-600 reveal stagger-3">
            Book your FREE demo classes today and experience our unique teaching methodology firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info - 2 columns on large screens */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-lingofun-dark mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form and book your free demo sessions. We'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-lingofun-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lingofun-dark">Email</h4>
                    <a href="mailto:contact@lingofun.academy" className="text-gray-600 hover:text-lingofun-primary transition-colors">
                      contact@lingofun.academy
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-lingofun-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lingofun-dark">Phone</h4>
                    <a href="tel:+911234567890" className="text-gray-600 hover:text-lingofun-primary transition-colors">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-lingofun-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lingofun-dark">Location</h4>
                    <p className="text-gray-600">
                      Online classes available worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-gray-50 p-6 rounded-xl mt-12 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-lingofun-primary/20 rounded-full flex items-center justify-center text-lingofun-primary font-bold mr-4">
                  RK
                </div>
                <div>
                  <h4 className="font-medium text-lingofun-dark">Rohan Kumar</h4>
                  <p className="text-sm text-gray-600">French Student, 1 year</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The personalized approach and cultural immersion made learning French enjoyable and effective. I highly recommend LinGoFun Academy!"
              </p>
            </div>
          </div>
          
          {/* Contact form - 3 columns on large screens */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lingofun-primary/20 focus:border-lingofun-primary outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lingofun-primary/20 focus:border-lingofun-primary outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lingofun-primary/20 focus:border-lingofun-primary outline-none transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                      Interested Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lingofun-primary/20 focus:border-lingofun-primary outline-none transition-all"
                    >
                      <option value="French Beginner">French Beginner (A1)</option>
                      <option value="French Elementary">French Elementary (A2)</option>
                      <option value="French for School">French for School</option>
                      <option value="English Foundation">English Foundation</option>
                      <option value="English Advanced">English Advanced</option>
                      <option value="English for Academics">English for Academics</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lingofun-primary/20 focus:border-lingofun-primary outline-none transition-all"
                    placeholder="Tell us about your learning goals or any questions you have..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : "Book Free Demo Sessions"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
