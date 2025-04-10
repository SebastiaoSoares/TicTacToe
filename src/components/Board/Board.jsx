import { useState } from "react";
import style from "./Board.module.css";
import Square from "./Square/Square";
import FinishModal from "../FinishModal/FinishModal";

export default function Board({ winner, setWinner, player, setPlayer }) {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [showModal, setShowModal] = useState(false);

  const handleClick = (i) => {
    if (board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = player;
    setBoard(newBoard);

    if (checkWinner(newBoard, player)) {
      setWinner(true);
      setShowModal(true);
    } else if (checkDraw(newBoard)) {
      setShowModal(true);
    } else {
      setPlayer(player === "ex" ? "oh" : "ex");
    }
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
      {showModal && (
        <FinishModal
          winner={winner}
          player={player}
          reset={() => {
            setBoard(Array(9).fill(""));
            setWinner(false);
          }}
          setShowModal={setShowModal}
        />
      )}
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
  return board.every((square) => square !== "");
}
