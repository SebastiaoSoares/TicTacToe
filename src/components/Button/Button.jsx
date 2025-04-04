import style from "./Button.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Button({
  to = "/",
  variant = "primary",
  size = "large",
  occupy = "fill",
  className = "",
  children,
  ...props
}) {
  return (
    <Link
      to={to}
      className={`${style.btn} ${style[variant]} ${style[size]} ${style[occupy]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

Button.PropTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  occupy: PropTypes.oneOf(['fill', 'fix', 'fit'])
};

export default Button;
