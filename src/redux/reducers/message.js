import * as type from "../actions/actionType"
import * as mess from "../actions/listMessages"

var initialState = mess.MSG_WELCOME

export const message = (state = initialState, action) => {
    switch(action.type){
        case type.CHANGE_MESSAGE:
            state = action.message
            return state
        default:
            return state
    }
}