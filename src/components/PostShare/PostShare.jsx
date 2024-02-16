import { useRef } from "react";
// import {useState} from "react";
// import React from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
// import { UilTimes } from "@iconscout/react-unicons";
// import { useDispatch, useSelector } from "react-redux";
// import { uploadImage, uploadPost } from "../../actions/UploadAction";
const PostShare = () => {

    const imageRef = useRef();

    return (
        <div className="PostShare">
            <img
                src="https://www.w3schools.com/w3images/avatar1.png" className="avatar" alt="BackgroundPicture"
            />
            <div>
                <input
                    type="text"
                    placeholder="What's happening?"
                    required
                //   ref={desc}
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
                    // onClick={handleUpload}
                    // disabled={loading}
                    ><span style={{ fontWeight:"bold" }}>Share</span>
                        
                        {/* {loading ? "uploading" : "Share"} */}
                    </button>

                    <div style={{ display: "none" }}>
                        {/* <input type="file" ref={imageRef} onChange={onImageChange} /> */}
                    </div>
                </div>

                {/* {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )} */}
            </div>
        </div>
    )
}
export default PostShare