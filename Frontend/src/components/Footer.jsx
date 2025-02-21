import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"  // Import logo from assets folder

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Logo Section */}
        <div className="mb-6">
          <img src={logo} alt="Amrapali Jobs Logo" className="max-w-xs mx-auto" />
        </div>

        {/* About Section */}
        <div className="mb-6">
          <p className="text-lg">Connecting Amrapali College Students with Top Career Opportunities</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://www.facebook.com/AmrapaliCollege" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com/AmrapaliCollege" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/school/amrapali-college" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-700">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/amrapali_college" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>

        {/* Contact Section */}
        <div>
          <p className="text-sm mb-2">Contact Us: <a href="mailto:info@amrapalijobs.com" className="text-white hover:text-blue-400">info@amrapalijobs.com</a></p>
          <p className="text-sm">&copy; 2025 Amrapali Jobs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
