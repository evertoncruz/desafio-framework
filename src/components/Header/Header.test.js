import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';

describe('Header Component', () => {
  test('should countain a title', () => {
    render(<Header />);

    const headerTitle = screen.getByText('Desafio Framework');
    expect(headerTitle).toBeInTheDocument();
  });
});