import { useForm } from "../hooks/useForm"

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {

  const { formulario, email, nombre, edad, handleChange } = useForm<FormData>({
    email: '',
    nombre: '',
    edad: 0
  })

  // const {email, nombre, edad} = formulario;

  return (
    <form
      autoComplete="off"
    >
      <div className="mb-3">
        <label className="form-label">Email: </label>
        <input 
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre: </label>
        <input 
          type="text"
          className="form-control"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Edad: </label>
        <input 
          type="text"
          className="form-control"
          name="edad"
          value={edad}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )
}
