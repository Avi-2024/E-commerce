import {z} from "zod";

// Creating an Object Schema

export const signupSchema = z.object({
    username:z
    .string({required_error:"Username is required"})
    .trim()
    .min(3,{message: "Username must be at least 3 characters"})
    .max(255,{message:"Username must not be more than 255 characters"}),

    email:z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message: "email must be at least 3 characters"})
    .max(255,{message:"email must not be more than 255 characters"}),

    phone:z
    .string({required_error:"phone is required"})
    .trim()
    .min(10,{message: "phone must be at least 10 characters"})
    .max(20,{message:"Username must not be more than 20 characters"}),

    password:z
    .string({required_error:"password is required"})
    .min(6,{message:"password must be at least 6 characters"})
    .max(255,{message:"password must not be more than 255 characters"})
});

export const signinSchema = z.object({
    email:z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message: "email must be at least 3 characters"})
    .max(255,{message:"email must not be more than 255 characters"}),

    password:z
    .string({required_error:"password is required"})
    .min(6,{message:"password must be at least 6 characters"})
    .max(255,{message:"password must not be more than 255 characters"})
})

