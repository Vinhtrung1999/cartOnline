import React , { Component } from 'react'
import * as mess from "../../redux/actions/listMessages"
class ItemCart extends Component{

    removeItem = (id) =>{
        this.props.removeItem(id)
        this.props.changeMessage(mess.MSG_DELETE_CART)
    }

    onChangeQty = (id, qty) => {
        if(qty > 0){
            this.props.updateItem(id, qty)
            this.props.changeMessage(mess.MSG_UPDATE_CART)
        }
    }

    render(){
        var { itemCart } = this.props
        return(
            <tr>
                <th scope="row">
                    <img src={ itemCart.product.img }
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{ itemCart.product.name }</strong>
                    </h5>
                </td>
                <td>{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(itemCart.product.price) }</td>
                <td className="center-on-small-only">
                    <span className="qty">{ itemCart.qty } </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={ () => this.onChangeQty(itemCart.product.id, itemCart.qty - 1) }
                        >
                            <a>—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={ () => this.onChangeQty(itemCart.product.id, itemCart.qty + 1) }
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(itemCart.product.price * itemCart.qty) }</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick = { () => this.removeItem(itemCart.product.id) }
                    >
                        X
                    </button>
                </td>
            </tr>
        )
    }
}
export default ItemCart