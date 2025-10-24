import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const CategoryBar = () => {
  const [skills, setSkills] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/skill.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch skills");
        return res.json();
      })
      .then((data) => {
        setSkills(data);
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => {
        console.error("Error loading categories:", err);
        setError("Failed to load skills. Please try again later.");
        setCategories([]);
      });
  }, []);

  return (
    <div className="w-full flex flex-col items-center space-y-6 py-6">
      {/* Error Message */}
      {error && <p className="text-red-500 font-medium">{error}</p>}

      {/* Category Buttons */}
      <div className="w-full max-w-6xl text-white bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg py-5 px-4 rounded-2xl flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <Link key={index} to={`/skillscards/${encodeURIComponent(cat)}`}>
              <button
                className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 
                ${
                  window.location.pathname ===
                  `/skillscards/${encodeURIComponent(cat)}`
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg scale-105"
                    : "bg-white/20 border border-indigo-200 text-gray-800 dark:text-gray-100 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            </Link>
          ))
        ) : (
          <p className="text-gray-400 italic animate-pulse">
            {error ? "Error loading categories" : "Loading categories..."}
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryBar;
