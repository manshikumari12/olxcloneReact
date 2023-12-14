import React, { useState, useEffect } from 'react';

import CardItem from './CardItem';
import getData from '../utitle/getdata';
const Api = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getData(); // Assuming getData doesn't require an ID
      console.log(response);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run once on mount

  return (
    <div style={{ display: 'grid', gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", margin: "20px" }}>
      {data?.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Api;
