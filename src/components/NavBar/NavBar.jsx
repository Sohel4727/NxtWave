import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from "../../assets/logo.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';


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

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
      <IconButton size="large" aria-label="show 4 new mails" color="gray">
      <Link style={{textDecoration:"none",color:"gray"}} to='/'>
              <Typography>Home</Typography>
        </Link>
            </IconButton>
      </MenuItem>
      <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="gray">
              <Typography>Programs</Typography>
            </IconButton>
      </MenuItem>
      <MenuItem >
      <IconButton size="large" aria-label="show 4 new mails" color="gray">
              <Link style={{textDecoration:"none",color:"gray"}} to='/review'>
              <Typography>Reviews</Typography>
              </Link>
            </IconButton>
      </MenuItem>
      <MenuItem >
      <IconButton size="large" aria-label="show 4 new mails" color="gray">
              <Typography >Hire with Us</Typography>
            </IconButton>
      </MenuItem>
      <MenuItem >
      <IconButton size="large" aria-label="show 4 new mails" color="gray">
              <Typography>Login</Typography>
              
            </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:'white',color:"gray"}}>
        <Toolbar>
        <Link style={{textDecoration:"none",color:"gray"}} to='/'>
          <img src={logo} alt="logo" width={100}/>
        </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="gray">
            <Link style={{textDecoration:"none",color:"gray"}} to='/'>
              <Typography sx={{fontSize:18}}>Home</Typography>
              </Link>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="gray">
              <Typography sx={{fontSize:18}}>Programs</Typography>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="gray">
              <Link to='/review' style={{textDecoration:"none",color:"gray"}}>
              <Typography sx={{fontSize:18}}>Reviews</Typography>
              </Link>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="gray">
              <Typography sx={{fontSize:18}}>Hire with Us</Typography>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="gray">
              <Typography sx={{fontSize:18,color:"#1565d8"}}>Login</Typography>
              <ArrowForwardIcon sx={{color:'#1565d8'}}/>
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
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}