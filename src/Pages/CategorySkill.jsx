import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const CategorySkill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skill.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error loading skills:", err));
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Popular Skills
      </h1>

      {/* Skill Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Image */}
              <img
                src={skill.image}
                alt={skill.skillName}
                className="h-48 w-full object-cover"
              />

              {/* Card Content */}
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-semibold text-gray-800">
                  {skill.skillName}
                </h2>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 text-sm font-medium">
                  {"⭐".repeat(Math.round(skill.rating))}{" "}
                  <span className="ml-2 text-gray-500">
                    ({skill.rating.toFixed(1)})
                  </span>
                </div>

                {/* Price */}
                <p className="text-lg font-bold text-indigo-600">
                  ${skill.price}
                </p>

                {/* Button */}
                <Link to={`/skill-details/${skill.skillId}`}>
                  <button className="mt-4 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 italic">Loading skills...</p>
        )}
      </div>
    </div>
  );
};

export default CategorySkill;
