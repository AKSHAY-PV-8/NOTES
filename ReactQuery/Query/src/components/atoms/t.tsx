import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>,'className'>{
    text:string
    variant?: "primary" | "secondary" | "gost"
}
export const Button =({text,variant="primary",...props}:ButtonProps)=>{
return <button className={ clsx(
            "px-3 py-2 rounded-lg",
            {
                "bg-transparent border text-black  border-blue-500": variant === "gost",
                "bg-blue-500 text-white": variant === "primary",
                "bg-gray-500 text-white": variant === "secondary",
            }
)} {...props}>{text}</button> 
 
}   