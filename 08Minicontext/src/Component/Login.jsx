import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setUser({ Username, Password });
  };

  return (
    <div className="text-blue flex items-center justify-center mt-6 bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-yellow p-8 rounded-lg shadow-xl w-full border border-gray-300">
        <h2 className="text-2xl font-semibold text-center m-3 text-gray-800">Login</h2>
        <input
          type="text"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-4 py-2 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={HandleSubmit}
          className="w-full py-2 bg-blue-600 text-yellow rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
