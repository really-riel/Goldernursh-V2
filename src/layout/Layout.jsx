import React from "react";
import Header from "./header/Header";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "./footer/Footer";
import { ToastContainer } from "react-toastify";
import useWindowSize from "../hooks/useWindowSize";
import AdminSideNav from "./nav/AdminSideNav";
import AdminHeader from "./header/AdminHeader";

const Layout = () => {
  const { pathname } = useLocation();
  const { width } = useWindowSize();
  return (
    <>
      <ToastContainer position="top-left" className={"toastMessage"} />
      <div className="flex flex-col App min-h-svh">
        {pathname.includes("/admin") ? (
          <>
            <div className="flex flex-col Admin grow lg:grid lg:grid-cols-[20%_80%] ">
              {width < 1024 ? (
                <>
                  <AdminHeader />
                  <Outlet />
                </>
              ) : (
                <>
                  <AdminSideNav />
                  <div className="flex flex-col adminMain">
                    <AdminHeader />
                    <Outlet />
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <Header />
            <Outlet />
            {pathname !== "/contact/chat" && <Footer />}
          </>
        )}

        <ScrollRestoration
          getKey={(location, matches) => {
            const paths = ["/"];

            return paths.includes(location.pathname)
              ? location.pathname
              : location.key;
          }}
        />
      </div>
    </>
  );
};

export default Layout;

{
  /* <div className="">
  <Header />
  <Outlet />
  <Footer />
</div>; */
}
