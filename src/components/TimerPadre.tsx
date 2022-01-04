import { useState } from "react"
import { Timer } from "./Timer"

export const TimerPadre = () => {

  const [milisegundos, setMilisegundos] = useState(1000);

  return (
    <>
      <span>Milisegundos {milisegundos}</span>
      <hr/>

      <div className="d-flex flex-row mb-4">
        <button 
          onClick={() => setMilisegundos(1000)}
          className="btn btn-outline-success me-3 ">
          1 segundo
        </button>
        <button 
          onClick={() => setMilisegundos(5000)}
          className="btn btn-outline-success">
          5 segundos
        </button>
      
      </div>

      <Timer milisegundos={milisegundos}/>
    </>
  )
}
