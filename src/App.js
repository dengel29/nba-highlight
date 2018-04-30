import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

//Components
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'


class App extends Component {
    render() {
        return(
            <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Footer/>
            </div>
            </BrowserRouter>
        )
    }
}

export default App;
