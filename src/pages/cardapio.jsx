
import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';


const Cardapio = () =>{


  const radioStoreLanche = useStoreState(state => state.Lanche);
  const setRadioStore = useStoreActions(state => state.setLanche)

  const radiosaborStore = useStoreState(state => state.Comida);
  const setSaborlStore = useStoreActions(state => state.setComida)

  const [radioLanche,setLanche] = useState(radioStoreLanche);
  const [radioComida,setComida] = useState(radiosaborStore);
         
 
  
  const salvarDados = () =>{
    setRadioStore(radioLanche);
    setSaborlStore(radioComida);
   
  }
  return (
    <div className="pai">
      
      <h1>Deseja comer algo?</h1>
      <div className="comida">
        <label htmlFor="pastel">Sim</label>
        <input type="radio" name="sabores" value="sim" checked={radioLanche==="sim"} onChange={(event)=>setLanche(event.target.value)}  id="pastel"/>
        <br></br>
        <br></br>
        <label htmlFor="cox">Nao</label>
        <input type="radio" name="sabores" value="nao" checked={radioLanche==="nao"} onChange={(event)=>setLanche(event.target.value)} id="cox" />
      </div><br/>

    {radioLanche ==="sim"&&
      <div> 
        <div className="past" id="sabpast">
          <h3>Comida</h3>
          <label htmlFor="labelpastel">Pastel</label>
          <input type="radio" id="labelpastel" name="saborcomida" value="Pastel" checked={radioComida==="Pastel"} onChange={(event)=>setComida(event.target.value)}/>
          <br></br>
          <br></br>
          <label htmlFor="labelcoxinha">coxinha</label>
          <input type="radio" id="labelcoxinha" name="saborcomida" value="Coxinha" checked={radioComida==="Coxinha"} onChange={(event)=>setComida(event.target.value)}/>
        </div><br/>
      </div>
    }
      <Link to="/"><button>voltar</button></Link>
      <Link to="/bebidas"><button onClick={salvarDados}>Proximo</button></Link>
    </div>
  );
}

export default Cardapio;