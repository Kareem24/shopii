import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

function Applayout() {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
}

export default Applayout;
