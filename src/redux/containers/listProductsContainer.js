import React , { Component } from 'react'
import ListProducts from '../../components/content/listProducts'
import { connect } from 'react-redux'
import { actionAddToCart, actionChangeMessage } from '../actions/index'
class ListProductsContainer extends Component{

    

    render(){
        var { products, onAddToCart, changeMessage } = this.props

        return(
            <ListProducts
                products = { products }
                onAddToCart = { onAddToCart }
                changeMessage = { changeMessage }
            ></ListProducts>
        )
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(actionAddToCart(product, 1))
        },
        changeMessage : message => {
            dispatch(actionChangeMessage(message))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListProductsContainer)