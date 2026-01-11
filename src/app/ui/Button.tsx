import { buttonTags } from "@/app/ui/Dropdown";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren{
  onClick?: () => void;
}

export default async function Button({ children, onClick }: ButtonProps) {
  return (<>
    <button className={buttonTags} onClick={onClick}>
      {children}
    </button>
  </>)
}
