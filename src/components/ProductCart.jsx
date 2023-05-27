import React from 'react'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import {Link} from 'react-router-dom'
import {
    Typography,  
    Grid,
    Paper,
    Box,
    IconButton 
} from '@mui/material'

import useAppDispatch from '../hooks/useAppDispatch';
import { addToCart } from '../redux/reducers/card';

const ProductCart = ({products}) => {
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    console.log("Adding to cart:", products);
    dispatch(addToCart(products));
  }

  return (
    <Grid item xs={3}>
        <Paper elevation={3}>
          <Link to={`/products/${products.id}`}>
          <img className='img' src={products.category.image} alt="" />
          </Link>
          
          <Box padding={1}>
            <Typography variant='h6'>
              {products.title}
            </Typography>
            <Typography variant='subtitle1'>
              {products.category.name}
            </Typography>
          </Box>
          <Box padding={1} sx={{display:'flex', justifyContent:'space-between', alignItems: 'center' }}>
            <Box>
              <Typography>
                {products.price} €
              </Typography>
            </Box>
            <Box>
              <IconButton color="inherit" onClick={handleAddToCart} >
              <LocalGroceryStoreOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        </Paper>
    </Grid>
  )
}

export default ProductCart