import { NavLink, type NavLinkProps } from "react-router"
import { cn } from "./utils"

type NavLinkButtonProps = {
} & NavLinkProps

function NavLinkButton({ children, className, ...props }: NavLinkButtonProps) {
  return (
    <NavLink className={cn('bg-blue-500 hover:bg-blue-800 text-white py-1.5 px-4 rounded-md duration-300', className)} {...props}>
      {children}
    </NavLink>
  )
}

export default NavLinkButton
