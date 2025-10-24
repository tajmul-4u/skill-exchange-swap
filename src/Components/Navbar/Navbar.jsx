import React, { use, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";
import logo from '../../assets/skill.png'
import userImg from '../../assets/user-icon.png'
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = use(AuthContext)
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }
    const handleLogout = ()=>{
      console.log('user tryign to logout')
      logOut()
      .then(()=>{
        alert('You logged out successfully')
      })
      .catch(()=>{
        console.error('Error occur logged out');
      })

    }
  return (
    <nav className="navbar bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg px-6 rounded-2xl mx-4 mt-3 transition-all duration-300 hover:bg-white/20">
      {/* Brand name */}
      <div className="flex items-center">
        <div>
          <img className="w-25 bg-base-100" src={logo} alt="logo" />
        </div>
        <Link to={"/"} className="text-2xl font-bold text-primary">
          Skill<span className="text-secondary">Exchange</span>
          <span>Swap</span>
        </Link>
        <div>{user && user.email}</div>
      </div>
      {/* Menu  */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1 space-x-4 text-xl font-semibold">
          <li>
            <Link to={"/"} className="hover:text-primary font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/auth/aboutus"}
              className="hover:text-primary font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/auth/profile"}
              className="hover:text-primary font-medium"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
      {/* left button */}
      <div className="hidden md:flex flex-none gap-2">
        <img className="w-12 rounded-full" src={`${user ? user.photoURL : userImg}`} alt="" />
        {user ? (
          <Link onClick={toggleMenu} to={"/auth/signup"}>
            <button onClick={handleLogout} className="btn btn-primary w-full">
              Log Out
            </button>
          </Link>
        ) : (
          <Link onClick={toggleMenu} to={"/auth/signin"}>
            <button onClick={handleLogout} className="btn btn-primary w-full">
              Log In
            </button>
          </Link>
        )}
        {/* <Link to={"/auth/signin"}>
          <button className="btn btn-outline btn-sm">Sign In</button>
        </Link> */}
      </div>
      {/* Mobile res */}
      <div className="md:hidden flex-none">
        <button
          onClick={toggleMenu}
          className="btn btn-ghost btn-circle text-xl"
        >
          {isOpen ? <RxCross2 /> : <LuMenu></LuMenu>}
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md border-t z-50 md:hidden">
          <ul className="menu p-4 space-y-2">
            <li>
              <Link to={"/"} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={toggleMenu}>
                Profile
              </Link>
            </li>
            <li>
              {user ? (
                <Link onClick={toggleMenu} to={"/signup"}>
                  <button className="btn btn-primary w-full">Sign Up</button>
                </Link>
              ) : (
                ""
              )}
            </li>
            {/* <li>
              <Link onClick={toggleMenu} to={"/signin"}>
                <button className="btn btn-outline w-full">Sign In</button>
              </Link>
            </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
