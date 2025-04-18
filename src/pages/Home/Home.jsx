import style from "./Home.module.css";
import { Logo } from "../../components";
import Button from "../../components/Button/Button";

export default function Home() {
  return (
    <>
      <main>
        <section className={style.main}>
          <Logo size={100} />
          <h1 className={style.mainTitle}>TicTacToe</h1>
          <Button to="/play">Jogar</Button>
        </section>
      </main>
    </>
  );
}
