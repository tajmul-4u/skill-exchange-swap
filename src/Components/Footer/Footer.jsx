import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router';

const Footer = () => {
    return (
      <footer className='bg-base-200 text-base-content py-12'>
        <div className='container mx-auto px-4' >
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {/* Brand Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">
                Skill Exchange Swap
              </h2>
              <p className="text-sm">
                Connect,learn,and grow by exchanging skills with our vibrant
                community.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-circle"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-circle"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-circle"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-circle"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
            {/* Navigation link */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link to={"/"} className="link link-hover">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link link-hover">
                    Find Skills
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link link-hover">
                    Offers Skills
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link link-hover">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            {/* support links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link to={"/"} className="link link-hover">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link link-hover">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link link-hover">
                    Terms of Services
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="link link-hover">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            {/* NewsLatter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <p className="text-sm mb-4">
                <span className="text-accent">Subscribe</span> to our newsletter
                for updates and tips!
              </p>
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full pr-10"
                  />
                  <MdEmail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button className="btn btn-primary ml-2">Subscribe</button>
              </div>
            </div>
          </div>
          {/* bottom bar */}
          <div className='mt-8 pt-8 border-t border-base-300 text-center'>
            <p className='text-sm'>
              &copy; {new Date().getFullYear()} Skill Exchange Swap.All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;