
import Produto from './Produto.js';
import Greeting from './Gretting';

function App() {
  
  return (
    <div>
      <h1>Bem-vindo ao React</h1>
      <Greeting nome="Anderson" />
      <Greeting nome="João" />
      <Greeting nome="Maria" />
      <Produto  nome="Notebook" preco= {1800} />
      <Produto  nome="Tablet" preco= {500} />
      <Produto  nome="Pc" preco= {5200} />
    
    </div>
  );
}

export default App;
