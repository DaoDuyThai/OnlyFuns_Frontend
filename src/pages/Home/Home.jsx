import "./Home.css";
import Header from "../../components/Header/Header";
import LeftSide from "../../components/LeftSide/LeftSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
const Home = () => {
    return (
        <>
            <Header />
            <div className="Home">
                <RightSide />
                <PostSide />
                <LeftSide />
            </div>
        </>
    );
};

export default Home;