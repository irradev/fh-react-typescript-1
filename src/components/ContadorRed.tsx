import { useReducer } from "react";

const initialState = {
  contador: 10
}

type ActionType = 
  | { type: 'incrementar' }
  | { type: 'decrementar' }
  | { type: 'custom++', payload: number }
  | { type: 'custom--', payload: number }


const contadorReducer = ( state: typeof initialState, action: ActionType ) => {

  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1
      }
  
    case 'decrementar':
      return {
        ...state,
        contador: state.contador - 1
      }

    case 'custom++':
      return {
        ...state,
        contador: state.contador + action.payload
      }
    
    case 'custom--':
      return {
        ...state,
        contador: state.contador - action.payload
      }
    default:
      return state;
  }
}

export const ContadorRed = () => {

  const [{contador}, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <button 
        onClick={() => dispatch({type: 'incrementar'})} 
        className="btn btn-outline-primary"> 
        Incrementar
      </button>
      <button 
        onClick={() => dispatch({type: 'decrementar'})} 
        className="btn btn-outline-primary ms-4"> 
        Decrementar
      </button>

      <button 
        onClick={() => dispatch({type: 'custom++', payload: 100})} 
        className="btn btn-outline-primary ms-4"> 
        +100
      </button>
      
      <button 
        onClick={() => dispatch({type: 'custom--', payload: 50})} 
        className="btn btn-outline-primary ms-4"> 
        -50
      </button>

      <h2 className="mt-3">Contador: {contador}</h2>
    </>
  )
}
