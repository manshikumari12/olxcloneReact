import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import "../Css/navbar.css";
// import { Link as NavLink } from "react-router-dom";
import Fashionable from '../Asset/Fashionable';



import { useAuth0 } from "@auth0/auth0-react";
import SearchBox from '../Asset/search';




const Header = () => {
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();

  return (
    <div className="navbar">
      <div className="childdiv">
        <Fashionable />
        <div>
          <SearchBox />
        </div>
{/*       
     
        <NavLink to="/cart">
               
              </NavLink> */}
        {/* <button>Cart</button> */}



{
  isAuthenticated&& <li> <h2>Welcome, {user.name}</h2>
  <p>{user.email}</p></li>
}

     
          {isAuthenticated ?(
          <li>
            <button className='btn'
            onClick={() => logout({returnTo: window.location.origin })}>
                    Log Out
                  </button>
            </li>):(<li>
       <button  className='btn' onClick={() => loginWithRedirect()}>
              Login
            </button>
       </li>)
          }
     




            
     
      
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Auth0Provider
    domain="dev-ojskv257y30ifoof.us.auth0.com"
    clientId="1AtX6zUl4ZiFLdwp0ICYuFYRZbFOV43g"
    redirectUri={window.location.origin}
    >
      <Header />
      {/* Other components or application content */}
    </Auth0Provider>
  );
};

export default App;

