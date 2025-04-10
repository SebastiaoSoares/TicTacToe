import { useState } from "react";
import style from "./Board.module.css";
import Square from "./Square/Square";

export default function Board({ winner, setWinner, player, setPlayer }) {
  const [board, setBoard] = useState(Array(9).fill(""));

  const handleClick = (i) => {
    if (winner) return;

    const newBoard = [...board];
    newBoard[i] = player;
    setBoard(newBoard);

    console.log(newBoard);

    if (checkWinner(newBoard, player)) {
      setWinner(player);
    } else if (checkDraw(newBoard)) {
      // modal empate
    } else {
      setPlayer(player === "ex" ? "oh" : "ex");
    }
    return;
  };

  return (
    <>
      <div className={style.board}>
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <Square onClick={() => handleClick(i)} value={board[i]} key={i} />
          ))}
      </div>
    </>
  );
}

function checkWinner(board, player) {
  const victoryConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return victoryConditions.some(
    ([a, b, c]) =>
      board[a] === player && board[b] === player && board[c] === player
  );
}

function checkDraw(board) {
  board.forEach((square) => {
    if (square == null) {
      return false;
    } else {
      return true;
    }
  });
}
