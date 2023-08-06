import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface HeaderProps {
  timer: number;
}

const Header: React.FC<HeaderProps> = ({ timer }) => {
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontStyle: 'italic', fontWeight: 'bold' }}>
          Power Up People Leading People
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {formatTime(timer)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
