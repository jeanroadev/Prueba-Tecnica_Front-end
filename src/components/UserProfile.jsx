import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    };
    fetchUser();
  }, [username]);

  return (
    user ? (
      <div className="user-profile">
        <img src={user.avatar_url} alt={user.login} />
        <h1>{user.login}</h1>
        <p>ID: {user.id}</p>
        <p>Seguidores: {user.followers}</p>
      </div>
    ) : <p>Cargando...</p>
  );
};

export default UserProfile;
