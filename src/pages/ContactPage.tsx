import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-6 dark:text-white">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold dark:text-white">Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 College Road<br />
                        Chennai, Tamil Nadu<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+91 1234567890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">info@patriciancollege.edu</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 dark:bg-gray-700 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-red-700 dark:text-red-400">Emergency Contacts</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-red-600" size={20} />
                    <div>
                      <p className="font-semibold dark:text-white">Security</p>
                      <p className="text-red-600 dark:text-red-400">+91 9876543210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-red-600" size={20} />
                    <div>
                      <p className="font-semibold dark:text-white">Medical Emergency</p>
                      <p className="text-red-600 dark:text-red-400">+91 9876543211</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-6 dark:text-white">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Facebook className="text-blue-600 dark:text-blue-400" size={24} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Twitter className="text-blue-600 dark:text-blue-400" size={24} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Instagram className="text-blue-600 dark:text-blue-400" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}