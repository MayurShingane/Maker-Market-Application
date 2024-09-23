import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function AdminNavbar({handleSideBarViewInMobile}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + isLargeScreen, backgroundColor: 'rgb(0, 0, 22)' }}>
        <Toolbar>
          {!isLargeScreen && <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleSideBarViewInMobile}
          >
            <MenuIcon />
          </IconButton>}
          <Avatar alt="Maker Market" src="data:image/png;base64,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" />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}