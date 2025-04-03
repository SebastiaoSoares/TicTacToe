import { Button } from "../../components";

export default function NotFound() {
  return (
    <main>
      <h1>Página não encontrada</h1>
      <p>Não encontrou o que procurava?</p>
      <Button to="/">Voltar para o início</Button>
    </main>
  );
}
