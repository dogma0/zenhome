import * as React from 'react';
import Landing from './Landing'
import Header from './Header'
// import gql from 'graphql-tag'
import { Route, Link, Switch} from 'react-router-dom'
import { Switch as AntSwitch} from 'antd';

// const ME_QUERY = gql`
//     query MeQuery {
//         me {
//             email
//         }
//     }
// `

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {/* <Route exact path="/" render={() => {
                    return ((localStorage.getItem('token')) ?
                        <Redirect to="/app" /> :
                        <Landing />)
                }} /> */}
                <Switch>
                    <Route exact path="/" render={()=> <Landing/>}/>
                    <Route exact path="/app" render={()=> <p>APP PAGE</p>}/>
                </Switch>
                <Link to="/app">go to app</Link>
                <Link to="/">go home</Link>
            </div>)
    }
}

export { App };