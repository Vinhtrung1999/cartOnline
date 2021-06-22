import React , { Component } from 'react'
import Message from '../../components/content/message'
import { connect } from 'react-redux'
import { actionAddToCart, actionCountUp } from '../actions/index'
import { message } from '../reducers/message'
class MessageContainer extends Component{

    render(){
        var { message } = this.props
        return(
            <Message message = { message}></Message>
        )
    }
}

const mapStateToProps = state => {
    return {
        message : state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer)