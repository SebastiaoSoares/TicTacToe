import style from "./Logo.module.css";

export default function Logo({ size = 60, grayScale, className }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`${style.logo} ${
        grayScale ? style.grayScale : ""
      } ${className}`}
    ></div>
  );
}
