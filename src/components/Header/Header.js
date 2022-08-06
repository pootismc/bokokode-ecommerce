import React from 'react'
import './Header.css' 
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='left'>
                    <img src='images/logo.png' alt="avatar"></img>
                </div>
                <div className='right'>
                    <img src='images/cart.png' alt="avatar"></img>
                </div>
            </div>
            <hr className="solid"></hr>
        </div>
    );
}

export default Header;