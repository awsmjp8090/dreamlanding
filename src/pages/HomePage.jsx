import React from 'react';
import { Home, GraduationCap, Phone, Calendar, Send, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/animations.css';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-blue-900/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to DreamLanding
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            We provide stress-free accommodation and career guidance services for international students in the UK
          </p>
        </div>
      </div>

      {/* About Section with Custom Graphic */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-indigo-900">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Us</h2>
          <p className="text-lg text-blue-100 max-w-2xl mb-16">
            We understand that starting your journey in the UK can be challenging. That's why DreamLanding offers a comprehensive service to help you find the perfect accommodation and start your career path.
          </p>
          
          <div className="flex items-center justify-center space-x-48 relative">
            {/* Paper Plane */}
            <div 
              className="w-32 h-32 relative" 
              style={{
                animation: 'floatToHome 4s ease-in-out infinite'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1544016768-982d1554f0b9"
                alt="Airplane"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>

            {/* Home */}
            <div 
              className="w-32 h-32 relative"
              style={{
                animation: 'floatToExpert 4s ease-in-out infinite',
                animationDelay: '2s'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09"
                alt="Home"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>

            {/* Expert Advisor */}
            <div 
              className="w-32 h-32 relative"
              style={{
                animation: 'expertFloat 4s ease-in-out infinite',
                animationDelay: '4s'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Expert Advisor"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 - Accommodation */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <img 
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af" 
                alt="Student Accommodation" 
                className="rounded-lg mb-6 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-4">Quality Accommodation</h3>
              <p className="text-blue-100">
                Find comfortable and affordable rooms in prime locations throughout the UK, carefully selected to meet your needs.
              </p>
            </div>

            {/* Service Card 2 - Career Guidance */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
                alt="Career Guidance" 
                className="rounded-lg mb-6 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-4">Career Guidance</h3>
              <p className="text-blue-100">
                Expert advice to help you start your career journey in the UK, with personalized support every step of the way.
              </p>
            </div>

            {/* Service Card 3 - Payments */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <img 
                src="https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4" 
                alt="Secure Payments" 
                className="rounded-lg mb-6 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-4">Secure Payments</h3>
              <p className="text-blue-100">
                Easy and secure payment options for your accommodation and services, with transparent pricing and no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Image */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-indigo-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact Us</h2>
              <p className="text-xl text-blue-100 mb-8">Find out if we are the best solution for you.</p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Speak to the team
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216" 
                alt="Contact Us" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}