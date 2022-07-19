import React, { useState, useEffect } from "react";
import './App.css'
import { useSyncExternalStore } from "react";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import UserData from "./components/User";
import MatchUser from './components/Inicio';


export default function App() {


  return (
        <Router>
            <Routes>
              <Route path="/user/:name/:last/:gender/:age/:email/:phone" element={<UserData/>} />
              <Route path="/user" element={<UserData/>} />
              <Route path="/" element={<MatchUser/>} />
            </Routes>
        </Router>
  );
}
