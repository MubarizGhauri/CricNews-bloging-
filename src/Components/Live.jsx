import React from "react";
import cricapi from 'cricapi';
import Axios from 'axios';
import { useState, useEffect } from 'react';

// https://cricapi.com/api/matches?apikey=XZ1BGzJPlUeirXLuqRyPD211P8X2

export default function App() {
  const [win, setWin] = useState([]);
  var win1 = [];

  useEffect(() => {
    Axios.get('https://cricapi.com/api/matches?apikey=lkMXi5L6osgrNAXvWgkUt8Wg0zB2').then(res=> {
      for (var i=0; i<300; i++){
        win1.push(res.data.matches[i].toss_winner_team);
 
}
    });
    setWin(win1);
    
  }, [])


  return (
    <div>{win[1]}</div>     
  );
}