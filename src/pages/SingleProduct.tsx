import { useParams } from 'react-router-dom'

import {
  Container,
  Grid, 
  Box, 
  Typography,
  Button,
} from '@mui/material'
//import Carousel from 'react-material-ui-carousel'

import useAppSelector from '../hooks/useAppSelector'
import useAppDispatch from '../hooks/useAppDispatch'
import '..//styles/style.scss'
import { addToCart } from '../redux/reducers/card'
import { Products } from '../types/Products'


export const SingleProduct = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const productsingle = useAppSelector(state => state.productReducer.products)
    // eslint-disable-next-line eqeqeq
    const product = productsingle.find(product => product.id == id);


    if (!product) return <div>Product not found</div>;

    const handeAddtoCart = (product: Products) => {
      dispatch(addToCart(product))
    }

  return (
   <Container sx={{ marginTop:'4rem' }}>
    <Grid 
      container 
      spacing={2}
      sx={{
        height:'42rem',
      }}
    >
      <Grid item xs={6}>
      <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <img
              src={product.category.image}
              alt={product.category.name}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </Box>
      </Grid>
      <Grid item xs={6} sx={{}}>
        <Box sx={{
          display: 'flex',
          flexDirection:'column', 
          gap:'2rem', 
          justifyContent:'center',
          alignContent: 'center',
          marginTop:'2.1rem',
          }}
        >
          <Box>
            <Typography variant='h2'>
              {product.title}
            </Typography>
          </Box>
          <Box>
            <Typography variant='h5' >
              {product.category.name}
            </Typography>
          </Box>
          <Box>
            <Typography variant='subtitle1' sx={{color: 'grey'}}>
              {product.description}
            </Typography>
          </Box>
          <Box padding={1} sx={{display:'flex', justifyContent:'',  alignItems: 'center', gap: '2rem' }}>
            <Box>
              <Typography>
                {product.price} €
              </Typography>
            </Box>
            <Box>
                <Button variant='contained' onClick={ () => handeAddtoCart(product)}>
                  Add TO CARD
                </Button>
            </Box>
          </Box>
        </Box>
      </Grid>     
    </Grid>
   </Container>
  )
}

export default SingleProduct