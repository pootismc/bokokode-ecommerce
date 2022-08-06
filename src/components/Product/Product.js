
import React from 'react'
import './Product.css' 
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Product() {
    return (
      <Container>
        <Row>
          <Col> 
            <img src='images/eggballoon.png' alt="avatar"></img>
            <p>Food</p>
            <h1>Egg Baloon</h1>
            <p className="price">$19.99</p>
          </Col>
          <Col> 
            <img src='images/eggballoon.png' alt="avatar"></img>
            <p>Food</p>
            <h1>Egg Baloon</h1>
            <p className="price">$19.99</p>
          </Col>
          <Col> 
            <img src='images/eggballoon.png' alt="avatar"></img>
            <p>Food</p>
            <h1>Egg Baloon</h1>
            <h4>$19.99</h4>
          </Col>
        </Row>
      </Container>
    );
  }

export default Product;