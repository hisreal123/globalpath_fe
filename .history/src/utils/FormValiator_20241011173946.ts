"use client"

import {z} from "zod"


export const UserProfile = z.object({
  job_title: z.string().optional(),
  company_name: z.string().optional(),
  company_web_address: z.string().url({ message: "Invalid url" }).optional()
});

export const RegisterSchema = z
  .object({
    email: z
      .string()
      .min(13, {
        message: "Email must be 13 or more.",
      })
      .max(20),
    first_name: z
      .string()
      .min(2, {
        message: "First name must be at least 2 characters long",
      })
      .max(50),
    last_name: z.string().min(2).max(50),
    password: z.string().min(4).max(20),
    confirm_password: z.string().min(2).max(50),
    profile: UserProfile,
    role: z.enum(["EMPLOYER", "JOBSEEKER"]),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  })
  .refine(
    (data) => {
      //if role is EMPLOYER, profile fields are required
      if (data.role === "EMPLOYER") {
        return (
          !!data.profile?.job_title &&
          !!data.profile?.company_name &&
          !!data.profile?.company_web_address
        );
      }
      return true; // JOBSEEKER doesn't require the profile
    },
    {
      message: "Profile fields are required for EMPLOYER role",
      path: ["profile"],
    }
  );



export const LoginSchema =  z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});
