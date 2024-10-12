"use client"

import {z} from "zod"

export const UserProfile = z.object({
  job_title: z.union([z.string().min(4), z.string().length(0)]),
  company_name: z.union([z.string().min(4), z.string().length(0)]),
  company_web_address: z.union([z.string().min(4), z.string().length(0)])
})



// enum role {
//   employer = "EMPLOYER",
//   job_seeker = "JOBSEEKER",
// }

// Password regex: Must contain at least one letter, one number, and no special characters.
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

export const RegisterSchema = z
  .object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(
        passwordRegex,
        "Password must contain at least one letter and one number one number, and no special characters"
      ),
    confirm_password: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
    role: z.enum(["EMPLOYER", "JOBSEEKER"]), // Ensure "role" is typed as an enum
    profile: z
      .object({
        job_title: z.string().optional(),
        company_name: z.string().optional(),
        company_web_address: z.string().optional(),
      })
      .optional(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"],
  });

export const LoginSchema =  z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});
