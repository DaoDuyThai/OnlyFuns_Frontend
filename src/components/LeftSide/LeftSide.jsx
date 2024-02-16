import './LeftSide.css';
const LeftSide = () => {

    return (
        <div className="LeftSide">
            <div className="Profile">
                <div className="ProfileImages">
                    <img src="https://www.w3schools.com/w3images/avatar2.png" className="avatar" alt="BackgroundPicture" />
                    <img src="https://www.w3schools.com/w3images/avatar1.png" className="avatar" alt="ProfilePicture" />

                </div>

                <div className="ProfileName">
                    <span>UserName</span>
                    <span style={{ padding: "1rem" }}>Bio Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium aliquid animi, quidem fugit voluptatum quibusdam sunt eos possimus consequuntur id recusandae eveniet, at rem molestiae non optio facere quos.</span>
                </div>


                <div className="followStatus">
                    <hr />
                    <div>
                        <div className="follow">
                            <span>10</span>
                            <span>Followers</span>
                        </div>
                        <div className="vl"></div>
                        <div className="follow">
                            <span>20</span>
                            <span>Following</span>
                        </div>
                        {/* for profilepage
                    {location === "profilePage" && (
                        <>
                            <div className="vl"></div>
                            <div className="follow">
                                <span>{
                                    posts.filter((post) => post.userId === user._id).length
                                }</span>
                                <span>Posts</span>
                            </div>{" "}
                        </>
                    )} */}
                    </div>
                    <hr />
                    {/* {location === "profilePage" ? (
                    ""
                ) : (
                    <span>
                        <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                            My Profile
                        </Link>
                    </span>
                )} */}
                </div>
            </div>
        </div>
    )
};
export default LeftSide;