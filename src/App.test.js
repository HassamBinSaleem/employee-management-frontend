import React from 'react'; // Ensure React is imported
import { render, screen } from '@testing-library/react';
import App from './App';

// This test checks if the <h1> element with "Employee Management System" is rendered
test('renders main <h1> heading', () => {
  render(<App />);
  
  // Find the <h1> element with the text "Employee Management System"
  const headingElement = screen.getByRole('heading', { level: 1, name: /Employee Management System/i });
  
  // Check if the <h1> is in the document
  expect(headingElement).toBeInTheDocument();
});
