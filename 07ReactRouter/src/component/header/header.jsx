import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow-lg sticky top-0 z-50">
            <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 px-4 lg:px-6 py-3.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12 transform hover:scale-105 transition-all duration-300"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-white font-medium rounded-lg px-4 py-2 lg:px-5 transition-transform duration-300 hover:scale-105 hover:bg-gray-900"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-gradient-to-r from-orange-500 to-pink-500 font-medium rounded-lg px-4 py-2 lg:px-5 transition-transform duration-300 hover:scale-105 hover:opacity-80"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden lg:flex justify-between items-center w-full lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex space-x-8 font-medium text-white">
                            <li>
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 transition-all duration-200 ${isActive ? 'text-orange-700' : 'text-white'} hover:text-orange-500`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 transition-all duration-200 ${isActive ? 'text-orange-700' : 'text-white'} hover:text-orange-500`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 transition-all duration-200 ${isActive ? 'text-orange-700' : 'text-white'} hover:text-orange-500`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Github"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 transition-all duration-200 ${isActive ? 'text-orange-700' : 'text-white'} hover:text-orange-500`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
