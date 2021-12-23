import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { data } = useSelector((state) => state.profile);
  console.log(data.roles, "data");
  const role = data ? data.roles : "";

  return (
    <Route
      {...rest}
      render={(props) => (role === "admin" ? <Component {...props} /> : <Redirect to="/Home" />)}
    />
  );
};

export default AdminRoute;
