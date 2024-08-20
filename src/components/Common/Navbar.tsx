"use client";
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{ color: 'white' }}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" style={{ color: 'white' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
          </div>

          <img src="https://i.postimg.cc/fyX6XDf9/Screenshot-2024-08-19-225804-removebg-preview.png" width={100} height={100} style={{ marginLeft: 100, marginBottom: -20, marginTop: -10, scale:0.7}} alt="vprep" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1" style={{ color: 'white' }}>
            <li><a href='/'>Home</a></li>
            <li><a href="/vprep">VAssist</a></li>
            <li><a href='/services'>Services</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

