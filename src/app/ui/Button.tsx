import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export const buttonTags =
  "px-1 hover:underline cursor-pointer hover:bg-blue-800 hover:text-white";

export default function Button({ children, className = "", ...rest }:
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (<>
    <button className={`${buttonTags} ${className}`} {...rest}>
      {children}
    </button>
  </>)
}
