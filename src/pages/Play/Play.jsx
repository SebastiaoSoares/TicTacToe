import { useState } from "react";
import { Logo } from "../../components";
import style from "./Play.module.css";
import Board from "../../components/Board/Board";

export default function Play() {
  const [player, setPlayer] = useState("ex");

  return (
    <>
      <Logo />
      <h1 className={style.mainTitle}>Play game</h1>
      <Board player={player} setPlayer={setPlayer} />
      <h1>Player: {player}</h1>
    </>
  );
}
