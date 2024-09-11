import { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);

  return (
    <div>
      {error && <div className="error">{error}</div>}
      {children({ setError })}
    </div>
  );
};

export default ErrorBoundary;
