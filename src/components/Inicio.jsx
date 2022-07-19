import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import '../App.css'

const MatchUser = () => {

    //READPARTNERS - función que saca los datos guardados en el local Storage
    const readPartners = () => {
        const partners = localStorage.getItem("partners");
        return partners !== null ? JSON.parse(partners) : [];
    }

    const [data, setData] = useState(readPartners);

    //NEWUSER - función que hace una petición a la API randomuser 
    const newUser = async () => {
        const res = await fetch('https://randomuser.me/api/');
        const user = await res.json()
        //nos devuelve un json con los datos y los guardamos en un objeto "user"

        //cambio de estado (concatenamos nuestro estado anterior con el nuevo array con los datos de usuario)
        setData(prevState =>([...prevState,user.results[0]]));
    };

    //CLEANUSER - función que limpia la lista:
    const cleanUser = () => {
        setData(data => data=[]);
        localStorage.clear()
        localStorage.removeItem("partners");
    }


    useEffect( ()=> {
        //añade en el local Storage el nuevo cambio de estado cada vez que se ejecuta la función newUser
        localStorage.setItem("partners",JSON.stringify(data));
    },[newUser]);

    

      return (
        <div>
          <h1>Find your random partner:</h1>
          <div id="buttons">
            <button id="match" onClick={newUser}>Match</button>
            <button id="delete" onClick={cleanUser}>Clean</button>
          </div>          
            <ul>
              {data.map(item => (
                <div key={item.id.value} className="partners">
                  <Link to={`/user/${item.name.first}/${item.name.last}/${item.gender}/${item.dob.age}/${item.email}/${item.phone}`}>
                    <p>{item.name.first} {item.name.last} </p>
                    <p>{item.email} </p>
                  </Link>
                </div>
              ))}
            </ul>
        </div>
      );

}

export default MatchUser;