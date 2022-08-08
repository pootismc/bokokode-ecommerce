import React from 'react'
import './FeaturedProduct.css' 
import 'bootstrap/dist/css/bootstrap.min.css';



function FeaturedProduct() {
    const alsoBuy = [
        {
            name: 'Egg Balloon',
            type: 'Food',
            price: '$93.89',
            image: 'images/yellow.png'
        },
        {
            name: 'Egg Balloon',
            type: 'Food',
            price: '$93.89',
            image: 'images/window.png'
        },
        {
            name: 'Egg Balloon',
            type: 'Food',
            price: '$93.89',
            image: 'images/eggballoon.png',
        }
    ]
    const productList = alsoBuy.map(product => ( <img src={product.image} className='alsoimg' alt='alsobuy'/>))

    const productList1 = alsoBuy.map(product => ( <h3 className='type1'>{product.type}</h3>))
    
    const productList2 = alsoBuy.map(product => ( <h2 className='tittle1'>{product.name}</h2>))
    
    const productList3 = alsoBuy.map(product => ( <h2 className='price1'>{product.price}</h2>))

    return (
        <div className='containerProd'>

            <div className='head'>
                <div className=''>
                    <h2 className='titulo'>Tittle</h2>
                 </div>
                <div className=''>
                    <button className='btn'>Add to Cart</button>
                </div>
            </div>

            <div className=''>
                <div className='responsive'>
                    <img className='responsive' src='images/featured.png' alt='product' />
                </div>
            </div>

            <div className='row1'>
                <div className='test2'>
                        <h2 className='prodTittle'>About the Samurai King Resting</h2>
                        <h3 className='prodType'>Pets</h3>
                        <h4 className='prodDes'> So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</h4>
                </div>

                <div className='padding'>
                <h2 className='text'>People also buy</h2>
                    <div className='test3'>
                        <div className='' > 
                            {productList}
                        </div>
                        <div className=''> 
                            {productList1}
                        </div>
                        <div className=''> 
                            {productList2}
                        </div>
                        <div className=''> 
                            {productList3}
                        </div>
                    </div>
            </div>          
        </div> 

                    


        </div>
        
    );
}

export default FeaturedProduct;

