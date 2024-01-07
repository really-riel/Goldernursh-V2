import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import CustomerOrders from "./pages/CustomerOrders/CustomerOrders";
import ChooseOrder from "./pages/ChooseOrder/ChooseOrder";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Admin/Dashboard";
import Staffs from "./pages/Admin/Staffs";
import Dishes from "./pages/Admin/Dishes";
import Missing from "./pages/Missing/Missing";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<CustomerOrders />} />
        <Route path="choose-order" element={<ChooseOrder />} />

        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="login" element={<SignUp />} />
        </Route>

        <Route path="admin">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="staffs" element={<Staffs />} />
          <Route path="dishes" element={<Dishes />} />
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
