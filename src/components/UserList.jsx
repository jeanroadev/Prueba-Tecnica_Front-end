// UserList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/userlist.scss'

const UserList = ({ users }) => {
  return (
    <ul className='userList'>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/user/${user.login}`}>
            {user.login} (ID: {user.id})
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
