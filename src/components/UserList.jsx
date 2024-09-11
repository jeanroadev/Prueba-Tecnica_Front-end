import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = ({ query, setError }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
        setUsers(response.data.items.slice(0, 500));  // Los primeros 10 usuarios
      } catch (error) {
        setError("Error al obtener los usuarios");
      }
    };

    fetchUsers();
  }, [query]);

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-item">
          <Link to={`/user/${user.login}`}>{user.login} - {user.id}</Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
