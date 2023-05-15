import React, { useEffect, useState } from 'react'
import { AxiosError } from 'axios'

import useAppDispatch from '../hooks/useAppDispatch'
import { createProduct, getAllProducts, sortByCategory, sortByPrice } from '../redux/reducers/productReducer'
import useAppSelector from '../hooks/useAppSelector'
import ProductList from '../components/ProductList'

import {
  Card,
  CardContent,
  CardMedia, 
  Typography,  
  Grid 
} from '@mui/material'
import { UserLogin, createUser } from '../redux/reducers/usersReducer'


const Product = () => {
    const dispatch = useAppDispatch()
    const {products, error, loading} = useAppSelector(state => state.productReducer)
    const [catSort, setCatSort] = useState<"asc"|"desc">("asc")
    const [priceSort, setPriceSort] = useState<"low"|"high">("low")

    useEffect(() =>{
        dispatch(getAllProducts())
    },[])

    const handleCategory = () => {
      dispatch(sortByCategory(catSort))
      setCatSort(catSort === "asc" ? "desc" : "asc")
    }
    const handlePrice = () => {
      dispatch(sortByPrice(priceSort))
      setPriceSort(priceSort === "low" ? "high" : "low")
    }

    const handleProduct = async () => {
      try {
        const newProduct = {
          title: "New Product",
          price: 10,
          description: "A description",
          category: {
            id:5,
            name: "somthing"
          },
          images: ["https://placeimg.com/640/480/any"]
        };
  
        await dispatch(createProduct(newProduct));
        console.log("Product created successfully!");
      } catch (error) {
        const err = error as AxiosError
        console.log("Error creating product:", err.message);
      }
    }

    const handleuser =  async () => {
      const user = {
        name: "Badman",
        email: "test@mail.com",
        password: "test",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867"
      }
     await dispatch(createUser(user))
    }

    const handlelogin =  async () => {
      const login = {
        email: "test@mail.com",
        password: "test",
      }
     await dispatch(UserLogin(login))
    }


    if (loading) {
      return (
        <h2>loading...</h2>
      )
    }
    if (error) {
      return (
        <h2>Error in the server</h2>
      )
    }

  return (
    <div>
      <button onClick={handleCategory}>sort by category</button>
      <button onClick={handlePrice}>sort by price</button>
      <button onClick={handleProduct}>Add product</button>
      <button onClick={handleuser}>Add user</button>
      <button onClick={handlelogin}>Login</button>
       {products.map(product => (
        <div key={product.id}>
          <h2>{product.category.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Product