import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import App from './App';
import About from './About';
import Membership from './Membership';
import Login from './Login';
import Dashboard from './Dashboard';
import News from './News';
import Tools from './Tools';
import Article from './components/Article';
import ProtectedRoute from './ProtectedRoute';
import CreateContent from './components/CreateContent';
import { AuthProvider } from './AuthContext';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/DATA/',
    element: <Layout />,
    children: [
      {
        path: '',
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
      {
        path: 'news',
        element: <News />,
        children: [
          {
            path: ':id',
            element: <Article />,
          },
        ],
      },
      {
        path: 'tools',
        element: <Tools />,
        children: [
          {
            path: ':id',
            element: <Article />,
          },
        ],
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <ProtectedRoute element={<Dashboard />} />,
      },
      {
        path: 'create-content',
        element: <ProtectedRoute element={<CreateContent />} />, 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
