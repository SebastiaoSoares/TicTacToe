import { Logo } from "../../components";
import style from "./Play.module.css";

export default function Play() {
  return (
    <>
      <Logo />
      <h1 className={style.mainTitle}>Play game</h1>
    </>
  );
}
