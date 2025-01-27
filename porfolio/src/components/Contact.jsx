import React, { useState } from 'react';

function Contact() {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    // State to manage feedback messages
    const [feedback, setFeedback] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://portfolio-api-five-plum.vercel.app/api/queries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setFeedback('Form submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                });
            } else {
                setFeedback(result.error || 'Failed to submit query. Please try again.');
            }
        } catch (error) {
            setFeedback('An error occurred while submitting the form.');
        }
    };

    return (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20 mb-10">
            <h1 className="text-3xl font-bold mb-6">Feel free to contact</h1>
            <p className="text-gray-700 mb-10">
                If you have any questions, project inquiries, or suggestions, feel free to reach out. I'll be happy to assist!
            </p>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                {feedback && (
                    <div
                        className={`mb-6 p-4 rounded-md ${
                            feedback.includes('successfully')
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
                        }`}
                    >
                        {feedback}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.phone}
                            onChange={handleChange}
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
                            value={formData.subject}
                            onChange={handleChange}
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
                            value={formData.message}
                            onChange={handleChange}
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
