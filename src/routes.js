import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import ConstructionList from 'src/pages/ConstructionList';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import AddConstruction from 'src/pages/AddConstruction';
import EditConstruction from 'src/pages/EditConstruction';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'construction', element: <ConstructionList /> },
      { path: '/construction/add', element: <AddConstruction /> },
      { path: '/construction/edit', element: <EditConstruction /> },
      { path: 'material', element: <Dashboard /> },
      { path: 'payment', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/account" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
