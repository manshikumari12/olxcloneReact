
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingleProduct from './SingleProduct'
import Api from './Api'

function AllRoutes(){
  return <div>
    <Router>
    <Routes>
            <Route path='/products/:id' element={<SingleProduct/>}></Route>
            <Route path='/' element={<Api/>}></Route>
        </Routes>
    </Router>

  </div>
   
        
      
  

}

export default AllRoutes
