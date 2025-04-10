import { useState } from "react";
import { Logo } from "../../components";
import style from "./Play.module.css";
import Board from "../../components/Board/Board";
import Player from "./Player";

export default function Play() {
  const [player, setPlayer] = useState("ex");
  const [winner, setWinner] = useState(false);

  return (
    <>
      <main>
        <section>
          <div className={style.header}>
            <Logo size={60} />
            <h1>TicTacToe</h1>
          </div>
          <div>
            É a vez de...
            <div className={style.playersBox}>
              <Player player={player} variant="ex" />
              <Player player={player} variant="oh" />
            </div>
          </div>
          <Board
            winner={winner}
            setWinner={setWinner}
            player={player}
            setPlayer={setPlayer}
          />
        </section>
      </main>
    </>
  );
}
