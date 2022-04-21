import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "../components/authentication/forgotPassword";
import Email from "../components/authentication/forgotPassword/Email";
import Password from "../components/authentication/forgotPassword/Password";
import Login from "../components/authentication/login";
import Calls from "../components/messenger/overview/calls";
import Chats from "../components/messenger/overview/chats";
import Contacts from "../components/messenger/overview/contacts";
import RegisteredSuccessfully from "../components/register/success/RegisteredSuccessfully";
import Layout from "../containers/Layout";
import EmailVerification from "../pages/emailVerification";
import EmailVerified from "../pages/emailVerified";
import EventDetail from "../pages/eventDetail";
import Home from "../pages/home";
import MediaLibrary from "../pages/mediaLibrary";
import Overview from "../pages/messenger";
import Chat from "../pages/messenger/Chat";
import Register from "../pages/register";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/register/verify/:id"
            element={<RegisteredSuccessfully />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />}>
            <Route path="email" element={<Email />} />
            <Route path="password/:id" element={<Password />} />
          </Route>
          <Route path="/messenger" element={<Overview />}>
            <Route path="chats" element={<Chats />} />
            <Route path="calls" element={<Calls />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="/messenger/chat/:id" element={<Chat />} />
          <Route path="/event/:id" element={<EventDetail />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/EmailVerification" element={<EmailVerification />} />
          <Route path="/EmailVerified" element={<EmailVerified />} />
          <Route path="/MediaLibrary" element={<MediaLibrary />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
