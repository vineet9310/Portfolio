import React from 'react';
import ResumePDF from '../assets/Vineet_Kumar_Beniwal_Resume.pdf';

function Resume() {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="bg-purple-100 shadow-md rounded-lg mt-6 sm:mt-10 p-4 sm:p-6 md:p-10">
          {/* Header Section */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">Vineet Kumar Beniwal</h3>
            <p className="text-lg sm:text-xl text-gray-600">Web Developer</p>
            <div className="mt-4">
              <p className="text-sm sm:text-base">
                Email: <a href="mailto:vineetbeniwal9310@gmail.com" className="text-blue-600">vineetbeniwal9310@gmail.com</a>
              </p>
              <p className="text-sm sm:text-base">
                Phone: <a href="tel:9310666181" className="text-blue-600">9310666181</a>
              </p>
              <p className="text-sm sm:text-base">Location: New Delhi</p>
              <p className="text-sm sm:text-base">
                Website: <a href="https://vineetbeniwal.in" className="text-blue-600">vineetbeniwal.in</a>
              </p>
            </div>
          </div>

          <hr className="my-4 sm:my-6 border-gray-400" />

          {/* Professional Summary */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800">Professional Summary</h4>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Passionate and highly skilled Software Developer with expertise in full-stack development, specializing in crafting
              innovative, scalable, and user-friendly applications. Adept at creating efficient solutions for diverse technical challenges
              by leveraging modern programming languages, frameworks, and database technologies. Strong focus on writing clean,
              maintainable code and delivering exceptional user experiences.
            </p>
          </div>

          <hr className="my-4 sm:my-6 border-gray-400" />

          {/* Education Section */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800">Education</h4>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 mt-2">
              <li>Bachelor of Computer Applications (BCA) - IGNOU, Delhi</li>
              <li>Advance Diploma in Software Technologies (DAST) - NSIC, Delhi</li>
              <li>Big Data Analytics - Samsung Innovation Campus, Delhi</li>
              <li>Intermediate (12th Grade) - NIOS</li>
              <li>Secondary School (10th Grade) - Florence Public School (CBSE)</li>
            </ul>
          </div>

          <hr className="my-4 sm:my-6 border-gray-400" />

          {/* Experience Section */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800">Experience</h4>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              <strong>Frontend Developer | The Drone Destination Limited</strong><br />
              Apr 2023 - Apr 2025
            </p>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 mt-2">
              <li>Developed and optimized responsive frontend components using HTML, CSS, JavaScript, React.js, and jQuery.</li>
              <li>Integrated third-party APIs to enhance backend capabilities.</li>
              <li>Maintained source control systems like Git and SVN for streamlined project collaboration.</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              <strong>Website Developer | Astroveda Service Private Limited</strong><br />
              Apr 2025 - Present
            </p>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 mt-2">
              <li>Contributed to the development and maintenance of Companies website, a live astrology consultation platform.</li>
              <li>Implemented responsive UI components, integrated APIs, and optimized performance for both desktop and mobile users.</li>
              <li>Collaborated on feature rollouts such as booking workflows, content sections, user authentication, and real-time chat functionality.</li>
            </ul>
          </div>

          <hr className="my-4 sm:my-6 border-gray-400" />

          {/* Certifications Section */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800">Certifications</h4>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 mt-2">
              <li>Advance Diploma in Software Technologies (DAST) - NSIC</li>
              <li>Linux Certification - NSIC</li>
              <li>Data Analyst Certification - Samsung Innovation Campus</li>
              <li>NIELIT M1-R5 - Government of India</li>
            </ul>
          </div>

          <hr className="my-4 sm:my-6 border-gray-400" />

          {/* Technical Skills Section */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800">Technical Skills</h4>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 mt-2">
              <li><strong>Programming Languages:</strong> HTML, CSS, JavaScript, Node.js, Java, Python</li>
              <li><strong>Libraries/Frameworks:</strong> React.js, Express.js, Axios, Mongoose</li>
              <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
              <li><strong>Tools & Platforms:</strong> Git, Visual Studio Code, npm, Firebase Studio, Shopify</li>
            </ul>
          </div>

          <hr className="my-4 sm:my-6 border-gray-400" />

          {/* Additional Skills Section */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800">Additional Skills</h4>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 mt-2">
              <li>Frontend Development: Responsive web design, user interface optimization.</li>
              <li>Backend Development: API integration, database schema design.</li>
              <li>Data Analytics: Proficient in big data tools and processes for actionable insights.</li>
              <li>Version Control: Experienced with Git for collaborative development.</li>
              <li>Problem Solving: Strong analytical skills with a focus on clean, maintainable code.</li>
              <li>Skilled in designing and developing custom e-commerce stores on the Shopify platform.</li>
            </ul>
          </div>

          <hr className="my-4 sm:my-6 border-gray-400" />

          {/* Download Button */}
          <div className="text-center">
            <a
              href={ResumePDF} // Reference the imported PDF
              download="Vineet_Kumar_Beniwal_Resume.pdf"
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
