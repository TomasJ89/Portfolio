import { NavLink, useNavigate } from "react-router-dom";
import { RxHome } from "react-icons/rx";

function Navbar() {
  const nav = useNavigate();

  return (
    <div className="navbar glass rounded text-white sticky top-0 z-[50]">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={(e) => e.currentTarget.nextElementSibling.classList.toggle("hidden")}
          >
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-[50] mt-3 w-52 p-2 shadow hidden"
          >
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-900 font-bold" : "text-gray-200"
                }
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "text-blue-900 font-bold" : "text-gray-200"
                }
              >
                My projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-900 font-bold" : "text-gray-200"
                }
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" onClick={() => nav("/")}>
          <RxHome className="w-[30px] h-[30px] hover:rotate-360 duration-500" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-900 font-bold" : "text-gray-200"
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-blue-900 font-bold" : "text-gray-200"
              }
            >
              My projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-900 font-bold" : "text-gray-50"
              }
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;