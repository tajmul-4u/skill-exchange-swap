import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const SignUp = () => {
  const [nameError, setNameError] = useState("");
  const [show,setShow]=useState('');
  const navigate = useNavigate();

  const { createUser, setUser,updateUser} = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target)
    const from = e.target;
    const name = from.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    }
    const photo = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;
    // console.log({name,photo,email,password})
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        updateUser({displayName:name,photoURL:photo})
        .then(()=>{
          setUser({ ...user,displayName: name, photoURL: photo });
          navigate("/");
        })
        
        .catch((error)=>{
          console.log(error)
          setUser(user)
        })
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.messsage;
        console.log(errorMessage);
      });
  };

  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Animated floting circles */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Create Your Account
          </h1>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            Join our community and unlock exclusive features.Your journey begins
            here!
          </p>
        </div>
        <div className="w-full max-w-md backdrop:blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">
            Sign Up
          </h2>
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Tajmul"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            {
              nameError && <p className="text-xs text-error">{nameError}</p>
            }
            <div>
              <label>Phote</label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo URL here"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
            </div>
            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-pink-500 text-white font-semibold border-none hover:scale-105 transition-transform duration-200"
            >
              Sign Up
            </button>
            <div className="text-center mt-3">
              <p className="text-sm text-white/80">
                Already have an account?{" "}
                <Link
                  to="/auth/signin"
                  className="text-pink-300 hover:text-white font-medium underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
