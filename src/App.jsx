import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-green-600">Inside 'N Out</h1>
        <div className="space-x-4">
          <a href="#services" className="text-black hover:text-green-500">Services</a>
          <a href="#gallery" className="text-black hover:text-green-500">Gallery</a>
          <a href="#contact" className="text-black hover:text-green-500">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-500 text-white text-center py-20">
        <h2 className="text-5xl font-bold">Transform Your Property – Inside and Out</h2>
        <p className="mt-4 text-lg">Reliable, affordable, and professional cleaning & landscaping services.</p>
        <a href="#contact" className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">Get Your Free Estimate</a>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <h2 className="text-4xl text-center font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">Residential Cleaning</h3>
            <p>Standard, deep cleaning, and move-in/move-out services.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">Landscaping & Lawn Care</h3>
            <p>Mowing, trimming, and seasonal landscaping.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">Commercial Cleaning</h3>
            <p>Office cleaning and property maintenance.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <h2 className="text-4xl text-center font-bold mb-10">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="/images/landscape1.jpg" alt="Lawn Care" className="rounded-lg shadow-md" />
          <img src="/images/cleaning1.jpg" alt="House Cleaning" className="rounded-lg shadow-md" />
          <img src="/images/landscape2.jpg" alt="Landscaping" className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-green-500 text-white py-16">
        <h2 className="text-4xl text-center font-bold mb-8">Contact Us</h2>
        <div className="flex flex-col items-center">
          <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
            <label className="block text-gray-700 font-bold">Name:</label>
            <input type="text" className="w-full p-2 mb-4 border rounded" placeholder="Your Name" />

            <label className="block text-gray-700 font-bold">Email:</label>
            <input type="email" className="w-full p-2 mb-4 border rounded" placeholder="Your Email" />

            <label className="block text-gray-700 font-bold">Message:</label>
            <textarea className="w-full p-2 mb-4 border rounded" placeholder="Your Message"></textarea>

            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 Inside 'N Out Complete Property Cleaning Service | Tucson, AZ</p>
      </footer>
    </div>
  );
};

export default App;

