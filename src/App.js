import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css';
import { GrTurbolinux } from "react-icons/gr";

function App() {
  const [coin,setCoin] = useState([]);

  useEffect(() => {
    axios
      .get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
          setCoin(res.data);
          console.log(res.data);  
      })
      .catch((error) => console.log(error))

  }, [])
  return (
    <div>
      <div className="header">
        <div className="brand">
          <h1><i>< GrTurbolinux/></i>CryptoDaddy</h1>
        </div>
        <form>
          <input className="inputField" type="text" placeholder="Type Your Coin..." />
        </form>
      </div>
    </div>
  );
}

export default App;
