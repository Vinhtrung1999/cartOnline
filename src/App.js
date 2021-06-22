import React , { Component } from 'react'
import Header from './components/share/Header'
import Footer from './components/share/Footer'
import CartContainer from './redux/containers/cartContainer'
import MessageContainer from './redux/containers/messageContainer'
import ListProductsContainer from './redux/containers/listProductsContainer'

class App extends Component{
    render(){
        return(
            <div>
                <Header></Header>          
                <main id="mainContainer">
                    <div className="container">
                        <ListProductsContainer></ListProductsContainer>
                        <MessageContainer></MessageContainer>
                        <CartContainer></CartContainer>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        )
    }
}
export default App