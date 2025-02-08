import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-400 to-teal-600 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h3 className="text-3xl font-bold tracking-tight">VishuTech</h3>
            <p className="text-sm mt-2">Innovating the Future with Technology</p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="transition-all duration-300 hover:text-gray-300 text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-gray-300 text-lg font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-gray-300 text-lg font-medium"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-gray-300 text-lg font-medium"
            >
              Privacy Policy
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm">VishuTech, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
