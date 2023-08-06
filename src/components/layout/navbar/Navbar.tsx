import CadenzLogo from '@images/cadenz-logo-black.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Offset: React.FC = styled('div')(({ theme }) => theme.mixins.toolbar);

const Navbar: React.FC<{ auth: boolean }> = ({ auth = false }) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );
  const navigate = useNavigate();

  const handleOpenUserMenu: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleLogout = () => {
    setAnchorElUser(null);
    sessionStorage.clear();
    navigate('/login', { replace: true });
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const user = { user: 'John Doe', role: 'PM' };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: '0 1px 4px rgba(0,0,0,.2)',
          bgcolor: '#fff',
        }}
      >
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Link component={RouterLink} to="/">
              <Box
                component={'img'}
                src={CadenzLogo}
                alt="Cadenz.ai Logo"
                sx={{ height: 60 }}
              />
            </Link>
            {auth ? (
              <Box sx={{ flexGrow: 0, ml: 'auto' }}>
                <Tooltip title="Open Settings">
                  <Button
                    onClick={handleOpenUserMenu}
                    sx={{
                      textTransform: 'capitalize',
                      color: '#333',
                    }}
                    disableRipple
                    startIcon={
                      <Avatar
                        src="/static/images/avatar/2.jpg"
                        sx={{ width: 50, height: 50 }}
                      />
                    }
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                      }}
                    >
                      <Typography variant="caption" textTransform={'uppercase'}>
                        {user?.role.toLowerCase()}
                      </Typography>
                      <Typography variant="body2">{user?.user}</Typography>
                    </Box>
                  </Button>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : null}
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
    </>
  );
};

export default Navbar;
