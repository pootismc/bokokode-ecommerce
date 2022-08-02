import React from 'react';
import styled from 'styled-components'

import dog from "../../src/assets/images/dog.jpg"
import addto from "../../src/assets/images/addto.png"


const Container = styled.div`
    height: auto;
`

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
`

const Wrapper2 = styled.div`
text-align: center;
`

const Wrapper3 = styled.div`
    justify-content: space-between;
    display: flex;
`
const TopLeft = styled.div`
    margin-left: 20px;
`

const TopRight = styled.div`
`

// const Middle = styled.div`

// `

const Left = styled.div`
    flex: 1;
`

const Center = styled.div`
    flex: 1;
`

const Right = styled.div`
    flex: 1;
`

const FeaturedProduct = () => {
    return (
        <Container>
            <Wrapper>
                <TopLeft><h1>Product name</h1></TopLeft>
                <TopRight><img className="avatar" width="150" src={addto} alt="avatar"></img></TopRight>
            </Wrapper>
            <Wrapper2>
            <img src={dog} alt="avatar"></img>
            </Wrapper2>
            <Wrapper3>
                <Left>
                    <h2>About the Samurai King Resting</h2>
                    <h3>Pets</h3>
                    <h4>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</h4>
                </Left>
                <Right>
                    <h2>People also buy</h2>
                    <Wrapper>
                    <Left>
                    <div class="column-left">Column left</div>
                    </Left>
                    <Center>
                    <div class="column-center">Column Center</div>
                    </Center>
                    <Right>
                    <div class="column-center">Column Right</div>
                    </Right>
                    </Wrapper>
                </Right>
            </Wrapper3>
        </Container>
    )
}



export default FeaturedProduct;
