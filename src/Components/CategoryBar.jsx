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
    <div className="w-full flex flex-col items-center space-y-6">
      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Category Buttons */}
      <div className="w-full bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-md border border-white/20 shadow-md py-3 px-4 rounded-xl flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-gray-800 dark:text-gray-100">
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <Link key={index} to={`/skillscards/${encodeURIComponent(cat)}`}>
              <button
                className={`px-4 py-2 rounded-full border transition-all duration-300 text-white ${
                  window.location.pathname ===
                  `/skillscards/${encodeURIComponent(cat)}`
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                    : "hover:bg-indigo-600 hover:text-white border-indigo-200 dark:border-indigo-700"
                }`}
              >
                {cat}
              </button>
            </Link>
          ))
        ) : (
          <p className="text-gray-400 italic">
            {error ? "Error loading categories" : "Loading categories..."}
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryBar;
