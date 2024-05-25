import { useRef, useState } from "react";
import "./Formulario.css";
const Formulario = () => {
  const [nombre, setNombre] = useState<string>("hola mundo!!!!");

  const elemento = <h1>{nombre}</h1>;
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSummid = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  const handleClick = () => {
    if (inputRef.current) {
      setNombre(inputRef.current.value);
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

        </form>

        <div className="texto">{elemento}</div>
      </div>
    </>
  );
};

export default Formulario;
