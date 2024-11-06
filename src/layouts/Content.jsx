import React from "react";
import logo from "@/assets/logo.svg";
import splashImage from "@/assets/images/splash.jpg";
const AuthLayout = ({ children, className }) => {
  return (
    <div className="min-h-screen">
      <div className="p-5 max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default AuthLayout;
