import { useRef, useState } from 'react';
import './PostShare.css';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';

/*
 * @author Đào Duy Thái
 * @date 14/02/2024
 * @des Input box for writing a new post and share them
 */
const PostShare = () => {
    const imageRef = useRef(null);

    const [content, setContent] = useState('');
    const [images, setImages] = useState(null);

    function handleUpload() {
        const data = {
            content,
            images,
        };
        console.log(data);
    }

    return (
        <div className="PostShare">
            <img
                src="https://www.w3schools.com/w3images/avatar1.png"
                className=""
                alt="BackgroundPicture"
            />
            <div>
                <input
                    type="text"
                    value={content}
                    placeholder="What's happening?"
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <div className="postOptions">
                    <div
                        className="option"
                        style={{ color: 'var(--photo)' }}
                        onClick={() => imageRef.current.click()}
                    >
                        <input
                            type="file"
                            ref={imageRef}
                            accept="image/*"
                            multiple
                            style={{ display: 'none' }}
                            onChange={(e) => setImages(e.target.files)}
                        />
                        <UilScenery />
                        Photo
                    </div>

                    <div className="option" style={{ color: 'var(--video)' }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div
                        className="option"
                        style={{ color: 'var(--location)' }}
                    >
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{ color: 'var(--shedule)' }}>
                        <UilSchedule />
                        Shedule
                    </div>
                    <button
                        className="btn btn-primary ps-button"
                        onClick={handleUpload}
                        // disabled={loading}
                    >
                        <span style={{ fontWeight: 'bold' }}>Share</span>

                        {/* {loading ? "uploading" : "Share"} */}
                    </button>

                    <div style={{ display: 'none' }}>
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
    );
};
export default PostShare;
