import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import logo from "../../assets/skill.png";
import userImg from "../../assets/user-icon.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logOut()
      .then(() => toast("You logged out successfully"))
      .catch(() => console.error("Error during logout"));
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/20 backdrop-blur-md border-b border-white/30 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Brand Logo + Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <Link
            to="/"
            className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            SkillExchange<span className="text-indigo-600">Swap</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-lg font-medium text-white">
            <li>
              <Link to="/" className="hover:text-indigo-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/auth/aboutus"
                className="hover:text-indigo-600 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/auth/profile"
                className="hover:text-indigo-600 transition"
              >
                Profile
              </Link>
            </li>
          </ul>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <img
              src={user?.photoURL || userImg}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-indigo-500"
            />
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/auth/signin"
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Log In
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-indigo-600 focus:outline-none"
        >
          {isOpen ? <RxCross2 /> : <LuMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-indigo-100 shadow-lg animate-slide-down">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="hover:text-indigo-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/auth/aboutus"
                onClick={toggleMenu}
                className="hover:text-indigo-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/auth/profile"
                onClick={toggleMenu}
                className="hover:text-indigo-600"
              >
                Profile
              </Link>
            </li>
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/auth/signin"
                onClick={toggleMenu}
                className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold"
              >
                Log In
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
