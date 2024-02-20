import React, { useState } from "react";
import axios from "../api/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logoGame.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ error: false, message: "" });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      const response = await axios.post("/login", userData);
      console.info(response);
      navigate("/simonsays");
    } catch (error) {
      setError({ error: true, message: error.response.data.data.error });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData((prevData) => ({
      ...prevData,
      email: email,
      password: password,
    }));
  };

  useEffect(() => {
    if (!userData.email || !userData.password) return;

    loginUser();
  }, [userData]);

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 gap-6 bg-neutral-900">
        <div>
          <img src={logo} alt="" className="w-40 h-40" />
        </div>
        {error.error && (
          <div
            className="p-4 mb-4 text-sm absolute right-2 top-2 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <span className="font-medium">{error.message}</span>
          </div>
        )}
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-gradient-to-r from-yellow-500 via-red-500 to-emerald-500 shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <button
          onClick={() => navigate("/register")}
          className="bg-gradient-to-r from-yellow-500 via-red-500 to-emerald-500 text-white p-2 rounded-xl hover:bg-neutral-400 duration-300 font-bold w-[200px] h-[50px] "
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Login;
