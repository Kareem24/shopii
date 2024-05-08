import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './api/api';
import { Suspense } from 'react';
import Applayout from './Applayout';
import Home from './pages/Home';
import Listing from './pages/Listing';
import './api/api';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/listing',
          element: <Listing />,
        },
        {
          path: '/product/:id',
          element: <Product />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/sign-up',
          element: <Signup />,
        },
        {
          path: '/forget-password',
          element: <ForgetPassword />,
        },
        {
          path: '/reset-password',
          element: <ResetPassword />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={'loading.....'}>
      <RouterProvider router={route} />
    </Suspense>
  );
}

export default App;
