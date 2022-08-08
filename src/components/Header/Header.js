import React from 'react'
import './Header.css' 
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Header() {
    return (
        <div className='container'>
                <div className='logo'>
                    <img src='images/logo.png' alt="logo" className="logo" />
                 </div>

                <div className='cart'>
                    <img src='images/cart.png' alt="cart" className="cart" />
                </div>
                {/* <hr className='line'/> */}
        </div>
    )
}    

export default Header;