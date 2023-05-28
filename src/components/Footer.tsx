import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Grid, Typography,ListItemText, List } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
    sx={{
      pt: 12,
      pb: 12,
      fontSize: { xs: '19px', md: '19px' }
    }}
  >
    <Grid container spacing={2} justifyContent="center">

    <Grid item md={6} lg={4}>
        <Typography variant="h5">Commer.js</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
          incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud.
        </Typography>
        <Box
          sx={{
            mt: 9,
            color:'gray',
          }}
        >
          {`©${new Date().getFullYear()} | React | Material UI | React Router`}
        </Box>
      </Grid>

      <Grid item md={6} lg={4}>
        <Typography variant="h5">About us</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
          incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud.
        </Typography>
        <Box
          sx={{
            mt: 7,
            color:'gray',
            textAlign:'center'
          }}
        >
          <a target='_blank' href="https://www.linkedin.com/in/badreldin-fadul-821bb512b/" rel="noreferrer">
            <LinkedInIcon sx={{ mr: 2, fontSize:'2.5rem' }}  />
          </a>
          <a target='_blank' href="https://github.com/BadurFadul" rel="noreferrer">
            <GitHubIcon sx={{ mr: 2, fontSize:'2.5rem' }} />
          </a>
          <a target='_blank' href="mailto:badoryousif.by@gmail.com" rel="noreferrer">
            <EmailOutlinedIcon sx={{fontSize:'2.5rem'}} />
          </a>
          
        </Box>
      </Grid>
      <Grid item md={6} lg={2}>
        <Typography variant="h5">information</Typography>
        <List>
          <ListItemText>
            <Typography lineHeight={2} variant="subtitle2">
              About Us
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="subtitle2">
              Order Tracking
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="subtitle2">
              Privacy &amp; Policy
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="subtitle2">
              Terms &amp; Conditions
            </Typography>
          </ListItemText>
        </List>
      </Grid>
      <Grid item md={6} lg={2}>
        <Typography variant="h5">my account</Typography>
        <List>
          <ListItemText>
            <Typography lineHeight={2} variant="subtitle2">
              Login
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="subtitle2">
              My Cart
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="subtitle2">
              My Account
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="subtitle2">
              Wishlist
            </Typography>
          </ListItemText>
        </List>
      </Grid>
      <Grid item md={6} lg={4}>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Footer