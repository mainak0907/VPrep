"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6 lg:px-8">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="lg:hidden focus:outline-none" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link href="/" className="ml-4">
            <img
              src="https://i.postimg.cc/fyX6XDf9/Screenshot-2024-08-19-225804-removebg-preview.png"
              width={240}
              height={240}
              alt="VPrep"
              className="h-20 w-auto"
            />
          </Link>
        </div>
        <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 mt-4 lg:mt-0">
            <li>
              <Link href="/" className="hover:text-red-600 transition-colors duration-300 text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link href="/vassist" className="hover:text-red-600 transition-colors duration-300 text-xl">
                VAssist
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-600 transition-colors duration-300 text-xl">
                Services
              </Link>
            </li>
            <li>
              <Link href="https://v-prep-ticketing-service-client-side.vercel.app/" className="hover:text-red-600 transition-colors duration-300 text-xl">
                Ticketing Service
              </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
