import "./Home.css";
import Header from "../../components/Header/Header";
import LeftSide from "../../components/LeftSide/LeftSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
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