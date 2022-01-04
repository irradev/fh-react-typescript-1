import { ChangeEvent, useState } from "react";
export const useForm = <T extends Object> (initState: T) => {
  const [formulario, setFormulario] = useState(initState);

  const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
    
    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  return {
    formulario,
    handleChange,
    ...formulario
  }
}
