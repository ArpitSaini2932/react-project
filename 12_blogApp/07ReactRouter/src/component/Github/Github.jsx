import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  
  return (
    <div className="w-full max-w-7xl mx-auto sm:py-20 py-12 px-4 sm:px-8">
      <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-lg py-24 px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight transform transition-all duration-500 hover:scale-105">
            GitHub Profile
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
            Check out my public repositories and get a sneak peek into my work!
          </p>
        </div>
      </section>

      <section className="sm:mt-28 mt-16 text-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <img className="w-36 h-36 rounded-full border-4 border-white shadow-lg" src={data.avatar_url} alt="GitHub Avatar" />
          </div>

          <h3 className="text-3xl font-semibold text-gray-800 mb-4">{data.name}</h3>
          <p className="text-lg text-gray-600 mb-6">{data.bio || "No bio available"}</p>

          <div className="flex justify-center items-center gap-6 text-lg font-medium text-gray-700">
            <div className="text-center">
              <p className="text-xl font-semibold">Public Repos</p>
              <p>{data.public_repos}</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">Followers</p>
              <p>{data.followers}</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">Following</p>
              <p>{data.following}</p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 font-medium text-white bg-gradient-to-r from-teal-400 to-teal-600 rounded-full transform hover:scale-105 transition duration-300"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Github;

export const GithubLoader = async () => {
  const request = await fetch("https://api.github.com/users/ArpitSaini2932");
  return request.json();
};
