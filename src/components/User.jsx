import React from "react";
import { useParams } from "react-router-dom";
import '../App.css';

// componente que pinta la ficha del usuario seleccionado
// se cambia la ruta usando de React Router

const UserData = () => {
  
  const {name, last, gender, age, email, phone} = useParams()

  return (
    <div id="user" >
      <h1>{name} {last} </h1>
        <p>{gender}</p>
        <p>{age} years</p>
      <div>
      <h2>Contact {name}! :D</h2>
        <p>{email} </p>
        <p>{phone} </p>
      </div>
    </div>
  );
}

export default UserData;