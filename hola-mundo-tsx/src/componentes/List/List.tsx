import React from "react";
import './List.css'
type props = {
  lista: string[];
};

export const List: React.FC<props> = ({ lista }) => {
  return (
    <div>
      <ul className="elementos">

        {lista.map((elemento) => (
          <li key={elemento} className="elemento">
            {elemento}
          </li>
          
        ))}
      </ul>
    </div>
  );
};
