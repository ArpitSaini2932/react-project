import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { User } = useContext(UserContext);
    console.log("user", User);

    if (!User) return (
        <div className="flex items-center justify-center p-7 bg-gray-100">
            <div className="text-gray-600 text-lg">Please Login</div>
        </div>
    );

    return (
        <div className="flex justify-center bg-gray-100">
            <div className="bg-white  rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-xl text-black p-7 font-semibold">Welcome, {User.Username}!</h2>
            </div>
        </div>
    );
}

export default Profile;
