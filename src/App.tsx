import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from '@pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import theme from './config/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
