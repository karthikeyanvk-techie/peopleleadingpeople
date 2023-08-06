import Container from './Container';
import { screen, render, fireEvent } from '@testing-library/react';
import { beforeEach, describe, test, expect } from 'vitest';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../../../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

describe('#Container', () => {
  beforeEach(() => {
    render(
      <RouterProvider router={router}>
        <Container />
      </RouterProvider>,
    );
  });

  test('If toggle is present', () => {
    const toggleButton = screen.getByRole('button', {
      name: /toggle/i,
    });
    expect(toggleButton).toBeDefined();
  });
  test("If 'Hello world!' is displaying", () => {
    expect(screen.getByText(/Hello world!/i)).toBeInTheDocument();
  });
  test("If 'Hello World!' is disappearing when toggle is clicked", () => {
    const toggleButton = screen.getByRole('button', {
      name: /toggle/i,
    });
    fireEvent.click(toggleButton);
    expect(screen.queryByText(/Hello world!/i)).not.toBeInTheDocument();
  });
});
