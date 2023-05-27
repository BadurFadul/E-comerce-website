import  { useEffect, useState } from 'react'

import useAppDispatch from '../hooks/useAppDispatch'
import { getAllProducts, sortByCategory, sortByPrice } from '../redux/reducers/productReducer'
import useAppSelector from '../hooks/useAppSelector'
import ProductCart from '../components/ProductCart'

import {
  Container,
  Grid, 
  Box, 
  TextField,
  FormControl,
  InputLabel,  
  MenuItem,
  Select,
  Button
} from '@mui/material'
//import { UserLogin, createUser } from '../redux/reducers/usersReducer'


const Product = () => {
    const dispatch = useAppDispatch()
    const {products, error, loading} = useAppSelector(state => state.productReducer)
    const [selectedValue, setSelectedValue] = useState("cat_asc"); // set initial state
    //const [catSort, setCatSort] = useState<"asc"|"desc">("asc")
    //const [priceSort, setPriceSort] = useState<"low"|"high">("low")

    useEffect(() =>{
        dispatch(getAllProducts())
    },[])

  

    if (loading) {
      return (
        <Container>loading...</Container>
      )
    }
    if (error) {
      return (
        <Container>Error in the server</Container>
      )
    }

  return (
    <Container sx={{ marginTop:'4rem' }}>
      <Box sx={{ display: 'flex', marginBottom: '2rem', gap:'1rem', justifyContent: 'center'}}>
        <Box>
          <TextField
            label='Search'
            required
            placeholder='Search for specific product'
        
          >
          </TextField>
        </Box>
        <Box>
            <FormControl sx={{ minWidth:250}}>
              <InputLabel>Sort by</InputLabel>
              <Select
                value={selectedValue}
                onChange={(e) => {
                    setSelectedValue(e.target.value);
                    const [type, order] = (e.target.value as string).split('_');
                    if (type === 'cat') {
                        dispatch(sortByCategory(order as "asc" | "desc"));
                    } else if (type === 'price') {
                        dispatch(sortByPrice(order as "low" | "high"));
                    }
                }}
              >
                <MenuItem value="cat_asc">Category - Ascending</MenuItem>
                <MenuItem value="cat_desc">Category - Descending</MenuItem>
                <MenuItem value="price_low">Price - Low to High</MenuItem>
                <MenuItem value="price_high">Price - High to Low</MenuItem>
              </Select>
          </FormControl>
        </Box>
        <Box>
            <Button></Button>
        </Box>
      </Box>
      <Grid container spacing={5}>
        {Array.isArray(products) && products.map(products => (
          <ProductCart key={products.id} products={products}></ProductCart>
          
        ))}
      </Grid>
      
    </Container>
  )
}

export default Product