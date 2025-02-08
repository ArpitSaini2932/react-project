import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-600 text-white py-12">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">User Profile</h2>
        <p className="text-lg font-medium text-gray-600 mb-6">Welcome to the profile of</p>
        <div className="text-4xl font-semibold text-teal-500">{userId}</div>
        <p className="text-sm text-gray-500 mt-4">This is where user details and interactions will appear. Stay tuned!</p>
      </div>
    </div>
  );
}

export default User;
