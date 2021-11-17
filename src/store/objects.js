import {action} from 'easy-peasy';



export const dados ={
   Nome: '',
   Desejo:'',
   Lanche: '',
   Comida: '',
   Bebida:[],

   setNome: action((state,payload)=>{state.Nome = payload}),
   setDesejo: action((state,payload)=>{state.Desejo = payload}),
   setLanche: action((state,payload)=>{state.Lanche = payload}),
   setComida: action((state,payload)=>{state.Comida = payload}),
   setBebida: action((state,payload)=>{state.Bebida = payload})
}
