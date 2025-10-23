import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import CategoryBar from '../Components/CategoryBar';
import TopRatedProviders from '../Components/TopRatedProvider/TopRatedProviders';
import CategorySkill from '../Pages/CategorySkill';

const HomeLayout = () => {
    return (
      <div>
        <header>
          <Navbar></Navbar>
          <section>
            <Suspense fallback={<p>Loading...</p>}>
              <CategoryBar></CategoryBar>
            </Suspense>
            <div className="p-6 space-x-6 ">
              <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-md">
                Connect, collaborate, and grow <br /> through{" "}
                <span className="text-white">skill swapping.</span>
              </h2>
            </div>
          </section>
        </header>
        <section>
          <Hero></Hero>
          <CategorySkill></CategorySkill>
        </section>
        <main>
          <Outlet></Outlet>
          <section>
            <TopRatedProviders></TopRatedProviders>
          </section>
        </main>
        <Footer></Footer>
      </div>
    );
};

export default HomeLayout;