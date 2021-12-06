
import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';


const Pedido = () =>{

  const NomeStore = useStoreState(state => state.Nome);
  const DesejoStore = useStoreState(state => state.Desejo);
  const LancheStore = useStoreState(state => state.Lanche);
  const ComidaStore = useStoreState(state => state.Comida);
  const BebidaStore = useStoreState(state => state.Bebida);

  const setNomeStore = useStoreActions(state => state.setNome);
  const setDesejoStore = useStoreActions(state => state.setDesejo);
  const setLancheStore = useStoreActions(state => state.setLanche);
  const setComidaStore = useStoreActions(state => state.setComida);
  const setBebidaStore = useStoreActions(state => state.setBebida);


  function zerar(){

    setNomeStore(' ');
    setDesejoStore(' ');
    setLancheStore(' ');
    setComidaStore(' ');
    setBebidaStore([]);
  }

  return (
    <div className="cartao">
      <div>
        <h2>Seu pedido</h2>
        <p>Nome: {NomeStore}</p>
        <p>Pedido foi para: {DesejoStore}</p>
        <p>Lanche?: {LancheStore}</p>
        <p>Comida:{ComidaStore}</p>
        <p>Bebida:{BebidaStore.map(bebidas => <li>{bebidas}</li>)}</p>
      </div>

      <Link to="/bebidas"><button >voltar</button></Link>
      <Link to="/"><button onClick={zerar}>Novo pedido</button></Link>
      <Link to="/PaginaAPI"><button>Veja o Horario via API</button></Link>
    </div>
  );
}

export default Pedido;