import React from "react";
import "../styles/Card.css";



const Card = ({data})=>{
    return (
      <div className="gamer-card">
        <h2 className="gamer-card-header">Datos ingresados</h2>
        <p className="gamer-card-body">Hola {data.input1}</p>
        <p className="gamer-card-body">Tu videojuego favorito es:<br />{data.input2}</p>
        <h2 className="gamer-card-footer">Gracias por participar</h2>
      </div>
    );

}
export default Card