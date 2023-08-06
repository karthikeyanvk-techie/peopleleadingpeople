import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface FooterProps {
  // Define any props you might pass to the Footer component
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        top: 'auto',
        bottom: 0,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        marginTop: 'auto', // Add this line
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ fontStyle: 'italic', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
        >
          © Karthikeyan VK
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
