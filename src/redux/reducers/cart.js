import * as type from "../actions/actionType"
var cartLocalStorage = JSON.parse(localStorage.getItem("cart"))
var initialState = cartLocalStorage || []

export const cart = (state = initialState, action) => {
    switch(action.type){
        case type.ADD_TO_CART:
            var check = false
            state.forEach((val) => {
                if (val.product.id === action.product.id){
                    val.qty ++
                    check = true
                }
            })
            if(!check){
                let temp = {
                    product: action.product,
                    qty : action.qty
                }
                state = [...state, temp]
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]

        case type.REMOVE_ITEM:
            var index = -1
            //check and get index item need remove
            state.forEach((val, i) => {
                if (val.product.id === action.id){
                    index = i
                }
            })
            //remove
            if(check !== -1){
                state.splice(index, 1)
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]

        case type.UPDATE_ITEM:
            var index = -1
            //check and get index item need remove
            state.forEach((val, i) => {
                if (val.product.id === action.id){
                    index = i
                }
            })
            if(check !== -1){
                state[index].qty = action.qty
            }

            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]

        default:
            return [...state]
    }
}