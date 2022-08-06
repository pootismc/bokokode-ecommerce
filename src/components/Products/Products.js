import React, {useState, useEffect} from 'react'

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://technical-frontend-api.bokokode.com/api/products', {
                method: 'POST',
            })
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(data)
        }
        return () => {
            componentMounted = false;
        }
    }
        getProducts ();
    }, []);
    
    const Loading = () => {
        return(
            <>
            Loading...
            </>
        )
    }

    const showProducts = () => {
        return (
        <div>
            <button>All</button>
        </div>
        )
 
    };
    return (
        <div>
            <div>
                <div>
                    <h1>Probando Products</h1>
                    {loading ? <Loading/> : showProducts()}
                </div>
                {/* {
                    data.map((product) => 
                        <div>

                        </div>)
                } */}
            </div>
        </div>
    )
}

export default Products;

