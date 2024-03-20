import { useRef, useState } from 'react';
import './PostShare.css';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import uploadImage from '../../service/FireBase/Config.js';
import { createPost } from '../../service/PostService.js';
import { toast } from 'react-toastify';

/*
 * @author Đào Duy Thái
 * @date 14/02/2024
 * @des Input box for writing a new post and share them
 */

//Todo: Add AI model to detect content
const PostShare = () => {
    const imageRef = useRef(null);

    const [content, setContent] = useState('');
    const [imagesFile, setImagesFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    function isImageFile(file) {
        const imageTypes = [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/bmp',
            'image/webp',
            'image/tiff',
            'image/jpg',
        ];
        return imageTypes.includes(file.type);
    }

    function handleUploadImage(e) {
        const files = e.target.files;
        const nonImageFile = [];
        Array.from(files).forEach((file) => {
            if (!isImageFile(file)) {
                nonImageFile.push(file);
            }
        });
        if (nonImageFile.length > 0) {
            toast.error('Only image file is allowed');
        } else {
            setImagesFile(files);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            }
            reader.readAsDataURL(files[0]);
        }
    }

    async function handleUpload() {
        if (content !== '') {
            const imageUrls = await uploadImageHandle(imagesFile);
            const images = imagesFile ? imageUrls.map((url) => url) : [];
            const UserId = localStorage.getItem('UserId');
            const data = {
                userId: UserId,
                content: content,
                image: images,
            };
            try {
                const response = await createPost(
                    '/post',
                    JSON.stringify(data),
                );
                if (response.status === 'success') {
                    toast.success('Post created successfully');
                    setContent('');
                    setImagesFile(null);
                } else if (response.status === 'fail') {
                    toast.error('Post creation failed');
                    console.error(response.message);
                    setContent('');
                    setImagesFile(null);
                    setImagePreview(null);
                }
            } catch (e) {
                console.error(e);
            }
        } else {
            toast.error('Maybe you forgot to write something');
        }
    }

    async function uploadImageHandle(image) {
        try {
            const images = Array.from(image).map((img) => uploadImage(img));
            return await Promise.all(images);
        } catch (e) {
            console.error(e);
        }
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
                {imagePreview && <img alt="preview" src={imagePreview} />}
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
                            onChange={(e) => handleUploadImage(e)}
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
