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
