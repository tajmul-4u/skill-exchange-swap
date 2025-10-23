import React from "react";
// import { toast } from "react-toastify";

const AboutUs = () => {
//   const handleNotify = () => {
//     toast.success("You will notify the about page is ready!", {
//       position: "top-center",
//       autoClose: 3000,
//       theme: "colored",
//     });
//   };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-[#2E3192] to-[#662D8C] ">
      <h1 className="text-5xl md:text-6xl text-white font-bold animate-bounce drop-shadow-2xl">
        About page is comming soon!
      </h1>
      <p className="mt-5 text-lg text-white/90 animate-pulse">
        Stay tuned!We're crafting something amazing for you.
      </p>
      <div className="mt-10">
        <button
          onClick={``}
          className="btn btn-secondary btn-accent ainmate-[pulse_2s_infinite]"
        >
          Notify Me
        </button>
      </div>
      <div className="absolute bottom-6 text-white text-sm animate-pulse">
        Developed By <span className="font-bold text-amber-600">Tajmul</span>
      </div>
    </div>
  );
};

export default AboutUs;
