import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
 

const SignIn = () => {
   const [error,setError]=useState('')
    const {signIn} = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const [show,setShow]=useState('')
    console.log(location)
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email,password})
    signIn(email,password)
    .then((res)=>{
        const user = res.user;
        console.log(user)
        toast('Sign In successfull')
        navigate(`${location.state? location.state : '/'}`)
    })
    .catch((error)=>{
        const errorCode = error.code;
        // alert(errorCode);
        toast.error(error.message);
        setError(errorCode);
    })
  };
  
    
  }
  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 text-white">
        {/* Left session  */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Welcome Back
          </h1>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            Sign in to continue your journey. Manage your account ,explore new
            features and new!
          </p>
        </div>
        {/* Login session */}
        <div className="w-full max-w-md backdrop-blur-lg bg-white/10 shadow-2xl rounded-2xl p-8">
          <form onSubmit={handleSignIn} className="space-y-5">
            <h2 className="text-2xl font-semibold mb-2 text-center text-white">
              Sign in
            </h2>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="relative">
              <label className="block text-sm mb-1">Password</label>
              <input
                type={show ? 'text' : 'password'}
                name="password"
                placeholder="*********"
                required
                className="input input-bordered w-full bg-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span onClick={()=>setShow(!show)}
                className="absolute right-[8px] top-[36px] cursor-pointer z-50">
                {
                  show ? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>
                }
              </span>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Link
              to="/auth/forgotpass"
              state={{ email: document.querySelector("[name='email']")?.value }}
              className="block mt-3 font-semibold text-sm text-red-600 hover:underline text-center"
            >
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-pink-500 text-white font-semibold border-none hover:scale-105 transition-transform duration-200"
            >
              Login
            </button>
            {/* Divder */}
            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px w-16 bg-white/30"></div>
              <span className="text-sm text-white/70">or</span>
              <div className="h-px w-16 bg-white/30"></div>
            </div>
            {/* Google Signin */}
            <button
              type="button"
              className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
            <p className="text-center text-sm text-white/80 mt-3">
              Don’t have an account?{" "}
              <Link
                to="/auth/signup"
                className="text-pink-300 hover:text-white underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
