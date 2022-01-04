import { useState } from "react"

interface User {
  uid: string;
  name: string;
}

export const Usuario = () => {

  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: 'ABC123',
      name: 'Ezra Vazques'
    })
  }

  return (
    <div className="mt-5">
      <h3>Usuario</h3>

      <div className="d-flex flex-row align-items-baseline">
        <button 
          onClick={login}
          className="btn btn-primary d-inline-block ">
            Login
        </button>    

        {
          (!user)
            ? <pre className="d-inline-block ms-4"> No hay usuario</pre>
            : <pre className="d-inline-block ms-4">{JSON.stringify(user)}</pre>
        }

      </div>
      
    </div>
  )
}
