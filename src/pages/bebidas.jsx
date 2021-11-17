
import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';


const Bebida = () =>{
  const BebidaStore = useStoreState(state => state.Bebida)
  const SetBebidaStore = useStoreActions(state => state.setBebida)
  const [bebidas, setBebida] = useState(BebidaStore)

  function salvar(valor){
    if (bebidas.includes(valor)) {
        setBebida(bebidas.filter((valores) => valores !== bebidas))
    }else{
      setBebida([...bebidas,valor])
    }
  }

  function salvarCheckboxs(){
    SetBebidaStore(bebidas)
  }

  return (
    <div className="pai">
      <h1>Página Inicial</h1>
      <div className="comida">
      <h2>Selecione uma bebida</h2>
        <label htmlFor="cc">Coca Cola</label>
        <input type="checkbox" checked={bebidas.includes("Coca")} value="Coca" id="cc" onClick={()=> salvar("Coca")} />
        <br></br>
        <br></br>
        <label htmlFor="suco">Suco</label>
        <input type="checkbox" checked={bebidas.includes("Suco")} value="suco" id="suco" onClick={()=> salvar("Suco")} />
        <br></br>
        <br></br>
        <label htmlFor="agua">Agua</label>
        <input type="checkbox" checked={bebidas.includes("Agua")} value="agua" id="agua" onClick={()=> salvar("Agua")} />
      </div>

      <Link to="/cardapio"><button onClick={salvarCheckboxs}>voltar</button></Link>
      <Link to="/pedido"><button onClick={salvarCheckboxs} >Proximo</button></Link>
            
 
    </div>
  );
}

export default Bebida;