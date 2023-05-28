import * as yup from "yup"

const registrationSchema = yup.object({
    name: yup
        .string()
        .required("username cannot be empty")
        .min(6, "username must be at least 6 characters")
        .max(20, "username must be maximum 20 characters"),
    email: yup
        .string().email().required("email cannot be empty"),
    password: yup
        .string()
        .required("password cannot be empty")
        .min(5, "username must be at least 8 characters")
        .max(20, "username must be maximum 20 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),
    confirm: yup.string()
        .required("password cannot be empty")
        .oneOf([yup.ref("password")], "Password does not match"),
    avatar: yup.string()
        .required("Avatar can 't be empty")
})

export type registrationFormData = yup.InferType<typeof registrationSchema>
export default registrationSchema