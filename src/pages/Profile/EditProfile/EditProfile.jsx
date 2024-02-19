import "./EditProfile.css";
const EditProfile = () => {
    return (
        <div className="container">
            <div className="row outerLayout">
                <div className="col-md-12 layout d-flex flex-column justify-content-center align-items-center">
                    <span>
                        <h1>Edit Your Profile</h1>
                    </span>
                    <div className="col-md-6 card">
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bio">Bio</label>
                                    <textarea
                                        className="form-control"
                                        id="bio"
                                        rows="3"
                                        placeholder="Write something about yourself"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="avatar" className="mr-2">
                                        Avatar
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control-file avatar"
                                        id="avatar"
                                        placeholder="Upload your avatar
                                "
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary mt-3"
                                >
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditProfile;
