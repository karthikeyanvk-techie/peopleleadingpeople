import { screen, render, fireEvent } from '@testing-library/react';
import { beforeEach, describe, test, expect } from 'vitest';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../../../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

describe('#Navbar', () => {
  beforeEach(() => {
    render(
      <RouterProvider router={router}>
        <Navbar />
      </RouterProvider>,
    );
  });

  test('If image is present', () => {
    const img = screen.getByRole('img', {
      name: /cadenz\.ai logo/i,
    });
    expect(img).toBeVisible();
  });

  test('if user info container is visible', () => {
    const userInfo = screen.getByRole('button', {
      name: /open settings/i,
    });
    expect(userInfo).toBeVisible();
  });

  test('if logout option is visible on clicking user info', () => {
    const userInfo = screen.getByRole('button', {
      name: /open settings/i,
    });
    fireEvent.click(userInfo);
    expect(screen.getByText(/Logout/i)).toBeDefined();
  });
});
