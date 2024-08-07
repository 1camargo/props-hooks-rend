import { useState } from 'react';
import './Contador.css'

function Contador() {
// Variavel
// let valor: number = 0;

// Variavel de Estado
const [valor, setValor] = useState(0);

// Funções
function SomarMaisUM() {
  setValor(valor + 1);
}
return (
  <div className="container">
    <p>O valor é: {valor}</p>
    <button onClick={SomarMaisUM}>Adicionar +1</button>
  </div>
)
}

export default Contador