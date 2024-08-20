import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm mb-2">
          © {new Date().getFullYear()} VPrep. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
