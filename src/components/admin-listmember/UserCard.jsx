import '../../style/admin-listmember/user-card.css';

function UserCard() {
    return (
        <div>
            <div className="user-card mx-4 my-2">
                <div className="d-flex">
                    <img
                        className="me-2"
                        src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/426741661_417593023944418_6262138103167675579_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFsmrTfPqjs9uDgfsJyDL4RGG8V8il-FA8YbxXyKX4UDwPTYhN6tU1EC4kC53iTblfwj75voxXFDp29AcZ5w5EH&_nc_ohc=dwjv08GuSdAAX8IQUF3&_nc_ht=scontent.fhan3-5.fna&oh=00_AfD2ayZqyU9UXZjknmkP34IXT-tyPCGoYtjVqjGLNyharg&oe=65CFBAFC"
                        alt="avatar"
                    />
                    <div className="user-info me-2">
                        <div className="user-name">
                            <a href="#"><strong>Dương Thiện Phước</strong></a>
                        </div>
                        <div className="user-address">
                            <p>Hà Nội,Việt Nam</p>
                        </div>
                    </div>
                </div>
                <div className="act-btn">
                    <button className="btn-action">
                        Add friend
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;