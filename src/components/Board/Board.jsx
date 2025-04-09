import style from "./Board.module.css";
import Square from "./Square/Square";

export default function Board({ player, setPlayer }) {
  return (
    <div className={style.board}>
      {Array(9)
        .fill(null)
        .map((_, i) => (
          <Square
            onClick={() => setPlayer(player === "ex" ? "oh" : "ex")}
            player={player}
            key={i}
          />
        ))}
    </div>
  );
}
