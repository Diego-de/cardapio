import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import {useQuery } from 'react-query';
import { useState } from 'react';



const DataHoraApi = () =>{



    const [dados,setdados] = useState();

    const AxiosFunction = () =>{
        axios.get('https://worldtimeapi.org/api/timezone/America/Recife').then(dataHora => 
            setdados(dataHora.data.datetime)
        )
        return dados;
    }
 
    const {data, isLoading} = useQuery('dataHora', AxiosFunction )
    
    console.log(data)

return (
    <div className="body">
        <div>
            <h1>A data e hora de hoje é:{Date(data)}</h1>
        </div>
        <div>
         <Link to="/pedido"><button>volte para seu pedido</button></Link>
        </div>
    </div>
  );

}

export default DataHoraApi;