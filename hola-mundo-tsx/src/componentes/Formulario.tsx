import { useRef, useState } from "react";
import "./Formulario.css";
import { List } from "./List/List";
const Formulario = () => {
  const [nombre, setNombre] = useState<string[]>(["hola mundo"]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSummid = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleClick = () => {
    if (inputRef.current) {
      setNombre([...nombre, inputRef.current.value]);
    }
  };
  return (
    <>
      <div className="contenedor">
        <form onSubmit={handleSummid}>
          <input
            id="elemento"
            ref={inputRef}
            type="text"
            placeholder="Ingresa Tu nombre"
            required
          />
          <button onClick={handleClick}>Agregar Nombre</button>
          <List lista={nombre}></List>
        </form>
      </div>
    </>
  );
};

export default Formulario;
