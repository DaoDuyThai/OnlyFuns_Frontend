import Comments from "../../components/Comments/Comments";
import Header from "../../components/Header/Header";
import IndividualPost from "../../components/Post/Post";
import "./Post.css";

const Post = () => {
  return (
    <>
      <Header />
      <div className="PostPage">
        <IndividualPost />
        <Comments />
      </div>
    </>
  );
};

export default Post;