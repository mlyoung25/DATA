import ReactDOM from 'react-dom/client'
import Layout from './Layout.tsx'
import App from './App.tsx'
import About from './About.tsx'
import Membership from './Membership.tsx'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'membership',
      element: <Membership />,
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
