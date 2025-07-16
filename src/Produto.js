

function Produto({ nome, preco, quantidade, adicionar, remover }) {
  const total = (quantidade * preco).toFixed(2);

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "6px",
      backgroundColor: "#f4f4f4",
      width: "260px"
    }}>
      <h3>{nome}</h3>
      <p>Preço: R$ {preco}</p>
      <p>Quantidade: {quantidade}</p>
      <p><strong>Total: R$ {total}</strong></p>

      <button onClick={adicionar} style={{ marginRight: "8px" }}>
        ➕ Adicionar
      </button>
      <button onClick={remover} disabled={quantidade === 0}>
        ➖ Remover
      </button>
    </div>
  );
}

export default Produto;

  
  