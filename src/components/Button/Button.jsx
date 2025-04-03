import style from "./Button.module.css"
import { Link } from "react-router-dom"

export default function Button({to = "/", variant = "primary", size = "large", className = "", children, ...props }) {
    return <Link to={ to } className={`${style.btn} ${style[variant]} ${style[size]} ${className}`} {...props}>{ children }</Link>
}
