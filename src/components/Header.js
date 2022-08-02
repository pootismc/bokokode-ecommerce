import React from 'react';
import styled from 'styled-components'

import logo from "../../src/assets/images/logoo.jpg"
import cart from "../../src/assets/images/cart.jpg"


const Container = styled.div`
    height: auto;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
`

const Right = styled.div`
`

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Left><img className="avatar" width="150" src={logo} alt="avatar"></img></Left>
                <Right><img className="avatar" width="50" src={cart} alt="avatar"></img></Right>
            </Wrapper>
        </Container>
    )
}



export default Header;