import "./Home.css";
import Header from "../../components/Header/Header";
import LeftSide from "../../components/LeftSide/LeftSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
import axios from "../../setup/axios";
import { useEffect } from "react";

/*
* @author Đào Duy Thái
* @date 14/02/2024
* @des home page of a social network
*/
const Home = () => {
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('user'); 
                console.log('User data:', response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="Home">
                    <LeftSide />
                    <PostSide />
                    <RightSide />
                </div>
            </div>

        </>
    );
};

export default Home;