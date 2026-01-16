import React from 'react';
import { Link } from 'react-router-dom';


export default function About() {
    return (
        <div className="w-full max-w-7xl mx-auto sm:py-20 py-12 px-4 sm:px-8">

            <section className="bg-gradient-to-br from-blue-600 via-teal-500 to-green-400 text-white rounded-lg py-24 px-8">
                <div className="text-center space-y-6 sm:space-y-8">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight transform transition-all duration-500 hover:scale-105">
                        About Us
                    </h2>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
                        We are a passionate team committed to bringing the best tech solutions to simplify your life. Our mission is to innovate, disrupt, and create exceptional experiences that cater to your every need.
                    </p>
                </div>
            </section>

            <section className="sm:mt-28 mt-12 text-center space-y-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                    <div className="relative group rounded-lg overflow-hidden shadow-xl">
                        <img
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300"
                            src="https://cdn.dribbble.com/users/63407/screenshots/5720287/media/249a358bb7ab9106489998bfafeeb90c.png"
                            alt="Our Team"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-2xl font-semibold">Our Team</p>
                        </div>
                    </div>
                    <div className="relative group rounded-lg overflow-hidden shadow-xl">
                        <img
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300"
                            src="https://cdn.dribbble.com/users/63407/screenshots/5720287/media/249a358bb7ab9106489998bfafeeb90c.png"
                            alt="Our Vision"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-2xl font-semibold">Our Vision</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sm:mt-28 mt-16">
                <div className="bg-gradient-to-l from-purple-600 via-pink-500 to-red-500 text-white rounded-lg py-16 px-8">
                    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                        <h3 className="text-3xl sm:text-4xl font-bold text-center tracking-tight">
                            Our Commitment to You
                        </h3>
                        <p className="text-lg sm:text-xl opacity-90">
                            At our core, we believe in customer-first innovation. We focus on creating solutions that are not only functional but also intuitive and enjoyable to use. Our team is always pushing boundaries to create a better future for all.
                        </p>
                    </div>
                </div>
            </section>

            <section className="sm:mt-28 mt-16 text-center">
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Join Us On This Journey</h3>
                <p className="text-lg sm:text-xl opacity-80 mb-12">
                    We're always looking for passionate individuals to join our mission. Let's work together to create innovative solutions that matter.
                </p>
                <Link
                    to="#"
                    className="inline-flex items-center px-8 py-4 font-medium text-black bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 rounded-full transform hover:scale-105 transition duration-300"
                >
                    Get In Touch
                </Link>
            </section>

        </div>
    );
}
