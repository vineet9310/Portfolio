import React from 'react'
import pic from '../../public/FrontImage.webp';
import Tilt from 'react-parallax-tilt'

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { FaGithub } from "react-icons/fa";


function Home() {
    return (
        <>
            <div className="main-content max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <span className="text-xl">Welcome In My Feed</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1>Hello, I'm a</h1>
                            <ReactTyped
                                className="font-bold"
                                strings={[
                                    `<span style="color: red;">Developer</span>`,
                                    `<span style="color: purple;">Coder</span>`,
                                    `<span style="color: green;">Programmer</span>`,
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <p className="text-lg md:text-md text-justify">
                            Transforming ideas into reality, I specialize in crafting seamless digital experiences through clean, efficient, and scalable code. As a
                            <span className="animated-text font-extrabold text-lg"> full-stack developer</span>,
                            I bring expertise in building responsive frontends and robust backends, ensuring functionality, performance, and user satisfaction. With a passion for problem-solving, I turn complex concepts into innovative, user-friendly solutions.
                        </p>


                        {/* Social Media Icons */}
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
                            {/* Available On Section */}
                            <div className="space-y-5 text-center md:text-left">
                                <h1 className="font-bold text-lg md:text-xl">Available on</h1>
                                <ul className="flex flex-wrap justify-center md:justify-start gap-3">
                                    <li>
                                        <a href="https://www.facebook.com/" target="blank">
                                            <FaSquareFacebook className="text-3xl md:text-5xl text-blue-600 cursor-pointer hover:scale-110 duration-200" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="blank">
                                            <FaLinkedin className="text-3xl md:text-5xl text-blue-700 cursor-pointer hover:scale-110 duration-200" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" target="blank">
                                            <IoLogoYoutube className="text-3xl md:text-5xl text-red-600 cursor-pointer hover:scale-110 duration-200" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="blank">
                                            <FaInstagramSquare className="text-3xl md:text-5xl text-pink-500  cursor-pointer hover:scale-110 duration-200" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/vineet9310" target="blank">
                                            <FaGithub className="text-3xl md:text-5xl text-gray-800 cursor-pointer hover:scale-110 duration-200" />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Currently Working On Section */}
                            <div className="space-y-5 text-center md:text-right">
                                <h1 className="font-bold text-lg md:text-xl">Currently working on</h1>
                                <div className="flex flex-wrap justify-center md:justify-end gap-3">
                                    <SiMongodb className="text-4xl md:text-5xl text-green-500 hover:scale-110 duration-200 rounded-full border-2 border-gray-300" />
                                    <SiExpress className="text-4xl md:text-5xl text-gray-500 hover:scale-110 duration-200 rounded-full border-2 border-gray-300" />
                                    <FaReact className="text-4xl md:text-5xl text-blue-500 hover:scale-110 duration-200 rounded-full border-2 border-gray-300" />
                                    <FaNodeJs className="text-4xl md:text-5xl text-green-600 hover:scale-110 duration-200 rounded-full border-2 border-gray-300" />
                                </div>
                            </div>
                        </div>



                    </div>

                    {/* Profile Picture */}
                    <div className="flex justify-center items-center md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                        <Tilt>
                            <img
                                src={pic}
                                className="rounded-full md:w-[450px] md:h-[450px]"
                                alt="Profile"
                            />
                        </Tilt>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
