import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import PaymentLayout from './Payment/PaymentLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PaymentNetwork from './Payment/PaymentNetwork';
import PaymentCurrency from './Payment/PaymentCurrency';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/payment/:id",
    element: <PaymentLayout />,
    children: [
      {
        path: "/payment/:id",
        element: <PaymentNetwork/>
      },
    {
      path:"/payment/:id/currency",
      element:<PaymentCurrency/>
    }
    ]
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>

);

