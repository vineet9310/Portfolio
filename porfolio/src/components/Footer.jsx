import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Left Section */}
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Let’s Talk</h2>
                        <p className="text-gray-400 mb-6">
                            Every project starts with a chat. I’m open to discussing software development projects, freelance work, or collaboration opportunities. Let’s create something amazing together!
                        </p>
                        <button
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition"
        onClick={() => navigate('/contact')} // Navigate to Contact page on click
      >
        Tell us about your project
      </button>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col md:items-start md:space-y-6">
                        {/* Contact Details */}
                        <div className="space-y-4 text-left">
                            <p>
                                <span className="font-bold text-white">Email : </span>
                                <a href="mailto:vineetbeniwal9310@gmail.com" className="text-blue-400 hover:text-blue-500 transition">
                                    vineetbeniwal9310@gmail.com
                                </a>
                            </p>
                            <p>
                                <span className="font-bold text-white">Phone : </span>
                                <a href="tel:+919310666181" className="text-blue-400 hover:text-blue-500 transition">
                                    +91 9310666181
                                </a>
                            </p>
                            <p>
                                <span className="font-bold text-white">Address : </span>
                                <span className="text-gray-300">New Delhi, INDIA</span>
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-6">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                                <FaTwitter className="text-2xl text-blue-400 hover:text-blue-500" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                                <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-700" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                                <FaLinkedinIn className="text-2xl text-blue-700 hover:text-blue-800" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
