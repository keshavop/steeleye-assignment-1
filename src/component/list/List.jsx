import React, { useEffect, useState } from "react";

import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

import timeStampsData from "../../assets/timeStamps.json";


const List = ({ rows, currency,selectedOrderDetails,selectedOrderTimeStamps }) => {
  const [conversionRates, setConversionRates] = useState({});

  useEffect(() => {
    const rates = {
      USD: 1,
      GBP: 0.75,
      JPY: 110,
      EUR: 0.85,
    };
  }, [currency]);
  const showdata=(rows)=>{
    selectedOrderDetails(rows.executionDetails)
    selectedOrderTimeStamps(rows.orderTimeStamps)
  }
  const combinedData = rows.map((row) => ({
    ...row,
    orderTimeStamps: timeStampsData.results.find((item) => item["&id"] === row["&id"]).timestamps,
  }));

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader >
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {combinedData.map((row,i) => (
          <ListRow key={i} showdata={showdata} data={row}>
            <ListRowCell >{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.orderTimeStamps.orderSubmitted}</ListRowCell>
            <ListRowCell>
              {conversionRates[currency]
                ? (row.bestExecutionData.orderVolume.USD * conversionRates[currency]).toFixed(2)
                : row.bestExecutionData.orderVolume.USD}
            </ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
