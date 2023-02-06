import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.jsx';
import ErrorPage from './error-page';
import Sidebar from './components/Sidebar';
import Users from './pages/Users';
import Orders from './pages/Orders';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
    errorElement: <ErrorPage />,
  },
  /* {
    path:"/app/orders",
    element:<Orders/>,
    children: [{
        path: "/app/*"
    }]
  }, */
  {
    path:"/app",
    element:<Sidebar />,
    children: [
      {
        path: "/app/users",
        element: <Users />,
      },
      {
        path: "/app/orders",
        element: <Orders />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
