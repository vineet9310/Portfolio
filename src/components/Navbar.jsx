import React, { useState } from 'react';
import pic from '../../public/Logo.webp';
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
    const [menu, setMenu] = useState(false);

    const navItems = [
        {
            id: 1,
            text: "Home",
            path: "/",
        },
        {
            id: 2,
            text: "About",
            path: "/about",
        },
        {
            id: 3,
            text: "Projects",
            path: "/portfolio",
        },
        {
            id: 4,
            text: "Experience",
            path: "/experience",
        },
        {
            id: 5,
            text: "Contact",
            path: "/contact",
        },
    ];

    return (
        <>
            <div className="w-full fixed top-0 left-0 bg-white shadow-lg z-50">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
                    {/* Left Section: Logo and Title */}
                    <div className="flex items-center space-x-3">
                        <img src={pic} className="h-12 w-12 rounded-full" alt="Logo" />
                        <div>
                            <h1 className="font-semibold text-xl cursor-pointer text-gray-800">
                                Vinee<span className="text-purple-500 text-2xl">t</span>
                            </h1>
                            <p className="text-sm text-gray-600">Web Developer</p>
                        </div>
                    </div>

                    {/* Right Section: Navigation Items */}
                    <div className="hidden md:flex">
                        <ul className="flex space-x-8">
                            {navItems.map(({ id, text, path }) => (
                                <li
                                    key={id}
                                    className="relative group text-lg md:text-xl font-medium cursor-pointer hover:scale-110 duration-300"
                                >
                                    <Link
                                        to={path}
                                        className="text-gray-700 hover:text-purple-500 duration-300"
                                    >
                                        {text}
                                    </Link>
                                    {/* Underline Effect */}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-500 group-hover:w-full duration-300"></span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div
                        onClick={() => setMenu(!menu)}
                        className="md:hidden text-gray-800 cursor-pointer"
                    >
                        {menu ? <IoClose size={28} /> : <AiOutlineMenuFold size={28} />}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menu && (
                    <div className="bg-white absolute top-16 left-0 w-full shadow-md z-40">
                        <ul className="flex flex-col items-center justify-center space-y-6 py-6 text-lg">
                            {navItems.map(({ id, text, path }) => (
                                <li
                                    key={id}
                                    className="font-medium cursor-pointer text-gray-700 hover:text-purple-500 hover:scale-105 duration-200"
                                >
                                    <Link to={path} onClick={() => setMenu(false)}>
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>


        </>
    );
}

export default Navbar;
