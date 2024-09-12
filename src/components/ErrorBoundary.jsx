// ErrorBoundary.jsx
import React from 'react';

const ErrorBoundary = ({ message }) => {
  return <p style={{ color: 'red' }}>{message}</p>;
};

export default ErrorBoundary;
