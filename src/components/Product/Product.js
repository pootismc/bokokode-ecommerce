
import React from 'react'
import './Product.css' 
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Product() {
  return(
    <div className='flex-container'>

      <div className='productsRow'>
        <div className='products'>
          <img src='images/eggballoon.png' className='' alt='alsobuy'/>
          <h3 className='type'>Food</h3>
          <h2 className='tittle'>Egg Balloon</h2>
          <h3 className='price'>$93.89 </h3>
        </div>

        <div className='products'>
          <img src='images/eggballoon.png' className='' alt='alsobuy'/>
          <h3 className='type'>Food</h3>
          <h2 className='tittle'>Egg Balloon</h2>
          <h3 className='price'>$93.89 </h3>
        </div>

        <div className='products'>
          <img src='images/eggballoon.png' className='' alt='alsobuy'/>
          <h3 className='type'>Food</h3>
          <h2 className='tittle'>Egg Balloon</h2>
          <h3 className='price'>$93.89 </h3>
        </div>
      </div>

      <div className='productsRow'>
        <div className='products'>
          <img src='images/eggballoon.png' className='' alt='alsobuy'/>
          <h3 className='type'>Food</h3>
          <h2 className='tittle'>Egg Balloon</h2>
          <h3 className='price'>$93.89 </h3>
        </div>

        <div className='products'>
          <img src='images/eggballoon.png' className='' alt='alsobuy'/>
          <h3 className='type'>Food</h3>
          <h2 className='tittle'>Egg Balloon</h2>
          <h3 className='price'>$93.89 </h3>
        </div>

        <div className='products'>
          <img src='images/eggballoon.png' className='' alt='alsobuy'/>
          <h3 className='type'>Food</h3>
          <h2 className='tittle'>Egg Balloon</h2>
          <h3 className='price'>$93.89 </h3>
        </div>
      </div>

      
    </div> 
  )
}

export default Product;


{/* <img src='images/eggballoon.png' className='' alt='alsobuy'/>
<h3 className='type'>Food</h3>
<h2 className='tittle'>Egg Balloon</h2>
<h3 className='price'>$93.89 </h3> */}