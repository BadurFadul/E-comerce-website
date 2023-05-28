import * as yup from "yup"

const loginSchema = yup.object({
    email: yup
        .string().email().required("email cannot be empty"),
    password: yup
        .string().required("password cannot be empty")
})

export type logindata = yup.InferType<typeof loginSchema>
export default loginSchema