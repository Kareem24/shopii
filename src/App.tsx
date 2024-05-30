import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './api/api';
import { Suspense, useState } from 'react';

import {
  About,
  AccountDetails,
  Address,
  Cart,
  Checkout,
  Contact,
  ForgetPassword,
  Home,
  Listing,
  Login,
  Order,
  Orders,
  Password,
  Product,
  Profile,
  ResetPassword,
  Signup,
  Wishlist,
} from './pages';
import Applayout from './layouts/Applayout';
import { paymentMessage } from './lib/data';

const { success, failed } = paymentMessage;
const queryClient = new QueryClient();

function App() {
  const [query, setQuery] = useState<string>('');
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Applayout setQuery={setQuery} />,
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
          element: <Listing query={query} />,
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
        {
          path: '/order',
          element: <Order state={failed} />,
        },
        {
          path: '/checkout',
          element: <Checkout />,
        },
        {
          element: <Profile />,
          children: [
            {
              path: '/profile/order',
              element: <Orders />,
            },
            {
              path: 'profile/wishlist',
              element: <Wishlist />,
            },
            {
              path: 'profile/shipping-address',
              element: <Address />,
            },
            {
              path: 'profile/password',
              element: <Password />,
            },
            {
              path: 'profile/account-details',
              element: <AccountDetails />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={'loading.....'}>
        <RouterProvider router={route} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
