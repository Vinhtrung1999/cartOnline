import React , { Component } from 'react'
import ItemProduct from './ItemProduct'

class ListProducts extends Component{

    showProduct = (products) => {
        var el = products.map((val, index) => {
            return <ItemProduct
                        key = {index}
                        product = {val}
                        onAddToCart = { this.props.onAddToCart }
                        changeMessage = { this.props.changeMessage }
                    >
                    </ItemProduct>
        })
        return el
    }

    render(){
        var { products } = this.props

        return(
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    { this.showProduct(products) }
                </div>
            </section>
        )
    }
}


export default ListProducts