import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import FriendPage from '../pages/FriendPage';
import ProfilePage from '../pages/ProfilePage';
import { RouterProvider } from 'react-router-dom';
import RedirectIfAuthenticated from '../features/auth/RedirectIfAuthenticated';

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
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    )
  }
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
