
import { Link } from 'react-router-dom';
import '../pages/estilo.css'
import React, {useState} from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';



const Home = () =>{
  const NomeStore = useStoreState(state => state.Nome)
  const setNomeStore = useStoreActions(state => state.setNome)

  const DesejoStore = useStoreState(state => state.Desejo)
  const setDesejoStore = useStoreActions(state => state.setDesejo)

  const [nome,setNome] = useState(NomeStore);
  const [desejo,setDesejo] = useState(DesejoStore);

  const salvarDados = () =>{
     setNomeStore(nome);
     setDesejoStore(desejo)
  }


  return (
    <div className="body">
        <div className="main">
          <div className="CD">
            <h1>Coleta de dados</h1>
            Insira seu nome:  
            <input type="text" id="nome" value={nome} onChange={(event)=>setNome(event.target.value)}></input>
          </div><br/>

          <div className="area">
              <label htmlFor="">Vai comer aqui? ou e para viagem?</label><br/>
              <textarea id="desejo"  cols="30" rows="5" value={desejo} onChange={(event)=>setDesejo(event.target.value)}/>
          </div>

          <div>
              <Link to="/cardapio"><button onClick={salvarDados}>Proximo</button></Link>
          </div>
        </div>
    </div>
  );
}

export default Home;