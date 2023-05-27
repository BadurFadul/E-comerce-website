import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';

import useAppSelector from '../hooks/useAppSelector';


const Card = () => {
  const {items, loading, error} = useAppSelector(state => state.cardReducer);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if(items.length ===0){
    return <Typography variant='h5'>your cart is empty</Typography>
  }

  return (
    <Container sx={{marginTop:'2rem'}}>
      <Typography variant='h3'>
        list in your cart
      </Typography>
      <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={6} key={item.product.id}>
          <Paper>
            <img src={`${item.product.images}`} alt={item.product.title} style={{width: '100%'}} />
            <h4>{item.product.title}</h4>
            <p>Quantity: {item.quantity}</p>
          </Paper>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
}

export default Card;