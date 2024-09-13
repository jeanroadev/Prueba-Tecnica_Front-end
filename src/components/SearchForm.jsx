// SearchForm.jsx
import React, { useState } from 'react';
import '../styles/SearchForm.scss'

const SearchForm = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (search.length < 4) {
      setError('El término de búsqueda debe tener al menos 4 caracteres.');
      return;
    }
    if (search.toLowerCase() === 'iseijasunow') {
      setError(<>
        No se permite la búsqueda de la palabra "iseijasunow". Aquí tienes más{' '}
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel="noopener noreferrer">
          información
        </a>.
      </>);
      return;
    }
    setError('');
    onSearch(search);
  };

  return (
    <div className='searchForm'>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar usuario en GitHub"
      />
      <button onClick={handleSearch}>🔍</button>
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default SearchForm;
