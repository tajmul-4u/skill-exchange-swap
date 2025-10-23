import React from "react";
import { useLoaderData } from "react-router";

const SkillCards = () => {
  const { skills } = useLoaderData();  

  if (!skills || skills.length === 0) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-gray-400 italic">
          No skills found for this category.
        </p>
      </div>
    );
  }

  return (
    
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {skills[0].category} Skills
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 py-8">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {skill.skillName}
              </h2>
              <div className="flex items-center text-yellow-500 text-sm font-medium">
                {"⭐".repeat(Math.round(skill.rating))}
                <span className="ml-2 text-gray-500 dark:text-gray-400">
                  ({skill.rating.toFixed(1)})
                </span>
              </div>
              <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                ${skill.price}
              </p>
              <button className="mt-4 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default SkillCards;
