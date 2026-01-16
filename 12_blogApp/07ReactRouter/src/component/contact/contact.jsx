import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
    return (
        <div className="w-full max-w-7xl mx-auto sm:py-20 py-12 px-4 sm:px-8">

            <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg py-24 px-8">
                <div className="text-center space-y-6 sm:space-y-8">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight transform transition-all duration-500 hover:scale-105">
                        Contact Us
                    </h2>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
                        We’d love to hear from you! Whether you have a question, suggestion, or just want to chat, our team is ready to help.
                    </p>
                </div>
            </section>

            <section className="sm:mt-28 mt-16 text-center space-y-8">
                <div className="flex flex-col sm:flex-row sm:space-x-16">
                    <div className="sm:w-1/3 w-full">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Email</h3>
                        <p className="text-lg sm:text-xl text-gray-700">contact@ourcompany.com</p>
                    </div>
                    <div className="sm:w-1/3 w-full">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Phone</h3>
                        <p className="text-lg sm:text-xl text-gray-700">+123-456-7890</p>
                    </div>
                    <div className="sm:w-1/3 w-full">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Social Media</h3>
                        <p className="text-lg sm:text-xl text-gray-700">Follow us on our social media platforms.</p>
                    </div>
                </div>

                <div className="mt-12">
                    <Link
                        to="#"
                        className="inline-flex items-center px-8 py-4 font-medium text-black bg-gradient-to-r from-teal-400 to-teal-600 rounded-full transform hover:scale-105 transition duration-300"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
