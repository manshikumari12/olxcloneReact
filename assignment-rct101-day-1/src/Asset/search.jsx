import React from 'react'
import "../Css/navbar.css"

const SearchBox = () => {
 



  return (
    <div className='search'>
     

      <input
        type="text"
        placeholder="Find yor product..."
      />     <span role="img" aria-label="Search Icon" className="search-icon">
      &#128269;
    </span>
      
       
     
    </div>
  );
};

export default SearchBox;

