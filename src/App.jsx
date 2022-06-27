import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import { useSyncExternalStore } from "react";
 
 
export default function App() {
 
  const [data, setData] = useState([]);

  const newUser = async () => {
    const res = await fetch('https://randomuser.me/api/'); //nos devuelve un json con los datos de la API
    const user = await res.json();
    console.log(user);

    // var newArray = user.results.map(function(item){
    //   var newParner = {
    //     id: item.id.name,
    //     name: item.name.first,
    //     gender: item.gender,
    //   }
    //   return newParner;
    // })
    // console.log(newArray)

    setData(prevState =>([...prevState,user.results[0]]));
    console.log
  };

  useEffect( ()=> {
    console.log(data)
  },[newUser]);
 
  return (
    <div>
      <h1>Find your partner: </h1>
      <button onClick={newUser}>Match</button>
      {data.map(item => (
        <p key={item.id.name}>{item.name.first}</p>
      ))}
    </div>
  );
}
