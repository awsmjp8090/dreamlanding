import React, { useState } from 'react';
import { Mail, Phone, Clock, MessageCircle, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    platform: 'whatsapp' // default to WhatsApp
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `
New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
    `.trim();

    const whatsappNumber = '+919550138090';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-white mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a 
                    href="mailto:info@dreamlanding.co.uk" 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    info@dreamlanding.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-white" />
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <a 
                    href="tel:+442012345678" 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    +44 (20) 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-white mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Business Hours</h3>
                  <div className="text-blue-100">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-white focus:border-white text-white placeholder-white/60"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-white focus:border-white text-white placeholder-white/60"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-white focus:border-white text-white placeholder-white/60"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-white focus:border-white text-white placeholder-white/60"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 px-6 rounded-md hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}