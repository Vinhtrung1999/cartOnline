import React , { Component } from 'react'
import ItemCart from './ItemCart'
import CartTotal from './cartTotal'
import * as mess from '../../redux/actions/listMessages'

class Cart extends Component{

    showCart = (cart) => {
        var el = ""
        if(cart.length === 0 ){
            el = <tr>
                    <td colSpan="1"></td>
                    <td>
                        <h4>
                            { mess.MSG_EMPTY_CART }
                        </h4>
                    </td>
                </tr>
        }
        else{
            el = cart.map((val, index) => {
                return  <ItemCart
                            key= {index}
                            itemCart = {val}
                            removeItem = { this.props.removeItem }
                            updateItem = { this.props.updateItem }
                            changeMessage = { this.props.changeMessage }
                        ></ItemCart>
            })
        }
        

        return el
    }

    getTotal = (cart) => {
        var total = 0
        cart.forEach(val => {
            total += (val.product.price * val.qty)
        })
        return <CartTotal total = {total}></CartTotal>
    }

    render(){
        var { cart } = this.props
        return(      
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.showCart(cart) }
                            
                            { this.getTotal(cart) }
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}
export default Cart