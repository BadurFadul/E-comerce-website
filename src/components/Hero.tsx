import React from 'react'
import {
Button,
Typography,
Grid,
Box 
  } from '@mui/material'

  import '..//styles/style.scss'



const Hero = () => {
  return (
   <Grid container

   sx={{
    padding:'1rem',
    marginTop:'4rem'
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
            alignItems:'start',
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
                we want your choice of e-commerce to
                to be us. we offer love and free delivery.
                our organic and fairtrad clothing ensures that 
                your body can  lay and be happy.
            </Typography>
            <Button
            
            >
              Shop now

            </Button>
          </Box>
      </Grid>
      <Grid item xs={12} md={8}>
          <Box
          component="img"
          sx={{
            height:'100%',
            width: '100%',
            objectFit: 'cover'
          }}
          src={require('../assets/images/hero.jpg')}
          >
            

          </Box>
      </Grid>
   </Grid>
  )
}

export default Hero