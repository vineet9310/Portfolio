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
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 mt-20">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-center mb-4 text-gray-800">
                Let's Get in Touch
            </h1>
            <p className="text-center text-sm sm:text-base text-gray-600 mb-8">
                Have questions or project ideas? Fill out the form below, and I'll get back to you shortly.
            </p>

            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 max-w-3xl mx-auto">
                {feedback && (
                    <div
                        className={`mb-6 p-4 rounded-md text-center ${
                            feedback.includes('successfully')
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
                        }`}
                    >
                        {feedback}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone Number"
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-700">
                            Subject
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    <div>
                        <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Your Message"
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md text-sm sm:text-base transition duration-300"
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
