import React from 'react';
import '../Css/card.css';

import { Link } from 'react-router-dom';


const CardItem = ({ title, price, image, category, id }) => {
  return (
    <Link to={`/products/${id}`} className='linkdata'> 
      <div className='cardlist'>
        <img className='poster' src={image} alt={category} />
        <h1 className='cardtitle'>{title}</h1>
        {/* <p>{description}</p> */}
        <p className='cardcat'>{category}</p>
        <p className='cardprice'>Rs: {price}</p>
    
      </div>
    </Link>
  );
};

export default CardItem;

