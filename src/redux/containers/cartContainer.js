import React , { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../../components/content/cart'
import { actionRemoveItem, actionUpdateItem, actionChangeMessage } from '../actions/index'

class CartContainer extends Component{

    render(){
        var { cart, removeItem, updateItem, changeMessage } = this.props

        return(
            <Cart
                cart = { cart }
                removeItem = { removeItem }
                updateItem = { updateItem }
                changeMessage = { changeMessage }
            ></Cart>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        removeItem : id => {
            dispatch(actionRemoveItem(id))
        },
        updateItem : (id, qty) => {
            dispatch(actionUpdateItem(id, qty))
        },
        changeMessage : message => {
            dispatch(actionChangeMessage(message))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)