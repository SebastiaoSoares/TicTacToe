import { useState } from "react";
import style from "./Square.module.css";

export default function Square({ onClick, player }) {
  const [squareState, setSquareState] = useState("default");

  return (
    <button
      onClick={() => {
        if (squareState === "default") {
          onClick();
          setSquareState(player);
        }
      }}
      className={`${style.default} ${style[squareState]}`}
    ></button>
  );
}
