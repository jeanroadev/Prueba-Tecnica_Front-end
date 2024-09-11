import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        {({ setError }) => (
          <>
            <SearchForm setError={setError} />
            <Routes>
              <Route path="/users/:query" element={<UserList setError={setError} />} />
              <Route path="/user/:username" element={<UserProfile />} />
            </Routes>
          </>
        )}
      </ErrorBoundary>
    </Router>
  );
}

export default App;
