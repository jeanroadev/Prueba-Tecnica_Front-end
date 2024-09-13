// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import Chart from './components/Chart';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/app.scss'

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();
  const isUserProfile = location.pathname.startsWith('/user/');
  const isProfileRoute = location.pathname.includes('/user/');


  const handleSearch = async (search) => {
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${search}`);
      const firstTenUsers = response.data.items.slice(0, 10);
      const detailedUsers = await Promise.all(
        firstTenUsers.map(async user => {
          const userDetails = await axios.get(`https://api.github.com/users/${user.login}`);
          return { ...user, followers: userDetails.data.followers };
        })
      );
      setUsers(detailedUsers);
      setError('');  // Limpiar errores si hay éxito en la búsqueda
    } catch (err) {
      setError('Hubo un error al obtener los usuarios.');
    }
  };

  return (
    <div className="app">
      {!isUserProfile && <h1>Búsqueda de Usuarios en GitHub</h1>}
      {!isUserProfile && <SearchForm onSearch={handleSearch} />}
      {error && <ErrorBoundary message={error} />}


       {!isProfileRoute && (
            <div className='results' >
            <div className={`chartContainer ${users.length === 0 ? 'hidden' : ''}`}>
              <Chart users={users} />
            </div>
            <div className={`userlistContainer ${users.length === 0 ? 'hidden' : ''}`}>
              <UserList users={users}/>
            </div>
          </div>
      )}
      <Routes>
        <Route path="/user/:login" target="_blank" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
