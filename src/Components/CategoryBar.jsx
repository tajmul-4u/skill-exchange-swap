import React, { useEffect, useState } from "react";

const CategoryBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch skill data
    fetch("/skill.json")
      .then((res) => res.json())
      .then((data) => {
        // Extract unique categories
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-md border border-white/20 shadow-md py-3 px-4 rounded-xl flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-gray-800 dark:text-gray-100">
      {categories.map((cat, index) => (
        <button
          key={index}
          className="px-4 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-indigo-200 dark:border-indigo-700 hover:shadow-md"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
