import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProvider';

const Main = () => {
  const { dark } = useContext(AuthContext)
  return (
    <div data-theme={dark ? "dark" : "light"} >
      <div className='max-w-[1440px] mx-auto'>

        <Navbar></Navbar>
        <div className='mx-1 md:mx-2'>
          <Outlet></Outlet>

        </div>
        <Footer></Footer>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />

      </div>
    </div>
  );
};

export default Main;