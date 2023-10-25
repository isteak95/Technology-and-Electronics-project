import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState('dark'); // Initially, set it to 'dark'

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="py-10 shadow-md bg-black">
      <div className={`navbar bg-base-100 ${theme === 'light' ? 'text-black' : ''}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'bg-teal-600' : ''
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addproduct"
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? ' bg-teal-600' : ''
                  }
                >
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mycart"
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? ' bg-teal-600' : ''
                  }
                >
                  My Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <img className="rounded-[700px] h-8" src="https://i.ibb.co/smfMjNm/Screenshot-2023-10-25-063927.png" alt="Screenshot-2023-10-25-063927" border="0" />
          <a className="btn btn-ghost normal-case text-xl">TechTitanium</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? ' bg-teal-600' : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mx-3">
              <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? ' bg-teal-600' : ''
                }
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mycart"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? ' bg-teal-600' : ''
                }
              >
                My Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:gap-8 gap-2">
          <button className="btn mr-3" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          {user ? (
            <React.Fragment>
              <div className="flex items-center gap-4">
                <div className="lg:text-bold lg:text-xl lg:px-4">
                  <img
                    src={user.photoURL}
                    alt={`${user.displayName}'s profile`}
                    className="h-10 w-10 rounded-full mr-2"
                  />
                </div>
                <div className="btn lg:text-bold lg:text-xl lg:px-4 bg-teal-600">
                  {user.displayName}
                </div>
              </div>
              <div
                className="btn lg:text-bold lg:text-xl lg:px-4 cursor-pointer"
                onClick={logOut}
              >
                Logout
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <NavLink to="/signin">
                <a className="btn lg:text-bold lg:text-xl lg:px-8 bg-teal-600">Sign In</a>
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
