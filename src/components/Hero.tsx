import React from 'react'
import {
Button,
Typography,
Grid,
Box 
} from '@mui/material'
import { Link } from 'react-router-dom'

import '../styles/style.scss'


const Hero = () => {
  return (
   <Grid container
   sx={{
    padding:'1rem',
    marginTop:'4rem',
    height: '80vh',
    width: '100%',
    backgroundColor: '#f5f5f5'
   }}
   >
      <Grid 
        item 
        xs={12} 
        md={4}
        sx={{
          display:'flex'
        }}  
      >
          <Box
          sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'flex-start',
            gap:'2rem'
          }}
          >
            <Typography 
              variant='h2'
            >
                Shop together
            </Typography>
            <Typography
              variant='body1'
            >
                We want your choice of e-commerce to
                be us. We offer love and free delivery.
                Our organic and fairtrade clothing ensures that 
                your body can lay and be happy.
            </Typography>
            <Button variant='contained' component={Link} to="/products">
              Shop now
            </Button>
          </Box>
      </Grid>
      <Grid item xs={12} md={8}>
          <Box
          sx={{
            height:'100%',
            width: '100%',
            backgroundImage: `url(${require('../assets/images/hero.jpg')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          />
      </Grid>
   </Grid>
  )
}

export default Hero