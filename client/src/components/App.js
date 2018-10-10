import React, { Component } from 'react';
import Landing from './Landing'
import Header from './Header' 


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Landing></Landing>
            </div>)
    }
}

export { App };