import React, { useState } from "react";
// import "./style.css";
import clases from "./style.module.css";

export function Counter({ numInitial = 0, step = 1, title }) {
  const [numero, setNumero] = useState(numInitial);

  const handleIncrement = () => setNumero(numero + step);

  const handleDecrement = () => setNumero(numero - step);

  const handleReset = () => setNumero(numInitial);

  return (
    <div className={clases["container-general"]}>
      <div className={clases["counter-container"]}>
        <h1>{title}</h1>
        <p /* className="numero" */ className={clases.numero}>{numero}</p>
        <div
          /* className="btn-container" */ className={clases["btn-container"]}
        >
          <button
            /* className='btn btn-disminuir' */ className={`${clases.btn} ${clases["btn-disminuir"]}`}
            onClick={handleDecrement}
          >
            -
          </button>
          <button
            /* className="btn btn-aumentar" */ className={`${clases.btn} ${clases["btn-aumentar"]}`}
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        {numero !== 0 && (
          <button
            /* className="btn" */ className={`${clases.btn} ${clases["btn-reset"]}`}
            onClick={handleReset}
          >
            RESET
          </button>
        )}
      </div>
    </div>
  );
}
