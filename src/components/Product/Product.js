
import React, { useState, useEffect } from "react";
import './Product.css' 
import 'bootstrap/dist/css/bootstrap.min.css';


function Product() {
  
  const api = 'https://technical-frontend-api.bokokode.com/api/products'
  
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProducts()
  }, [])
  
  function getProducts(){
    fetch (api, {
      method: 'POST',
    })
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response 
      setProducts(data.data)
      console.log(data.data)
    })
  }


  return(
    <div className='flex-container'>

      <div className='productsRow'> {
        
          products.map(product => {
            return (
              <div className='products'> 
              <div className='products'>
              <img src='images/eggballoon.png' className='img2' alt='alsobuy'/>
              <h3 className='type3'>{product.category}</h3>
              <h2 className='tittle'>{product.name}</h2>
              <h3 className='price'>${product.price} </h3>
              </div>
              </div>
            )
        })
      
      }
      </div>
    </div> 
  )
}

export default Product;
