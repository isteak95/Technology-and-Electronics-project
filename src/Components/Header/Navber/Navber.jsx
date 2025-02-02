import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState('dark'); // Initially, set it to 'dark'

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  const handleLogout = () => {
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, log out',
    }).then((result) => {
      if (result.isConfirmed) {
        logOut(); // Log the user out using the provided logOut function.
        Swal.fire('Logged out', 'You have been successfully logged out.', 'success');
      }
    });
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
          <img className='lg:h-14 md:h-14 h-8  ' src="https://i.ibb.co/1v8yq8Q/pngwing-com-3.png" alt="pngwing-com-3" border="0" />
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
        <div className="l:navbar-end md:navbar-end lg:gap-8 md:gap-2 ">
          <button className="lg:btn md:btn btn lg:mr-1 md:mr-3 mr-1" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          {user ? (
            
            <React.Fragment>
              <div className="flex items-center gap-2">
              <div className=" lg:text-bold lg:text-xl lg:px-4 ml-2 lg:ml-auto md:ml-auto md:btn lg:btn text-blue-600	">
                  {user.displayName}
                </div>
                <div className="lg:text-bold lg:text-xl mx-1 md:mx-auto lg:mx-auto  lg:ml-5">
                  <img
                    src={user.photoURL}
                    alt={`${user.displayName}'s profile`}
                    className="h-10 w-10 rounded-full lg:mr-auto md:mr-auto mr-2"
                  />
                </div>
               
              </div>
              <div
                className="md:btn md:btn-error lg:btn-error lg:mr-3 lg:btn p-1 rounded-md bg-red-400 text-white lg:text-bold lg:text-xl  cursor-pointer"
                onClick={handleLogout} // Call handleLogout when the button is clicked
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
