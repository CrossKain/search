
import clsx from "clsx"
import s from "./Button.module.css"
const Button = ({children, onClick, active}) => {
  return (
<button className={clsx(s.button, {[s.active]: active})} onClick={onClick}>{children}</button>
  )
}

export default Button