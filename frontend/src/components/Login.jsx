import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../UserContext/UserContext";

export default function Login() {
  const { userName, setUserName } = useContext(userContext);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const HandleUserName = (e) => {
    setUser({
      ...user,
      username: e.target.value,
    });

    console.log(user.username);
  };

  const HandlePassword = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });

    console.log(user.password);
  };

  const areFieldsFilled = () => {
    return user.username !== "" && user.password !== "";
  };

  const HandleLogin = async () => {
    if (!areFieldsFilled()) {
      alert("Please fill all the details");
      return;
    }

    try {
      const response = await axios.get("http://localhost:7000/login");
      const datas = response.data;
      const userExists = datas.some((data) => data.username === user.username);

      if (userExists) {
        const isPasswordCorrect = datas.some(
          (data) => data.username === user.username && data.password === user.password
        );
        if (isPasswordCorrect) {
          alert("Login Successful");
          setUserName(user.username);
          navigate("/components/Accordian");
        } else {
          alert("Invalid password");
        }
      } else {
        alert("User does not exist");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Your Company" src="src\assets\DUI-logo.png" className="mx-auto h-10 w-auto" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                UserName
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  required
                  // autoComplete="email"
                  onChange={HandleUserName}
                  className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a className="font-semibold text-blue-500 hover:text-indigo-500">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={HandlePassword}
                  required
                  autoComplete="current-password"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={HandleLogin}
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <div className="text-sm mt-4">
                <a className="font-semibold ml-20 mt-4 text-blue-500 ">Don't Have an Account ? </a>
                <Link to="/signup">
                  <button className="ml-2 hover:cursor-pointer hover:text-indigo-500"> Sign up </button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
