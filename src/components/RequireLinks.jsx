import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import React from "react";

export const ShowOnLogin = ({ children }) => {
  /* return user ? children : null; */
};

export const ShowOnLogout = ({ children }) => {
  /* return user ? null : children; */
};

export const RequireAuth = ({ children }) => {
  console.log(children.type.name);
  let targetUrl;
  switch (children.type.name) {
    case "CustomerOrders":
      targetUrl = "/orders";
      break;
    case "ProfileEdit":
      targetUrl = "/profile/edit";
      break;
    case "Chat":
      targetUrl = "/contact/chat";
      break;
    case "Checkout":
      targetUrl = "/cart";
      break;
    default:
      targetUrl = `/${children.type.name.toLowerCase()}`;
  }
  return user ? children : <Navigate to={"/auth/login"} />;
};

export const RequireAuthAndNonAdminRole = ({ children }) => {
  return user && adminRole !== "admin" ? (
    children
  ) : !user ? (
    <Navigate to={"/auth/login"} state={"/contact/chat"} />
  ) : adminRole === "admin" ? (
    <main className="notAdmin">
      <div className="container">
        <h1>Permission Denied.</h1>
        <p>This page can not be viewed by an Admin role user.</p>
        <br />
        <Link to="/">&larr; Back To Home</Link>
      </div>
    </main>
  ) : null;
};

export const RequireAdminLink = ({ children }) => {
  return true ? children : null;
};

export const RequireAdminRoute = ({ children }) => {
  /* return isAdmin ? (
    children
  ) : (
    <main className="notAdmin">
      <div className="container">
        <h1>Permission Denied.</h1>
        <p>This page can only be viewed by an Admin user.</p>
        <br />
        <Link to="/">&larr; Back To Home</Link>
      </div>
    </main>
  ); */
};

export const RequireAdminRoleToBeAdmin = ({ children }) => {
  /*  return adminRole === "admin" && isAdmin ? (
    children
  ) : (
    <main className="notAdmin">
      <div className="container">
        <h1>Permission Denied.</h1>
        <p>This page can only be viewed by an Admin user.</p>
        <br />
        <Link to="/">&larr; Back To Home</Link>
      </div>
    </main>
  ); */
};

export const HideForNoneAdminRole = ({ children }) => {
  /* return adminRole === "admin" ? children : null; */
};
