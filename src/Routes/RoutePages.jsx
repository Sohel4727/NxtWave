import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Reviews from "../Pages/Reviews/Reviews";
import LandingPage from "../Pages/LandingPage/LandingPage";

const RoutePages = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />}/>
        <Route exact path="/review" element={<Reviews />}/>
      </Routes>
      
    </>
  );
};

export default RoutePages;
