import style from "./FinishModal.module.css";
import iconEx from "../../assets/icon-ex.png";
import iconOh from "../../assets/icon-oh.png";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

export default function FinishModal({ winner, player, reset, setShowModal }) {
  const victory = winner ? player : "draw";
  console.log(victory);

  const config = {
    ex: {
      message: "Vitória do Jogador 1",
      icon: <img src={iconEx} alt="Jogador 1" />,
    },
    oh: {
      message: "Vitória do Jogador 2",
      icon: <img src={iconOh} alt="Jogador 2" />,
    },
    draw: {
      message: "Deu Velha...",
      icon: <Logo size={80} />,
    },
  };

  const { message, icon } = config[victory] || {};

  return (
    <div className={style.modalContainer}>
      <b>Fim de Jogo</b>
      <h2>{message}</h2>
      {icon}
      <div>
        <Button
          onClick={() => {
            reset();
            setShowModal(false);
          }}
          size="medium"
          to="/play"
        >
          Novo jogo
        </Button>
        <Button
          onClick={() => {
            reset();
            setShowModal(false);
          }}
          size="medium"
          to="/"
          variant="secondary"
        >
          Início
        </Button>
      </div>
    </div>
  );
}
