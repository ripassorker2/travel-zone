import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-gray-900 shadow font-serif">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link>
                <h2 className="text-3xl font-bold text-white">Travel Zone</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center text-lg space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <Link to={"/home"}>Home</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to={"/service"}>Services</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to={"/about"}>About</Link>
                </li>
              </ul>

              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                {user?.uid ? (
                  <>
                    <p className=" text-white hover:text-indigo-200 text-lg ">
                      {user?.displayName}
                    </p>
                    <Link
                      to={"/"}
                      className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                      <button onClick={logOut}>Sign Out</button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to={"/login"}
                      className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                      Sign In
                    </Link>
                    <Link
                      to={"/resister"}
                      className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-flex items-center">
            {user?.uid ? (
              <>
                <p className=" text-white hover:text-indigo-200 text-lg ">
                  {user?.displayName}
                </p>
                <img
                  src={user?.photoURL}
                  alt=""
                  className=" text-white hover:text-indigo-200 text-lg "
                  style={{ height: "40px", borderRadius: "50%" }}
                />

                <Link
                  to={"/"}
                  className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  <button onClick={logOut}>Sign Out</button>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={"/login"}
                  className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Sign In
                </Link>
                <Link
                  to={"/resister"}
                  className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
