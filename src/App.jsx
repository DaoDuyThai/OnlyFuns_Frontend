import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<h1>Login</h1>} />

          <Route path="/register" element={<h1>Register</h1>} />

          <Route path="/verify" element={<h1>Verify</h1>} />

          <Route path="/forgotpassword" element={<h1>Forgot Password</h1>} />

          <Route path="/redirectpage" element={<h1>Redirect Page</h1>} />

          {/*
          * @des home page of a social network
          * @author Đào Duy Thái
          * @date 14/02/2024
          */}
          <Route path="/" element={<h1>Home</h1>} />
          
          {/*
          * @des view post details of a social network
          * @author Đào Duy Thái
          * @date 14/02/2024
          */}
          <Route path="/post" element={<h1>Post</h1>} />

          <Route path="/search" element={<h1>Search</h1>} />

          <Route path="/search/people" element={<h1>Search People</h1>} />

          <Route path="/search/posts" element={<h1>Search Posts</h1>} />

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
