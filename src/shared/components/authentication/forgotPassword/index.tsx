import React from "react";
import { Outlet } from "react-router-dom";
import AuthWrapper from "../AuthWrapper";

const ForgotPassword: React.FC = () => {
  return (
    <AuthWrapper title="Passwort Vergessen">
      <Outlet />
    </AuthWrapper>
  );
};

export default ForgotPassword;
