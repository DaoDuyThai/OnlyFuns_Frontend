import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import DashBoard from './pages/Admin/DashBoard/DashBoard.jsx';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SearchPage from "./pages/Search/Search";
import SearchPost from "./pages/Search/SearchPost";
import SearchPeople from "./pages/Search/SearchPeople";
import ForgotPassword from "./pages/auth/FogotPassword";
import Verify from "./pages/auth/Verify";
import LoadingPage from "./pages/auth/RedirectPage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Profile from './pages/Profile/Profile.jsx';
import Connections from './pages/Connections/Connections.jsx';
import EditProfile from './pages/Profile/EditProfile/EditProfile.jsx';
import Notifications from './pages/Notifications/Notifications.jsx';
import Chat from './pages/Chat/Chat.jsx';

import ListMember from './components/admin-listmember/ListMember.jsx';

import { useEffect, useState } from "react";

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
  }, []);
  
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/verify/*" element={<Verify />} />

          <Route path="/forgotpassword" element={<ForgotPassword />} />

          <Route path="/redirectpage" element={<LoadingPage />} />

          {/*
          * @des home page of a social network
          * @author Đào Duy Thái
          * @date 14/02/2024
          */}
          {accessToken && (
            <Route path="/" element={<Home />} />
          )}

        
          <Route path="/" element={<Home />} />


          {/*
          * @des view post details of a social network
          * @author Đào Duy Thái
          * @date 14/02/2024
          */}
          <Route path="/post" element={<Post />} />

          <Route path="/search/*" element={<SearchPage />} />

          <Route path="/search/people" element={<SearchPeople />} />

          <Route path="/search/posts" element={<SearchPost />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/profile/edit" element={<EditProfile />} />

          <Route path="/connections" element={<Connections />} />

          <Route path="/notifications" element={<Notifications />} />

          <Route path="/chat" element={<Chat />} />

          <Route path="/listreports" element={<h1>List Reports</h1>} />

          <Route path="/dashboard" element={<DashBoard />} />

          <Route path="/listmembers" element={<ListMember/>}  />

          <Route path="/listbanners" element={<h1>List Banners</h1>} />

          <Route path="/editbanners" element={<h1>Edit Banners</h1>} />

          <Route path="*" element={<h1>Not Found</h1>} />

        </Routes>
      </ BrowserRouter>
    </>
  )
}

export default App
