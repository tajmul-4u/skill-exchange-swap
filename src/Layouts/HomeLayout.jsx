import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Category from '../Components/Category';

const HomeLayout = () => {
    return (
      <div>
        <header>
          <Navbar></Navbar>
           <section>
            <Suspense fallback={<p>Loading...</p>}>
                <Category></Category>
            </Suspense>
           </section>
          <section>
            <Hero></Hero>
          </section>
          <main>
            <Outlet></Outlet>
          </main>
          <Footer></Footer>
        </header>
      </div>
    );
};

export default HomeLayout;