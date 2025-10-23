import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, Navigate, useLoaderData, useParams } from "react-router";

const SkillDetails = () => {
  const data = useLoaderData();
  const { skillId } = useParams(); // ✅ match route param name
  const [skillDetails, setSkillDetails] = useState(null);

  console.log("Params:", skillId);
  console.log("Data from loader:", data);

  useEffect(() => {
    if (data && skillId) {
      const found = data.find(
        (item) => item.skillId == skillId // ✅ use skillId and loose equality to match string vs number
      );
      setSkillDetails(found);
    }
  }, [data, skillId]);
 
  if (!skillDetails) {
    return (
      <>
        <Navbar />
        <div className="text-center py-20 text-gray-500 italic">
          Loading skill details...
        </div>
        <Footer />
      </>
    );
  }
console.log(skillDetails)
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-10 px-4">
        <img
          src={skillDetails.image}
          alt={skillDetails.skillName}
          className="w-full h-64 object-cover rounded-xl shadow-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-3 text-indigo-600">
          {skillDetails.skillName}
        </h1>
        <p className="text-gray-700 mb-4">{skillDetails.description}</p>
        <p className="font-semibold text-lg text-indigo-700">
          Price: ${skillDetails.price}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Provider: {skillDetails.providerName} ({skillDetails.providerEmail})
        </p>
        {/* Back Button */}
        <Link to={'/'}>
          <button className="mb-6 px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
            Back
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default SkillDetails;
