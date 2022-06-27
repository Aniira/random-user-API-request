import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import { useSyncExternalStore } from "react";
 
 
export default function App() {
 
  const [data, setData] = useState([]);

  const newUser = async () => {
    const res = await fetch('https://randomuser.me/api/'); //nos devuelve un json con los datos de la API
    const user = await res.json();

    var newArray = user.results.map(function(item){
      var newParner = {
        id: item.id.name,
        name: item.name.first,
        gender: item.gender,
      }
      return newParner;
    })
    // console.log(newArray)

    setData(prevState =>([...prevState,...newArray]));
  };

  useEffect( ()=> {
    console.log(data)
  },[newUser]);
 
  return (
    <div>
      <h1>holaa </h1>
      {data.map(item => (
        <h1 key={item.id.name}>{item.name} </h1>
      ))}
      <button onClick={newUser}>Random Partner</button>
    </div>
  );
}
