/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
    const imageRef = useRef();
    const [images, setImages] = useState([]);

    const onImageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            let selectedImages = Array.from(e.target.files);
            setImages([...images, ...selectedImages]);
        }
    };

    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    const handleUpload = () => {
        // Simulate uploading images here
        images.forEach(image => {
            // Do something with each image (e.g., upload to server)
            console.log("Uploading image:", image);
        });
        // Reset the images state after upload
        setImages([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted!");
    }

    return (
        <div className="PostShare">
            <img
                src="https://www.w3schools.com/w3images/avatar1.png" className="" alt="BackgroundPicture"
            />
            <div>
                <input
                    type="text"
                    placeholder="What's happening?"
                    required
                />
                <div className="postOptions">
                    <div
                        className="option"
                        style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>

                    <div className="option" style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{ color: "var(--shedule)" }}>
                        <UilSchedule />
                        Shedule
                    </div>
                    <button
                        className="btn btn-primary ps-button"
                        onClick={handleUpload}
                    >
                        <span style={{ fontWeight: "bold" }}>Share</span>
                    </button>
                    <input type="file" ref={imageRef} onChange={onImageChange} style={{ display: "none" }} multiple />
                </div>

                <div className="previewImages">
                    {images.map((image, index) => (
                        <div key={index} className="previewImage">
                            <div className="previewImageContainer">
                                <UilTimes onClick={() => removeImage(index)} />
                                <img src={URL.createObjectURL(image)} alt={`preview-${index}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostShare;