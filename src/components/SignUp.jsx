import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {

   const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    occupation: "",
    password: "",
  });

  const HandleUserName = (e) => {
    setUser({
      ...user,
      username: e.target.value,
    });
  };
  const HandleEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };
  const HandleUserType = (e) => {
    setUser({
      ...user,
      occupation: e.target.value,
    });
  };
  const HandlePassword = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const areFieldsFilled = () => {
    return user.username !== "" && user.email !== "" && user.occupation !== "" && user.password !== "";
  };

  const IfUserExists = async () => {
    try {
      const response = await axios.get("http://localhost:7000/login");
      const datas = response.data;
      return datas.some((data) => data.password === user.password && data.email === user.email);
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("An error occurred while checking user existence.");
      return true; // Prevents further processing in case of an error
    }
  };

  const HandleSubmit = async () => {
    if (!areFieldsFilled()) {
      alert("Please fill all the details");
      return;
    }

    const userExists = await IfUserExists();

    if (userExists) {
      alert("Account Already Exists");
    } else {
      try {
        await axios.post("http://localhost:7000/signup", user);
        alert("Registration Successful");
        navigate("/buttons")
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred during registration.");
      }
    }
  };

  return (
    <div className="flex  w-[500px] ml-96 border-gray-100 min-h-full flex-1  flex-col justify-center   lg:px-8">
      <div className="sm:mx-auto sm:max-w-sm">
        {/* <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        /> */}
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up for an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                onChange={HandleUserName}
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                onChange={HandleEmail}
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="userType" className="block text-sm font-medium leading-6 text-gray-900">
              Account Type
            </label>
            <div className="mt-2">
              <select
                id="userType"
                name="userType"
                required
                onChange={HandleUserType}
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select an option</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="organization">Organization</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                onChange={HandlePassword}
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={HandleSubmit}
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
            <div className="text-sm mt-4 text-center">
              <span className="font-semibold text-gray-900">Already have an account?</span>
              <Link to="/login">
                <button className="ml-2 font-semibold text-blue-500 hover:text-indigo-500" href="/signin">
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
