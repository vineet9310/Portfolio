import React from "react";
import GitHubCalendar from "react-github-calendar";
import Tilt from "react-parallax-tilt";
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

const Home = () => {
    return (
        <>
            <div className="main-content max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div className="flex flex-col md:flex-row">
                    {/* Left Content */}
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <span className="text-lg sm:text-xl">Welcome To My Feed</span>
                        <div className="flex space-x-1 text-xl sm:text-2xl md:text-4xl">
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
                        <p className="text-base sm:text-lg md:text-md text-justify">
                            Transforming ideas into reality, I specialize in crafting seamless digital experiences through clean, efficient, and scalable code. As a
                            <span className="animated-text font-extrabold text-md sm:text-lg">
                                full-stack developer
                            </span>
                            , I bring expertise in building responsive frontends and robust backends, ensuring functionality, performance, and user satisfaction. With a passion for problem-solving, I turn complex concepts into innovative, user-friendly solutions.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
                            {/* Available On Section */}
                            <div className="space-y-5 text-center md:text-left">
                                <h1 className="font-bold text-md sm:text-lg md:text-xl">
                                    Available on
                                </h1>
                                <ul className="flex flex-wrap justify-center md:justify-start gap-3">
                                    <li>
                                        <a href="https://www.facebook.com/" target="blank">
                                            <FaSquareFacebook className="text-2xl sm:text-3xl md:text-5xl text-blue-600 cursor-pointer hover:scale-110 duration-200" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="blank">
                                            <FaLinkedin className="text-2xl sm:text-3xl md:text-5xl text-blue-700 cursor-pointer hover:scale-110 duration-200" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" target="blank">
                                            <IoLogoYoutube className="text-2xl sm:text-3xl md:text-5xl text-red-600 cursor-pointer hover:scale-110 duration-200" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="blank">
                                            <FaInstagramSquare className="text-2xl sm:text-3xl md:text-5xl text-pink-500 cursor-pointer hover:scale-110 duration-200" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/vineet9310" target="blank">
                                            <FaGithub className="text-2xl sm:text-3xl md:text-5xl text-gray-800 cursor-pointer hover:scale-110 duration-200" />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Currently Working On Section */}
                            <div className="space-y-5 text-center md:text-right">
                                <h1 className="font-bold text-md sm:text-lg md:text-xl">
                                    Currently working on
                                </h1>
                                <div className="flex flex-wrap justify-center md:justify-end gap-3">
                                    <SiMongodb className="text-3xl sm:text-4xl md:text-5xl text-green-500 hover:scale-110 duration-200 rounded-full border-2 border-gray-300" />
                                    <SiExpress className="text-3xl sm:text-4xl md:text-5xl text-gray-500 hover:scale-110 duration-200 rounded-full border-2 border-gray-300" />
                                    <FaReact className="text-3xl sm:text-4xl md:text-5xl text-blue-500 hover:scale-110 duration-200 rounded-full border-2 border-gray-300" />
                                    <FaNodeJs className="text-3xl sm:text-4xl md:text-5xl text-green-600 hover:scale-110 duration-200 rounded-full border-2 border-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Picture */}
                    <div className="flex justify-center items-center md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                        <Tilt>
                            <img
                                src="/FrontImage.webp" // Direct path to public folder
                                className="rounded-full md:w-[300px] sm:w-[200px] w-[150px] md:h-[300px] sm:h-[200px] h-[150px]"
                                alt="Profile"
                            />
                        </Tilt>
                    </div>
                </div>

                {/* GitHub Contributions Section */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-8 mb-8 text-black-700">
                    My <span className="text-purple-600">GitHub</span> Contributions
                </h2>
                <div className="bg-gray-800 p-6 sm:p-10 rounded-xl shadow-lg my-10 mx-auto max-w-8xl">
                    <div className="flex justify-center text-white">
                        <GitHubCalendar
                            username="vineet9310"
                            blockSize={12} // Decrease for smaller screens
                            blockMargin={4} // Adjust margin for better spacing
                            color="#c084f5"
                            fontSize={12} // Smaller font size for small screens
                        />
                    </div>
                    <p className="text-center text-gray-400 mt-4 sm:mt-8">
                        Data powered by{" "}
                        <a
                            href="https://github.com/vineet9310"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            GitHub
                        </a>.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
