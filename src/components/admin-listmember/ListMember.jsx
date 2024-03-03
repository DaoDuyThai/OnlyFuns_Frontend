import React, { useState, useEffect } from 'react';
import axios from '../../setup/axios.js';
import UserCard from './UserCard.jsx';
import '../../style/admin-listmember/ListMember.css';

function ListMember() {
  const [usersWithRole1, setUsersWithRole1] = useState([]);
  const [usersWithoutRole1, setUsersWithoutRole1] = useState([]);
  const [showAllUsers, setShowAllUsers] = useState(false);

  useEffect(() => {
    axios.get('/members')
      .then(response => {
        const allUsers = response.data;

        if (Array.isArray(allUsers)) {
          const activeUsers = allUsers.filter(user => user.userId.isActive);
          const usersWithRole1 = activeUsers.filter(user => user.userId.role === 1);
          const usersWithoutRole1 = activeUsers.filter(user => user.userId.role !== 1);

          setUsersWithRole1(usersWithRole1);
          setUsersWithoutRole1(usersWithoutRole1);

        } else {
          console.error('API response is not an array:', allUsers);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const handleShowAll = () => {
    setShowAllUsers(true);
  }

  return (
    <div className="list-member-content">
      <div className="list-member-header d-flex justify-content-center">
        <h3>Members</h3>
      </div>
      <div className='d-flex justify-content-center'>
        <div className="list-member">
          <div>
            <h4 className="fw-bold">Members</h4>
          </div>
          <div>
            <p>
              New people and Pages who join this group will appear here.
            </p>
          </div>
          <div className="search-bar">
            <form>
              <input type="text" placeholder="Find a member" />
            </form>
          </div>
          <hr />
          <div>
            {Array.isArray(usersWithRole1) && (showAllUsers ? usersWithRole1 : usersWithRole1.slice(0, 5)).map(user => (
              <UserCard key={user._id} user={user} />
            ))}
            {usersWithRole1.length > 5 && !showAllUsers && <button className='btn btn-light show-all-button' onClick={handleShowAll}>View All</button>}
          </div>
          <hr />
          <div>
            <h5>Admin & moderators</h5>
          </div>
          <div>
            {Array.isArray(usersWithoutRole1) && (showAllUsers ? usersWithoutRole1 : usersWithoutRole1.slice(0, 5)).map(user => (
              <UserCard key={user._id} user={user} />
            ))}
            {usersWithoutRole1.length > 5 && !showAllUsers && <button className='btn btn-light show-all-button' onClick={handleShowAll}>View All</button>}
          </div>
   
        </div>
      </div>
    </div>
  );
}

export default ListMember;
