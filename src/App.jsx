import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
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

function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/verify" element={<Verify />} />

          <Route path="/forgotpassword" element={<ForgotPassword />} />

          <Route path="/redirectpage" element={<LoadingPage />} />

          {/*
          * @des home page of a social network
          * @author Đào Duy Thái
          * @date 14/02/2024
          */}
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

          <Route path="/profile" element={<h1>Profile</h1>} />

          <Route path="/profile/edit" element={<h1>Profile Edit</h1>} />

          <Route path="/connections" element={<h1>Connections</h1>} />

          <Route path="/notifications" element={<h1>Notifications</h1>} />

          <Route path="/chat" element={<h1>Chat</h1>} />

          <Route path="/listmembers" element={<h1>List Members</h1>} />

          <Route path="/listreports" element={<h1>List Reports</h1>} />

          <Route path="/dashboard" element={<h1>Dashboard</h1>} />

          <Route path="/listbanners" element={<h1>List Banners</h1>} />

          <Route path="/editbanners" element={<h1>Edit Banners</h1>} />

          <Route path="*" element={<h1>Not Found</h1>} />

        </Routes>
      </ BrowserRouter>
    </>
  )
}

export default App
