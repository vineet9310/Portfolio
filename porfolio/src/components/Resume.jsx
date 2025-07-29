import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Resume() {
  // Create a ref to attach to the DOM element we want to capture
  const resumeRef = useRef();
  const [loading, setLoading] = useState(false);

  // Function to handle the PDF download
  const handleDownloadPdf = () => {
    const input = resumeRef.current;
    if (!input) {
      console.error("Resume element not found!");
      return;
    }

    setLoading(true); // Start loading indicator

    // Use html2canvas to capture the element
    html2canvas(input, {
      scale: 2, // Increase scale for better resolution
      useCORS: true, 
    }).then((canvas) => {
      // Get image data from the canvas
      const imgData = canvas.toDataURL('image/png');
      
      // Create a new PDF instance (A4 size)
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // Calculate the aspect ratio to fit the image in the PDF
      const ratio = canvasWidth / canvasHeight;
      const imgWidth = pdfWidth;
      const imgHeight = imgWidth / ratio;

      let heightLeft = imgHeight;
      let position = 0;

      // Add the first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Add new pages if the content is longer than one page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }
      
      // Save the generated PDF
      pdf.save('Vineet_Kumar_Beniwal_Resume.pdf');
      setLoading(false); // Stop loading indicator
    }).catch(err => {
        console.error("Error generating PDF:", err);
        setLoading(false);
    });
  };

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        {/* The ref is attached to this div, so everything inside it will be captured */}
        <div ref={resumeRef} className="bg-purple-100 shadow-md rounded-lg mt-6 sm:mt-10 p-4 sm:p-6 md:p-10">
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
                Portfolio: <a href="https://vineetbeniwal.in" className="text-blue-600">vineetbeniwal.in</a>
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
        </div>
        
        {/* Download Button - now a button that triggers the PDF generation */}
        <div className="text-center mt-8">
            <button
              onClick={handleDownloadPdf}
              disabled={loading}
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-lg hover:bg-blue-700 transition disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {loading ? 'Downloading...' : 'Download Resume'}
            </button>
        </div>
      </div>
    </section>
  );
}

export default Resume;
