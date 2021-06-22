import * as type from './actionType'

//CART
export const actionAddToCart = (product, qty) => {
    return {
        type : type.ADD_TO_CART,
        product,
        qty
    }
}

export const actionRemoveItem = (id) => {
    return {
        type : type.REMOVE_ITEM,
        id
    }
}

export const actionUpdateItem = (id, qty) => {
    return {
        type : type.UPDATE_ITEM,
        id,
        qty
    }
}

//MESSAGE
export const actionChangeMessage = (message) => {
    return {
        type : type.CHANGE_MESSAGE,
        message
    }
}

//EXCEPTION
export const actionCountUp = () => {
    return {
        type : type.COUNT_UP
    }
}


