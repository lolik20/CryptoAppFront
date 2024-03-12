import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import PaymentLayout from './Payment/PaymentLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PaymentNetwork from './Payment/PaymentNetwork';
import PaymentCurrency from './Payment/PaymentCurrency';
import PaymentProccess from './Payment/PaymentProccess';
import PaymentSuccessful from './Payment/PaymentSuccessful';
import Metamask from './Components/Payments/MetaMask';
import TrustWallet from './Components/Payments/TrustWallet';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/payment/:id",
    element: <PaymentLayout />,
    children: [
      {
        path: "/payment/:id",
        element: <PaymentNetwork />
      },
      {
        path: "/payment/:id/currency",
        element: <PaymentCurrency />
      },
      {
        path: "/payment/:id/proccess",
        element: <PaymentProccess />,
        children: [
          {
            path: "/payment/:id/proccess/metamask",
            element: <Metamask />
          }, {
            path: "/payment/:id/proccess/trustwallet",
            element: <TrustWallet />
          }
        ]
      },
      {
        path: "/payment/:id/success",
        element: <PaymentSuccessful />
      },

    ],
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>

);

