import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Nav";

const AppRouter = ({ isLogin }) => {
  //console.log("Router : ", isLogin);
  return (
    <Router>
      {isLogin && <Navigation />}
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profiletest" element={<Profile />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="/profile" element={<Navigate replace to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
