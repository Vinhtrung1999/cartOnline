import * as type from "../actions/actionType"
//var cart = JSON.parse(localStorage.getItem("cart"))
var initialState = 0

export const countUp = (state = initialState, action) => {
    switch(action.type){
        case type.COUNT_UP:
            state ++
            return state
        default:
            return state
    }
}