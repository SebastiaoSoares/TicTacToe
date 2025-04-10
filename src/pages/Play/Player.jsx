import style from "./Play.module.css";
import iconEx from "../../assets/icon-ex.png";
import iconOh from "../../assets/icon-oh.png";

export default function Player({ player, variant }) {
  const config = {
    ex: {
      icon: iconEx,
      label: "1",
    },
    oh: {
      icon: iconOh,
      label: "2",
    },
  };

  const { icon, label } = config[variant] || {};
  const isActive = player === variant;

  return (
    <div
      className={[style[variant], style.player, isActive && style.active]
        .filter(Boolean)
        .join(" ")}
    >
      <img src={icon} alt={`Jogador ${label}`} />
      <span>Jogador {label}</span>
    </div>
  );
}
