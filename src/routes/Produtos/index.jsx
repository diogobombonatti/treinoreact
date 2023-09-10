import { Link } from "react-router-dom";
import { listaProdutos } from "../../components/listaProdutos";

export default function Produtos() {
  return (
    <main>
      <h1>Produtos</h1>
      {listaProdutos.map((prod) => (
        <div key={prod.id}>
          <Link to={`/produtos/detalhes/${prod.id}`}>
            Ver detalhes do produto: {prod.nome}
          </Link>
        </div>
      ))}
    </main>
  );
}
