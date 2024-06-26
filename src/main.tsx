import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import About from './About.tsx'
import Membership from './Membership.tsx'
import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/about/',
      element: <About />,
    },
    {
      path: '/membership/',
      element: <Membership />,
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
