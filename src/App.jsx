import React, { useState, useEffect } from "react";
import './App.css'
import { useSyncExternalStore } from "react";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import UserData from './User';


export default function App() {

  const readPartners = () => {
    const partners = localStorage.getItem("partners");
    return partners !== null ? JSON.parse(partners) : [];
  }

  const [data, setData] = useState(readPartners);

  const newUser = async () => {
    //petición a la api + guardar datos en un objeto user
    const res = await fetch('https://randomuser.me/api/'); //nos devuelve un json con los datos de la API
    const user = await res.json()

    setData(prevState =>([...prevState,user.results[0]]));
    console.log(data);
  };

  const cleanUser = () => {
    setData(data => data=[]);
    localStorage.clear()
    localStorage.removeItem("partners");
  }

  useEffect( ()=> {
    localStorage.setItem("partners",JSON.stringify(data));
  },[newUser,]);

  // const prova = 'hola';

  return (
    <div>
      <h1>Find your random partner:</h1>
      <div id="buttons">
        <button id="match" onClick={newUser}>Match</button>
        <button id="delete" onClick={cleanUser}>Clean</button>
      </div>          
        <Router>
        <ul>
          {data.map(item => (
            <div key={item.id.value} className="partners">
              <Link to={`/user/${item.name.first} `}>
                <p>{item.name.first}</p>
                <p>{item.email} </p>
              </Link>
            </div>
          ))}
          </ul>
            <Routes>
              <Route path="/user/:name" element={<UserData/>} />
              <Route path="/user" element={<UserData/>} />
            </Routes>
        </Router>
    </div>
  );
}


// function Users() {
//   return (
//     <div>
//       <h1>Hola</h1>
//     </div>
//   )
// }