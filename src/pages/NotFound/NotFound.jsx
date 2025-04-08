import { Button, Logo } from "../../components";
import style from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main>
      <Logo grayScale />
      <h1 className={style.mainTitle}>Página não encontrada</h1>
      <p>Não encontrou o que procurava?</p>
      <Button to="/">Voltar para o início</Button>
    </main>
  );
}
