import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

//Components
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import Teams from './components/teams'


class App extends Component {
    render() {
        return(
            <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/teams" component={Teams}/>
                <Footer/>
            </div>
            </BrowserRouter>
        )
    }
}

export default App;
