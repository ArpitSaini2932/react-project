import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="w-full max-w-7xl mx-auto">

            <section className="relative bg-gradient-to-br from-indigo-800 via-purple-600 to-pink-500 rounded-xl sm:mx-16 mx-4 sm:py-16 py-12 overflow-hidden">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl sm:mt-1 mt-24 text-center sm:text-left space-y-6 sm:space-y-8">
                        <h2 className="text-5xl font-extrabold text-white tracking-tight transform transition-all duration-500 hover:scale-105">
                            Download Now
                            <span className="text-pink-300 sm:block text-3xl">Lorem Ipsum - Revolutionizing Your Experience</span>
                        </h2>

                        <p className="text-lg sm:text-xl text-white opacity-90">
                            Experience the most powerful features. Download the app now and enjoy exclusive benefits.
                        </p>

                        <div className="flex justify-center sm:justify-start space-x-4">
                            <Link
                                to="#"
                                className="inline-flex text-white items-center px-8 py-4 font-medium bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 rounded-full transform hover:scale-105 transition duration-300 hover:opacity-90"
                            >
                                <svg
                                    fill="white"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                &nbsp; Download Now
                            </Link>

                            <Link
                                to="#"
                                className="inline-flex items-center px-8 py-4 font-medium text-black bg-white rounded-full transform hover:scale-105 transition duration-300 shadow-lg"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 flex justify-center items-center">
                    <img
                        className="max-w-full rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500"
                        src="https://cdn.dribbble.com/users/63407/screenshots/5720287/media/249a358bb7ab9106489998bfafeeb90c.png"
                        alt="App promotional image"
                    />
                </div>
            </section>

            <section className="sm:mt-28 mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-16">
                    <div className="relative group rounded-lg overflow-hidden shadow-lg">
                        <img
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300"
                            src="https://cdn.dribbble.com/users/63407/screenshots/5720287/media/249a358bb7ab9106489998bfafeeb90c.png"
                            alt="App Image 1"
                        />
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-xl font-semibold transition-opacity duration-300">
                            <p>App Feature 1</p>
                        </div>
                    </div>
                    <div className="relative group rounded-lg overflow-hidden shadow-lg">
                        <img
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300"
                            src="https://cdn.dribbble.com/users/63407/screenshots/5720287/media/249a358bb7ab9106489998bfafeeb90c.png"
                            alt="App Image 2"
                        />
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-xl font-semibold transition-opacity duration-300">
                            <p>App Feature 2</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-l from-indigo-900 via-purple-800 to-pink-800 py-20 mt-32 text-center text-white rounded-lg">
                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">Transform Your Experience Today</h3>
                <p className="text-lg sm:text-xl mb-8 opacity-80">
                    Don’t wait any longer! Download now and start enjoying the benefits today!
                </p>
                <Link
                    to="#"
                    className="inline-flex items-center px-8 py-4 font-medium bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 rounded-full transform hover:scale-105 transition duration-300"
                >
                    Get Started Now
                </Link>
            </section>

        </div>
    );
}
