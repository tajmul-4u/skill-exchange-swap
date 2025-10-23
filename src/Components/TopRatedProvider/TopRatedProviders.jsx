import React, { useEffect, useState } from "react";
import ai from '../../assets/Ai.jpeg'
import speaking from '../../assets/public-speaking.webp'
import discuss from '../../assets/discuss.jpg'
import soft from '../../assets/software-analysis.jpg'
const TopRatedProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch("/skill.json") // your JSON file
      .then((res) => res.json())
      .then((data) => setProviders(data));
  }, []);
// console.log(providers);
  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">
          The Smart Way to Learn. Zero Cost.
        </h2>
        <p className="text-gray-600">
          Unlock your skill potential with Skill Exchange: the smarter way to
          learn, exchanging the fields you want!
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
        <div className="card bg-base-100 shadow-md p-4 flex-1">
          <div className="font-bold mb-1">Find Your Exchange</div>
          <div className="text-sm text-gray-600">
            Search our database for your ideal exchange partner.
          </div>
        </div>
        <div className="card bg-base-100 shadow-md p-4 flex-1">
          <div className="font-bold mb-1">AI SmartMatch</div>
          <div className="text-sm text-gray-600">
            Instantly get matched by AI to maximize value for each session.
          </div>
        </div>
        <div className="card bg-base-100 shadow-md p-4 flex-1">
          <div className="font-bold mb-1">Start the Session</div>
          <div className="text-sm text-gray-600">
            Connect & learn live, swap feedback, and track your growth.
          </div>
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-xl font-bold text-center my-6">
          Stop Waiting. Start Exchanging.
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              {/* Replace with <img src="..." /> for a real project */}
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                <img src={ai} alt="" />
              </div>
            </figure>
            <div className="card-body">
              <h4 className="font-bold text-lg">Affordable Learning</h4>
              <p className="text-sm text-gray-600">
                Learn and teach with zero cost. No hidden fees.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                <img src={discuss} alt="" />
              </div>
            </figure>
            <div className="card-body">
              <h4 className="font-bold text-lg">Verified Mentors</h4>
              <p className="text-sm text-gray-600">
                All mentors verified by our team for community trust.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                <img src={soft} alt="" />
              </div>
            </figure>
            <div className="card-body">
              <h4 className="font-bold text-lg">Total Flexibility</h4>
              <p className="text-sm text-gray-600">
                Plan sessions around your schedule and interests.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="flex flex-col md:flex-row items-center gap-6 my-10">
        <div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-4xl text-purple-500 mb-2">“</div>
            <p className="text-gray-700 mb-2">
              Fantastic teacher! The skill exchange model is genius — I taught
              in Graphic Design, gained writing hours, then this clearly
              extraordinary mentor, was totally friendly and professional.
            </p>
            <div className="font-bold text-teal-600">
              Already booking my next trade!
            </div>
          </div>
        </div>
        <div>
          {/* Replace with <img src="..." /> for an actual testimonial image */}
          <div className="w-36 h-36 bg-gray-200 rounded-lg">
            <img className="w-36 h-36 rounded-lg" src={speaking} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedProviders;
