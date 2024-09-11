import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = ({ setError }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username.length < 4) {
      setError("El nombre debe tener al menos 4 caracteres.");
      return;
    }
    if (username.toLowerCase() === 'iseijasunow') {
      setError("No se permite la búsqueda de este usuario.");
      return;
    }
    setError(null);
    navigate(`/users/${username}`);
  };

  return (
    <div className="search-form">
      <input 
        type="text" 
        placeholder="Buscar usuario..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchForm;
