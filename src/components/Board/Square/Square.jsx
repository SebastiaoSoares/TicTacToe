import style from "./Square.module.css";

export default function Square({ onClick, value }) {
  return (
    <button
      onClick={onClick}
      className={`${style.default} ${style[value] || ""}`}
    ></button>
  );
}
