// UserProfile.jsx
import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/userprofile.scss'

const UserProfile = () => {
  const { login } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${login}`);
        setUserData(response.data);
      } catch (error) {
        setError('Error al obtener los detalles del usuario.');
      }
    };
    fetchUserData();
  }, [login]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!userData) {
    return <p>Cargando datos del usuario...</p>;
  }

  return (
    <div className='userProfile'>
      <button onClick={() => navigate(-1)}>⬅️</button>
      <h2>Perfil de {userData.login}</h2>
      <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="150" />
      <p>Nombre de usuario: {userData.login}</p>
      <p>ID: {userData.id}</p>
      <p>Seguidores: {userData.followers}</p>
      <p>Siguiendo: {userData.following}</p>
      <p>Biografía: {userData.bio || 'No hay biografía disponible'}</p>
    </div>
  );
};

export default UserProfile;
