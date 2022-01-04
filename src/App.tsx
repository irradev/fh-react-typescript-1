import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <>
      <h1 className="mb-5">React + Typescript</h1>
      
      <h2>useState</h2>
      <hr/>
      <Counter />
      <Usuario />

      <h2 className="mt-5">useEffect - useRef</h2>
      <hr/>

      <TimerPadre />

      <h2 className="mt-5">useReducer</h2>
      <hr/>

      <ContadorRed />

      <h2 className="mt-5">customHooks</h2>
      <hr/>

      <Formulario />

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  );
}

export default App;
