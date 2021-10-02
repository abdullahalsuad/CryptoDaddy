import React from "react";
import styles from "./coin.module.css";
import { GrFormDown,GrFormUp } from "react-icons/gr";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className={styles.cryptoCoin}>
      <img src={image} alt={`${name}`} className={styles.coinLogo }/>
      <div className={styles.coinNameWrap}>
        <h1 className={styles.coinName}>{name}</h1>
        <p className={styles.coinSymbol}>{symbol}</p>
      </div>
      <p className={styles.coinPrice}>${price.toLocaleString()}</p>
      <p className={styles.coinMarketcap}>Market Cap: ${marketcap.toLocaleString()}</p>
      <p className={styles.coinVolume}>Volume (24H): ${volume.toLocaleString()}</p>
      {priceChange < 0 ? (
        <div className={styles.priceContainerDOWN}>
          <GrFormDown size="2em"/>
          <p className={styles.priceChange}>{priceChange.toFixed(2)}%</p>
        </div>
      ) : (
        <div className={styles.priceContainerUP}>
          <GrFormUp size="2em"/>
          <p className={styles.priceChange}>{priceChange.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default Coin;