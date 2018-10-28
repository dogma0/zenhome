import * as React from 'react';
import Landing from '../Landing'
import Header from '../Heading'
import { Route, Link, Switch} from 'react-router-dom'
import { Switch as AntSwitch} from 'antd';

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Header/>
                <Switch>
                    <Route exact path="/" render={()=> <Landing/>}/>
                    <Route exact path="/app" render={()=> <p>APP PAGE</p>}/>
                </Switch>
                <Link to="/app">go to app</Link>
                <Link to="/">go home</Link> */}
                <Landing/>
            </div>)
    }
}

export default App 