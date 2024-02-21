import React, { useState, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import './SearchPage.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
{/*
  * @des SearchPage
  * @author Trinh Minh Phuc
  * @date 16/02/2024
*/}
const friendsList = [
  {
    id: 1,
    name: 'Phuc Minh',
    image: 'https://i.pinimg.com/736x/f6/59/8c/f6598c340b2b51301b76eef2c01fd154.jpg',
    bio: 'song o thanh hoa'
  },
  {
    id: 2,
    name: 'Phuc2',
    image: 'https://i.pinimg.com/736x/f6/59/8c/f6598c340b2b51301b76eef2c01fd154.jpg',
    bio: 'oke roi nhe'
  },
  {
    id: 3,
    name: 'Phuc3',
    image: 'https://i.pinimg.com/736x/f6/59/8c/f6598c340b2b51301b76eef2c01fd154.jpg',
    bio: 'Bob it ne Bob it neBob it ne'
  },
  {
    id: 4,
    name: 'Phuc4',
    image: 'https://i.pinimg.com/736x/f6/59/8c/f6598c340b2b51301b76eef2c01fd154.jpg',
    bio: 'song o Thanh Hoá'
  },
  {
    id: 5,
    name: 'Tuân',
    image: 'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/09/cho-con-11-1024x576.jpg',
    bio: 'Tuan an cuc'
  },
];

const postList = [
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

const SearchPage = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    const { q } = queryString.parse(location.search);
    if (q) {
      setSearchTerm(q);
    }
  }, [location.search]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    history(`/search/top?q=${searchTerm}`);
  };

  const filteredFriends = friendsList.filter(friend => {
    return friend.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const filteredPosts = postList.filter(post => {
    return post.content.toLowerCase().includes(searchTerm.toLowerCase()) || post.author.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <Header />
      <div className="search-page">
        <Sidebar setSearchTerm={handleSearch} />
        <div className="content">
          <p>Kết qủa tìm kiếm: {searchTerm}</p>
          {/* <p className='topic'>Mọi người</p> */}
          {filteredFriends.slice(0, showAll ? filteredFriends.length : 3).map(friend => (
            <div key={friend.id} className="friend">
              <img src={friend.image} alt={friend.name} className="friend-image" />
              <div className="friend-info">
                <b>{friend.name}</b>
                <p className='bio'>{friend.bio}</p>
              </div>
            </div>
          ))}
          {!showAll && filteredFriends.length > 3 && (
            <button onClick={toggleShowAll} className='custom-button'>Xem tất cả</button>
          )}
        </div>

        {/* {filteredPosts.map(post => (
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
              <img src={post.imgContent} />
            </div>
          </div>
        ))} */}
        <div className='post'>
          <Post />
        </div>

      </div>
    </>
  );
}

export default SearchPage;
