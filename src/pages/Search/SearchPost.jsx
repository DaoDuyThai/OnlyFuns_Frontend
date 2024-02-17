import React, { useState, useEffect } from 'react';
import Sidebar from "../../components/Header/Sidebar";
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchPage.css';
{/*
  * @des SearchPost
  * @author Trinh Minh Phuc
  * @date 16/02/2024
*/}
const initialPostList = [
  {
    id: 1,
    author: 'Phuc',
    time: '3h',
    content: 'This is a post content.',
    image: 'https://i.pinimg.com/736x/f6/59/8c/f6598c340b2b51301b76eef2c01fd154.jpg',
    imgContent: '',
  },
  {
    id: 2,
    author: 'Phuc5',
    time: '3h',
    content: 'Chiều nay có 2 bạn qua Hi mua đồ làm rơi tiền ở quán Ai quen 2 bạn nhắn bạn liên hệ lại c nhận lại tiền rơi  nhé!!!',
    image: 'https://i.pinimg.com/736x/f6/59/8c/f6598c340b2b51301b76eef2c01fd154.jpg',
    imgContent: 'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/09/cho-con-11-1024x576.jpg'

  },
  {
    id: 3,
    author: 'Phuc9',
    time: '3h',
    content: 'Yet another post content.',
    image: 'https://i.pinimg.com/736x/f6/59/8c/f6598c340b2b51301b76eef2c01fd154.jpg',
    imgContent: 'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/09/cho-con-11-1024x576.jpg'

  },
];

const SearchPost = () => {
  const location = useLocation();
  const history = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q') || '';
    setSearchTerm(q);

    const filteredPosts = initialPostList.filter(post => {
      return post.content.toLowerCase().includes(q.toLowerCase()) || post.author.toLowerCase().includes(q.toLowerCase());
    });
    setFilteredPosts(filteredPosts);
  }, [location.search]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    history(`/search/posts?q=${searchTerm}`);
  };

  return (
    <div className="search-page">
      <Sidebar setSearchTerm={handleSearch} />
      {filteredPosts.map(post => (
        <div key={post.id} className="content1">
          <div className='post'>
            <img src={post.image} alt={post.author} className="friend-image" />
            <div className="friend-info">
              <h4>{post.author}</h4>
              <p className='bio'>{post.time}</p>
            </div>
          </div>
          <div className="post-content">
            <p>{post.content}</p>
            {post.imgContent && <img src={post.imgContent} alt="post image" />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchPost;
