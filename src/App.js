
import { useState } from 'react';
import Produto from './Produto';
import produtos from './produtos.js';

function App() {
  const [quantidades, setQuantidades] = useState({});

  const adicionarProduto = (id) => {
    setQuantidades((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removerProduto = (id) => {
    setQuantidades((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0
    }));
  };
  console.log("Teste")
  const totalGeral = produtos.reduce(function (total, produto) {
    const qtd = quantidades[produto.id] || 0;
    return total + produto.preco * qtd;
  }, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛒 Carrinho de Compras</h1>

      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          quantidade={quantidades[produto.id] || 0}
          adicionar={() => adicionarProduto(produto.id)}
          remover={() => removerProduto(produto.id)}
        />
      ))}

      <h2>Total Geral: R$ {totalGeral.toFixed(2)}</h2>
    </div>
  );
}

export default App;

