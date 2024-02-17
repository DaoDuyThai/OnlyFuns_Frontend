import React, { useState, useEffect } from 'react';
import Sidebar from "../../components/Header/Sidebar";
import './SearchPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
{/*
  * @des SearchPeople
  * @author Trinh Minh Phuc
  * @date 16/02/2024
*/}
const friendsList = [
    {
        id: 1,
        name: 'Phuc1',
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

const SearchPeople = () => {
    const location = useLocation();
    const history = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredFriends, setFilteredFriends] = useState(friendsList);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get('q') || '';
        setSearchTerm(q);

        const filtered = friendsList.filter(friend =>
            friend.name.toLowerCase().includes(q.toLowerCase())
        );
        setFilteredFriends(filtered);
    }, [location.search]);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        history(`/search/people?q=${searchTerm}`);
    };

    return (
        <div className="search-page">
            <Sidebar setSearchTerm={handleSearch} />
            <div className="content">
                <p>Kết quả tìm kiếm : {searchTerm}</p>
                {/* <p className='topic'>Mọi người</p> */}
                {filteredFriends.map(friend => (
                    <div key={friend.id} className="friend">
                        <img src={friend.image} alt={friend.name} className="friend-image" />
                        <div className="friend-info">
                            <h4>{friend.name}</h4>
                            <p className='bio'>{friend.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPeople;
