import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Navbar from '../components/navbar';
import Users from '../pages/users';
import UserItem from '../components/user-item';
import Dashboard from '../pages/dashboard';
import Students from '../components/students';
import HomePage from '../components/homepage';
import Explore from '../components/explore';
import Subscribe from '../components/subscribe';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Dashboard />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'explore', element: <Explore /> },
          { path: 'subscribe', element: <Subscribe /> },
        ],
      },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'users', element: <Users /> },
      { path: 'users/:id', element: <UserItem /> },
      { path: 'dashboard/students', element: <Students /> },
    ],
  },
]);

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;
