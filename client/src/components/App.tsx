import * as React from 'react';
import Landing from './Landing'
import Header from './Header' 


class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Landing></Landing>
            </div>)
    }
}

export { App };