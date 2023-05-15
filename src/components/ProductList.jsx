import React from 'react'
import { Products } from '../types/products'

import {
    Card,
    CardContent,
    CardMedia, 
    Typography,  
    Grid 
} from '@mui/material'

const ProductList = ({products}) => {
  return (
    <Grid container spacing={3}>
    {products.map(product => (
      <Grid item xs={12} sm={6} md={4} key={product.id}>
        <Card>
          <CardMedia
            component="img"
            alt={product.title}
            height="140"
            image={product.images[0]}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {product.category.name}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Price: {product.price}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
  )
}

export default ProductList