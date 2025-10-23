import React from "react";
 

const SignIn = () => {
  const handleSign = () => {};
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
            <form onSubmit={handleSign} className="space-y-5">
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Sign in
              </h2>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="*********"
                  className="input input-bordered w-full bg-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button className="hover:underline cursor-pointer">
                Forgot Password?
              </button>
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
                {/* <Link
                  to="/signup"
                  className="text-pink-300 hover:text-white underline"
                >
                  Sign up
                </Link> */}
              </p>
            </form>
          </div>
        </div>
      
    </div>
  );
};

export default SignIn;
