import React from 'react';

function Contact() {
    return (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20 mb-10">
            <h1 className="text-3xl font-bold mb-6">Feel free to contact</h1>
            <p className="text-gray-700 mb-10">
                If you have any questions, project inquiries, or suggestions, feel free to reach out. I'll be happy to assist!
            </p>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                <form>
                    {/* Name */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    {/* Subject */}
                    <div className="mb-6">
                        <label htmlFor="subject" className="block text-lg font-medium text-gray-700">
                            Subject
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        >
                            <option value="">Select a subject</option>
                            <option value="project">Project</option>
                            <option value="job">Job</option>
                            <option value="business">Business</option>
                            <option value="suggestion">Suggestion</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                            Tell us about your project
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Describe your project, inquiry, or suggestion..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
