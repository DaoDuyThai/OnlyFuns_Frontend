import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import DashBoard from './pages/Admin/DashBoard/DashBoard.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Connections from './pages/Connections/Connections.jsx';
import EditProfile from './pages/Profile/EditProfile/EditProfile.jsx';
import Notifications from './pages/Notifications/Notifications.jsx';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<h1>Login</h1>} />

                    <Route path="/register" element={<h1>Register</h1>} />

                    <Route path="/verify" element={<h1>Verify</h1>} />

                    <Route
                        path="/forgotpassword"
                        element={<h1>Forgot Password</h1>}
                    />

                    <Route
                        path="/redirectpage"
                        element={<h1>Redirect Page</h1>}
                    />

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

                    <Route path="/search" element={<h1>Search</h1>} />

                    <Route
                        path="/search/people"
                        element={<h1>Search People</h1>}
                    />

                    <Route
                        path="/search/posts"
                        element={<h1>Search Posts</h1>}
                    />

                    <Route path="/profile" element={<Profile />} />

                    <Route path="/profile/edit" element={<EditProfile />} />

                    <Route path="/connections" element={<Connections />} />

                    <Route path="/notifications" element={<Notifications />} />

                    <Route path="/chat" element={<h1>Chat</h1>} />

                    <Route
                        path="/listmembers"
                        element={<h1>List Members</h1>}
                    />

                    <Route
                        path="/listreports"
                        element={<h1>List Reports</h1>}
                    />

                    <Route path="/dashboard" element={<DashBoard />} />

                    <Route
                        path="/listbanners"
                        element={<h1>List Banners</h1>}
                    />

                    <Route
                        path="/editbanners"
                        element={<h1>Edit Banners</h1>}
                    />

                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
