import { useState } from 'react';

function Produto(props) {
  const preco_ant = props.preco;

  const [preco, setPreco] = useState(props.preco);
  const [quantidade, setQuantidade] = useState(0);
 
  const aplicarDesconto = () => {
    const desconto = preco * 0.1; // 10%
    setPreco((preco - desconto).toFixed(2));
  };
  const Restaura_preco = () => {
   
    setPreco((preco_ant).toFixed(2));
  };

  const adicionarAoCarrinho = () => {
    setQuantidade(quantidade + 1);
  }
  const total = (quantidade * preco).toFixed(2);
    return <div style={{ 
      border: "1px solid #ccc", 
      padding: "12px", 
      margin: "10px 0", 
      borderRadius: "6px", 
      backgroundColor: "#f4f4f4" ,
      width: "260px"
    }}>
    <h3>Produto : {props.nome}!</h3>
    <p>Preco R$ {preco}</p>
    <p>Quantidade : {quantidade}</p>
    <p><strong> Total : R$ {total}</strong></p>

    <button onClick={aplicarDesconto} style={{marginRight:"8px"}}>Aplicar 10% de desconto</button>
    <button onClick={Restaura_preco} style={{marginRight:"8px"}}>Restaura Preço</button>
    <button onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
    </div>
    
    }
  
  export default Produto;
  
  