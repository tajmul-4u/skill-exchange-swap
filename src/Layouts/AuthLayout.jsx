import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const AuthLayout = () => {
    return (
        <div>
              <nav>
                <Navbar></Navbar>
              </nav>
              <main>
                <Outlet></Outlet>
              </main>
              <footer>
                <Footer></Footer>
              </footer>
        </div>
    );
};

export default AuthLayout;