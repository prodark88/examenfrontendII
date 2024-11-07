import React, { useState } from "react";
import Card from "./Card";
import "../styles/Form.css";


const Form = () => {

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (input1.trim().length < 3 || input1.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta. Sin espacio en blanco y mayor a 3 caracteres");
      return;
    }
    if (input2.length < 6) {
      setError("Por favor chequea que la información sea correcta.  Mayor a 6 caracteres");
      return;
    }

    setError("");
    //aqui pasamos ambos datos del input al componente card
    setSubmittedData({ input1, input2 });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Nombre"
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Videojuego"
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {submittedData && <Card data={submittedData} />}
    </div>
  );
};

export default Form;
