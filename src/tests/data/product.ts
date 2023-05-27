import {Products} from '../../types/Products'
import { CreateProduct } from '../../types/CreateProduct'

const product1: Products = {
    id: 1,
    title: "A  product",
    price: 100,
    description: "product 1",
    images: [],
    category: {
        id: 1,
        name: "A category",
        image: ""
    }
}
const product2: Products = {
    id: 2,
    title: "A  product 2",
    price: 200,
    description: "product 2",
    images: [],
    category: {
        id: 1,
        name: "A category 2",
        image: ""
    }
}
const product3: Products = {
    id: 3,
    title: "A  product 3",
    price: 300,
    description: "product 3",
    images: [],
    category: {
        id: 1,
        name: "A category 3",
        image: ""
    }
}
const product4: Products = {
    id: 1,
    title: "A  product 4",
    price: 400,
    description: "product 4",
    images: [],
    category: {
        id: 1,
        name: "A category 4",
        image: ""
    }
}

const newProduct: CreateProduct = {
    title: "new Product",
    price: 110,
    description: "A description",
    categoryId: 1,
    images: []
}
const ProductArray = [product1, product2, product3, product4]

export {product1, product2, product3, product4, newProduct}

export default ProductArray