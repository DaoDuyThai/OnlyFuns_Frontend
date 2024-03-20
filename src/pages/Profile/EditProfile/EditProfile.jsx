import './EditProfile.css';
import { useState } from 'react';
import Header from '../../../components/Header/Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const EditProfile = () => {
    const { userId } = useParams();
    const [profileData, setProfileData] = useState({
        profilePictureUrl: '',
        backgroundPictureUrl: '',
        bio: '',
        city: '',
        country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send updated profile data to the backend
        try {
            const response = await axios.patch(
                'http://localhost:9999/profile/' + userId,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: profileData,
                },
            );
            if (response.ok) {
                // Handle success
                console.log('Profile updated successfully');
            } else {
                // Handle error
                console.error('Failed to update profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="row outerLayout">
                    <div className="col-md-12 layout d-flex flex-column justify-content-center align-items-center">
                        <span>
                            <h1>Edit Your Profile</h1>
                        </span>
                        <div className="col-md-6 card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="profilePictureUrl">
                                            Profile Picture URL
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="profilePictureUrl"
                                            name="profilePictureUrl"
                                            value={
                                                profileData.profilePictureUrl
                                            }
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="backgroundPictureUrl">
                                            Background Picture URL
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="backgroundPictureUrl"
                                            name="backgroundPictureUrl"
                                            value={
                                                profileData.backgroundPictureUrl
                                            }
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="bio">Bio</label>
                                        <textarea
                                            className="form-control"
                                            id="bio"
                                            name="bio"
                                            rows="3"
                                            value={profileData.bio}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            value={profileData.city}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">Country</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="country"
                                            name="country"
                                            value={profileData.country}
                                            onChange={handleChange}
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
        </>
    );
};

export default EditProfile;
