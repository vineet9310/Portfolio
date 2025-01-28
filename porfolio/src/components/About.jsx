import React from 'react'
import python from '../../public/python-icon.svg';
import react from '../../public/reactjs-icon.svg';
import node from '../../public/nodejs-icon.svg';
import mongoDB from '../../public/mongodb-icon.svg';
import git from '../../public/git-scm-icon.svg';
import postGIS from '../../public/postgresql-icon.svg';
import java from '../../public/java-icon.svg';
import expressJS from '../../public/expressjs-icon.svg';
import MySql from '../../public/mysql-official.svg';
import VScode from '../../public/visualstudio_code-icon.svg';
import Postman from '../../public/getpostman-icon.svg';



function About() {
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <h1 className="text-4xl font-bold mb-5 pt-5">About Me</h1>
            <p className="text-l md:text-lg mb-5">
                👋 Hi, I'm <strong>Vineet Beniwal</strong> – a creative problem-solver and full-stack developer with a passion for designing modern, scalable, and efficient software. My expertise spans technologies like <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and <strong>PostgreSQL</strong>, empowering me to create dynamic web applications tailored to user and business needs. From sleek frontends to robust backends, I bring innovative ideas to life.
            </p>

            <h2 className="text-2xl text-purple-500 font-bold mb-3">🎓 Education & Training</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                    <h3 className="font-bold">🎓 IGNOU – Delhi</h3>
                    <p>Bachelor of Computer Applications (BCA)</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                    <h3 className="font-bold">📜 National Small Industries Corporation</h3>
                    <p>Advance Diploma in Software Technologies (DAST)</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                    <h3 className="font-bold">📊 Samsung Innovation Campus</h3>
                    <p>Big Data Analytics</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                    <h3 className="font-bold">🏫 Academic Achievements</h3>
                    <ul className="list-disc ml-5">
                        <li><strong>12th Grade:</strong> NIOS</li>
                        <li><strong>10th Grade:</strong> CBSE</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl text-purple-500 font-bold mt-8 mb-3">🏆 Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="p-4 bg-purple-100 rounded-lg shadow-lg">
                    <p><strong>DAST:</strong> Advance Diploma in Software Technologies (NSIC)</p>
                </div>
                <div className="p-4 bg-purple-100 rounded-lg shadow-lg">
                    <p><strong>Linux Certification:</strong> NSIC</p>
                </div>
                <div className="p-4 bg-purple-100 rounded-lg shadow-lg">
                    <p><strong>Data Analyst Certification:</strong> Samsung Innovation Campus</p>
                </div>
                <div className="p-4 bg-purple-100 rounded-lg shadow-lg">
                    <p><strong>NIELIT M1-R5:</strong> Govt. of India</p>
                </div>
            </div>

            {/* <br /> */}
            <div className="flex items-center justify-center mt-4">
                <div className="flex-grow border-t border-purple-500"></div>
                <h1 className="text-purple-500 text-center font-semibold text-xl mx-4">
                    Skills & Expertise
                </h1>
                <div className="flex-grow border-t border-purple-500"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto py-5">
                {/* Python */}
                <div className="flex items-center justify-center p-0 md:p-4 md:rounded-lg md:shadow-lg hover:scale-110 transform transition duration-200 md:border-2 md:border-purple-500">
                    <img src={python} alt="Python" className="w-12 sm:w-16 md:w-16 h-auto" />
                </div>
                {/* Java */}
                <div className="flex items-center justify-center p-0 md:p-4 md:rounded-lg md:shadow-lg hover:scale-110 transform transition duration-200 md:border-2 md:border-purple-500">
                    <img src={java} alt="Java" className="w-12 sm:w-16 md:w-16 h-auto" />
                </div>
                {/* MySQL */}
                <div className="flex items-center justify-center p-0 md:p-4 md:rounded-lg md:shadow-lg hover:scale-110 transform transition duration-200 md:border-2 md:border-purple-500">
                    <img src={MySql} alt="MySQL" className="w-12 sm:w-16 md:w-16 h-auto" />
                </div>
                {/* Git */}
                <div className="flex items-center justify-center p-0 md:p-4 md:rounded-lg md:shadow-lg hover:scale-110 transform transition duration-200 md:border-2 md:border-purple-500">
                    <img src={git} alt="Git" className="w-12 sm:w-16 md:w-16 h-auto" />
                </div>
                {/* PostGIS */}
                <div className="flex items-center justify-center p-0 md:p-4 md:rounded-lg md:shadow-lg hover:scale-110 transform transition duration-200 md:border-2 md:border-purple-500">
                    <img src={postGIS} alt="PostGIS" className="w-12 sm:w-16 md:w-16 h-auto" />
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {/* MongoDB */}
                <div className="flex items-center justify-center p-0 md:p-4 md:rounded-lg md:shadow-lg hover:scale-110 transform transition duration-200 md:border-2 md:border-purple-500">
                    <img src={mongoDB} alt="MongoDB" className="w-12 sm:w-16 md:w-16 h-auto" />
                </div>
                {/* ExpressJS */}
                <div className="flex items-center justify-center p-0 md:p-4 md:rounded-lg md:shadow-lg hover:scale-110 transform transition duration-200 md:border-2 md:border-purple-500">
                    <img src={expressJS} alt="ExpressJS" className="w-12 sm:w-16 md:w-16 h-auto" />
                </div>
                {/* React */}
                <div className="flex items-center justify-center p-0 md:p-4 md:rounded-lg md:shadow-lg hover:scale-110 transform transition duration-200 md:border-2 md:border-purple-500">
                    <img src={react} alt="React" className="w-12 sm:w-16 md:w-16 h-auto" />
                </div>
                {/* NodeJS */}
                <div className="flex items-center justify-center p-0 md:p-4 md:rounded-lg md:shadow-lg hover:scale-110 transform transition duration-200 md:border-2 md:border-purple-500">
                    <img src={node} alt="NodeJS" className="w-12 sm:w-16 md:w-16 h-auto" />
                </div>
            </div>

            <div className="flex items-center justify-center mt-4 mb-4">
                <div className="flex-grow border-t border-purple-500"></div>
                <h1 className="text-purple-500 text-center font-semibold text-xl mx-4">
                    Tools I use
                </h1>
                <div className="flex-grow border-t border-purple-500"></div>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                {/* VS Code */}
                <div className="flex items-center justify-center p-0 md:p-4 md:rounded-lg md:shadow-lg hover:scale-110 transform transition duration-200 md:border-2 md:border-purple-500">
                    <img src={VScode} alt="VS Code" className="w-12 sm:w-16 md:w-16 h-auto" />
                </div>
                {/* Postman */}
                <div className="flex items-center justify-center p-0 md:p-4 md:rounded-lg md:shadow-lg hover:scale-110 transform transition duration-200 md:border-2 md:border-purple-500">
                    <img src={Postman} alt="Postman" className="w-12 sm:w-16 md:w-16 h-auto" />
                </div>
            </div>
        </div>
    )
}

export default About