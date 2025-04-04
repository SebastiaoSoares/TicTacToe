import style from "./Logo.module.css";

export default function Logo({ size = 60, className }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`${style.logo} ${className}`}
    ></div>
  );
}
