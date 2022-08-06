
import React from 'react'
import './Categories.css' 
import 'bootstrap/dist/css/bootstrap.min.css';



function Categories() {

    const checkList = ["People", "Premium", "Pets", "Food", "Landmarks", "Cities", "Nature"];
  
    
      return (
          <div className='container'>
              <div className='section'>
                <h1>
                Photography / Premium Photos
                </h1>
              </div>
  
  
              {/* <div className="checkList">
                <div className="list-container">
                  {checkList.map((item, index) => (
                  <div key={index}>
                    <input value={item} type="checkbox" />
                    <span>{item}</span>
                  </div>
                  ))}
                </div>
              </div> */}
  
              <div className='row'>
                      {/* <div className='col-md-4'> */}
                          <img src='images/eggballoon.png' className='alsobuy' alt='alsobuy'/>
                          <h3 className='type1'>Food</h3>
                          <h2 className='tittle1'>Egg Balloon</h2>
                          <h3 className='price1'>$93.89 </h3>
                      {/* </div> */}
              </div>
  
  
          </div>
      );
    }
  
  export default Categories;
  