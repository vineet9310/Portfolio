import React, { useState } from "react";
import python from "../../public/python-icon.svg";
import react from "../../public/reactjs-icon.svg";
import node from "../../public/nodejs-icon.svg";
import mongoDB from "../../public/mongodb-icon.svg";
import git from "../../public/git-scm-icon.svg";
import java from "../../public/java-icon.svg";
import expressJS from "../../public/expressjs-icon.svg";
import MySql from "../../public/mysql-official.svg";
import imageedit from "../../public/imageedit.svg";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const cardItem = [
    {
      id: 1,
      logo: imageedit,  
      name: "SnapEditify",
      category: "Frontend",
      github: "https://github.com/vineet9310/image-editor-react.git",
      preview: "https://image-editor-react-rust.vercel.app/",
    },
    {
      id: 2,
      logo: python,
      name: "Python",
      category: "Programming",
      github: "https://github.com/your-repo/python-project",
      preview: "https://python-project-demo.com",
    },
    // {
    //   id: 3,
    //   logo: react,
    //   name: "ReactJS",
    //   category: "Frontend",
    //   github: "https://github.com/your-repo/reactjs-project",
    //   preview: "https://reactjs-project-demo.com",
    // },
    // {
    //   id: 4,
    //   logo: node,
    //   name: "Node.js",
    //   category: "Backend",
    //   github: "https://github.com/your-repo/nodejs-project",
    //   preview: "https://nodejs-project-demo.com",
    // },
    // {
    //   id: 5,
    //   logo: git,
    //   name: "Git",
    //   category: "Version Control",
    //   github: "https://github.com/your-repo/git-project",
    //   preview: "https://git-project-demo.com",
    // },
    // {
    //   id: 6,
    //   logo: java,
    //   name: "Java",
    //   category: "Programming",
    //   github: "https://github.com/your-repo/java-project",
    //   preview: "https://java-project-demo.com",
    // },
    // {
    //   id: 7,
    //   logo: expressJS,
    //   name: "Express.js",
    //   category: "Backend",
    //   github: "https://github.com/your-repo/expressjs-project",
    //   preview: "https://expressjs-project-demo.com",
    // },
    // {
    //   id: 8,
    //   logo: MySql,
    //   name: "MySQL",
    //   category: "Database",
    //   github: "https://github.com/your-repo/mysql-project",
    //   preview: "https://mysql-project-demo.com",
    // },
    // Add more items as needed
  ];
  

  const filteredItems =
    selectedCategory === "All"
      ? cardItem
      : cardItem.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-1">Creative Projects</h1>
          <p className="text-gray-400 text-base sm:text-lg">
          A showcase of the projects I’ve built, highlighting the technologies I’ve worked with and the problems I’ve solved.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-4 ">
          {["All", "Frontend", "Backend", "Programming", "Tools", "Database"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 text-sm sm:text-base rounded-lg ${selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300"
                } hover:bg-purple-500 transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map(({ id, logo, name, github, preview }) => (
            <div
              key={id}
              className="relative group bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-semibold text-center mb-2">{name}</h2>
              <p className="text-gray-400 text-center text-sm sm:text-base mb-4">
                Discover how {name} powers modern applications.
              </p>
              <div className="absolute inset-0 bg-purple-700 bg-opacity-90 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold">{name}</h3>
                <p className="text-gray-200 text-sm mb-4">
                  Explore the project for {name}.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-3 py-2 text-sm rounded-lg shadow-md hover:bg-gray-600 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-3 py-2 text-sm rounded-lg shadow-md hover:bg-blue-600 transition"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
