import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/home";
import Register from "../pages/register";
import RegisteredSuccessfully from "../components/register/success/registeredSuccessfully";
import Login from "../pages/login";
import EmailVerification from "../pages/emailVerification";
import EmailVerified from "../pages/emailVerified";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registeredsuccessfully" element={<RegisteredSuccessfully />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/EmailVerification" element={<EmailVerification />} />
          <Route path="/EmailVerified" element={<EmailVerified />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
