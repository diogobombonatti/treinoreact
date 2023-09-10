import { useParams } from "react-router-dom";
import { listaProdutos } from "../../components/listaProdutos";

export default function DetalhesProduto() {
  const { id } = useParams();

  const produto = listaProdutos.find((prod) => prod.id === id);

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <main>
      <h1>Detalhes do Produto</h1>
      <h2>{produto.nome}</h2>
      <p>Preço: R$ {produto.preco}</p>
      <img src={`url_da_foto_do_produto`} alt={produto.nome} />
    </main>
  );
}