import { cleanUpProducts, createProduct, getAllProducts } from "../../redux/reducers/productReducer"
import productserver from "../servers/productsServer"
import store from "../shared/store"
import { product1, product2, product3, product4, newProduct } from '../data/product'

beforeEach (() => {
    store.dispatch(cleanUpProducts())
})

beforeAll(() => {
    productserver.listen()
})

afterAll(() => {
    productserver.close()
})


describe("Test productReducer", () => {
    test("check initial state", () =>{
        expect(store.getState().productReducer).toEqual({
            products:[],
            loading: false,
            error: ""
        })
    })
    test("Check fetching products", async () => {
        await store.dispatch(getAllProducts())
        expect(store.getState().productReducer).toEqual({
            loading: false,
            error: "",
            products: [product1, product2, product3, product4]
        })
    })
    test("check if a new product created", async () => {
        await store.dispatch(createProduct(newProduct))
        expect(store.getState().productReducer.products.length).toBe(1)
    })

    test("check update a product", async () => {
        
    })
}) 