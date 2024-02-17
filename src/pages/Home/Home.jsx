import "./Home.css";
import Header from "../../components/Header/Header";
import LeftSide from "../../components/LeftSide/LeftSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

/*
* @author Đào Duy Thái
* @date 14/02/2024
* @des home page of a social network
*/
const Home = () => {
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