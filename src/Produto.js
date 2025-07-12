import { useState } from 'react';

function Produto(props) {
  const [preco, setPreco] = useState(props.preco);

  const aplicarDesconto = () => {
    const desconto = preco * 0.1; // 10%
    setPreco((preco - desconto).toFixed(2));
  };
    return <div style={{ 
      border: "1px solid #ccc", 
      padding: "12px", 
      margin: "10px 0", 
      borderRadius: "6px", 
      backgroundColor: "#f4f4f4" 
    }}>
    <><p>Produto : {props.nome}!</p><p>Preco R$ {preco}</p></>
    <button onClick={aplicarDesconto}>Aplicar 10% de desconto</button>
    </div>
    
    }
  
  export default Produto;
  
  