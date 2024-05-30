import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

function Applayout({ setQuery }: any) {
  return (
    <>
      <Navbar setQuery={setQuery} />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
}

export default Applayout;
