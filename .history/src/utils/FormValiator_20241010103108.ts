"use client"

import {z} from "zod"

const FormSchema = z.object({
    email : z.
    first_name: z.string().min(2, {
        message: "First name must be at least 2 characters long"
    }).max(50),
    last_name: z.string().min(2).max(50),
    company_name: z.string().min(2).max(50),
    job_title: z.string().min(2).max(50),
    is_recuiter: z.boolean({
        required_error: "is_recuiter is required",
        invalid_type_error: "is_recuiter must be a boolean"
    }),
    password: z.string().min(4).max(10),
    confirm_password: z.string().min(2).max(50),
})



export const LoginSchema =  z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export default {FormSchema, LoginSchema}
