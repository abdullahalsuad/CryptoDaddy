import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css';
import { GrTurbolinux } from "react-icons/gr";
import Coin from './components/Coin';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [coins,setCoin] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    axios
      .get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
          setCoin(res.data);
          console.log("....");  
      })
      .catch((error) => console.log(error))

  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
  coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="header">
        <div className="brand">
          <h1><i>< GrTurbolinux/></i>CryptoDaddy</h1>
        </div>
        <form>
          <input className="inputField"  onChange={handleChange} type="text" placeholder="Type Your Coin..." />
        </form>
      </div>
      <div className="coinsContainer">
      {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
