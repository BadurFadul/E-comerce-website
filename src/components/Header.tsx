import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Link } from 'react-router-dom';

const Logo = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(10),
}));

const NavLinks = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
}));

const Profile = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

function Header() {
  return (
    <AppBar
      elevation={0}
      position='static'
      sx={{
        color:'black',
        background:'white',
        height:'5rem',
        padding:'1.5rem'
      }}
      >
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between',
          alignItems:'center'
       }}
       >
        <Logo>
          <Typography
            align='center'
          >
            Comerce.js
          </Typography>
        </Logo>
        <NavLinks>
          <Button color="inherit" component={Link} to="/home">Home</Button>
          <Button color="inherit" component={Link} to="/products">Shops</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
        </NavLinks>
        <Profile>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <Link to={`/card`}>
              <ShoppingBagOutlinedIcon />
            </Link>
            
          </IconButton>
          <IconButton color="inherit">
            <LightModeOutlinedIcon />
          </IconButton>
        </Profile>
      </Toolbar>
    </AppBar>
  );
}

export default Header;