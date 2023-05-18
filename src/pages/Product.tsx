import  { useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import {Link} from 'react-router-dom'

import useAppDispatch from '../hooks/useAppDispatch'
import { DeleteProduct, createProduct, getAllProducts, sortByCategory, sortByPrice, updateProduct } from '../redux/reducers/productReducer'
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
          title: "Brant new one man",
          price: 10,
          description: "Badoro special",
          categoryId: 1,
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

    const handleupdate = async () => {
      const update = {
        id:445,
        title: "Bad title",
        price: 500
      }
      await dispatch(updateProduct(update))
    }

    const handledelete = async () => {
      await dispatch(DeleteProduct(4))
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
      <button onClick={handleupdate}>update product</button>
      <button onClick={handledelete}>Delete</button>
       {products.map(product => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h2>{product.category.name}</h2>
            <p>{product.description}</p>
            <p>{product.title}</p>
            <p>Price: {product.price}</p>
            <p>id {product.id}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Product