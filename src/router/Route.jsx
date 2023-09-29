import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import FriendPage from '../pages/FriendPage';
import ProfilePage from '../pages/ProfilePage';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'friend', element: <FriendPage /> },
      { path: 'profile/:profileId', element: <ProfilePage /> }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
