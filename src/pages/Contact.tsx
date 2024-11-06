import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-stone-800" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Culinary Ave, New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-stone-800" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-stone-800" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@culinaryhaven.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-stone-800" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-600">Monday - Sunday: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 bg-gray-200 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280949922!2d-74.11976341738281!3d40.70562793595433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756246!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-serif mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-stone-800 text-white rounded-md hover:bg-stone-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;