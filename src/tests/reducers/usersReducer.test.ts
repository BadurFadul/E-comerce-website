import { cleanusers } from "../../redux/reducers/usersReducer"
import store from "../shared/store"


beforeEach (() => {
    store.dispatch((cleanusers))
})

describe("testing usersReducer.test", () => {
    test("testing initialstate", () => {
        
    })
})