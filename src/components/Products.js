import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            arrayUsuarios: 0,
            arrayUsuarios2: [],
            loading: true,
            }
        }

    apiCall(url, c) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                c(data)
                this.setState({
                    loading: false,
                })
            })
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.apiCall("https://technical-frontend-api.bokokode.com/api/products", this.totalUsuarios);
    }
        

        totalUsuarios = (data) => {
            this.setState({
                arrayUsuarios: data.data.length,
                arrayUsuarios2: data.data
            })}

    render() {
     if (this.state.loading) {
         return "loading"
     }
    return (
        <div className = "divSimple">
            <h2 className = "miniDiv">Ultimo usuario creado</h2>
            <p>{this.state.arrayUsuarios2[this.state.arrayUsuarios-1].name}</p>
            <p>{this.state.arrayUsuarios2[this.state.arrayUsuarios-1].surname}</p>
            <p>{this.state.arrayUsuarios2[this.state.arrayUsuarios-1].email}</p>
        </div>

    );
}
}

export default Products;