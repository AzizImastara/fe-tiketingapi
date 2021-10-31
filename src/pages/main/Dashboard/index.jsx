import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const Dashboard = () => {
  let history = useHistory();

  return (
    <>
      <Navs />

      <Footer />
    </>
  );
};
export default Dashboard;
