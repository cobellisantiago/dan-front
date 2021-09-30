import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import Login from 'src/pages/Login';
import NotFound from 'src/navigation/NotFound';
import Register from 'src/pages/Register';
import ConstructionList from 'src/pages/construction/ConstructionList';
import AddConstruction from 'src/pages/construction/AddConstruction';
import EditConstruction from 'src/pages/construction/EditConstruction';
import MaterialList from 'src/pages/material/MaterialList';
import AddMaterial from 'src/pages/material/AddMaterial';
import EditMaterial from 'src/pages/material/EditMaterial';
import OrderList from 'src/pages/order/OrderList';
import AddOrder from 'src/pages/order/AddOrder';
import EditOrder from 'src/pages/order/EditOrder';
import PaymentList from 'src/pages/payment/PaymentList';
import AddPayment from 'src/pages/payment/AddPayment';
import EditShipment from 'src/pages/shipment/EditShipment';
import AddShipment from 'src/pages/shipment/AddShipment';
import ShipmentList from 'src/pages/shipment/ShipmentList';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      {
        path: 'construction',
        element: <ConstructionList />,
        children: [
          { path: 'add', element: <AddConstruction /> },
          { path: 'edit', element: <EditConstruction /> }
        ]
      },
      {
        path: 'material',
        element: <MaterialList />,
        children: [
          { path: 'add', element: <AddMaterial /> },
          { path: 'edit', element: <EditMaterial /> },
        ]
      },
      {
        path: 'order',
        element: <OrderList />,
        children: [
          { path: 'add', element: <AddOrder /> },
          { path: 'edit', element: <EditOrder /> },
        ]
      },
      {
        path: 'payment',
        element: <PaymentList />,
        children: [
          { path: 'add', element: <AddPayment /> },
        ]
      },
      {
        path: 'shipment',
        element: <ShipmentList />,
        children: [
          { path: 'add', element: <AddShipment /> },
          { path: 'edit', element: <EditShipment /> },
        ]
      },
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
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
