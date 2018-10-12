import * as React from 'react';
import Landing from './Landing'
import Header from './Header'
import gql from 'graphql-tag'
import { Redirect, Route, Link } from 'react-router-dom'

const ME_QUERY = gql`
    query MeQuery {
        me {
            email
        }
    }
`


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Route exact path="/" render={() => {
                    return ((localStorage.getItem('token')) ?
                        <Redirect to="/app" /> :
                        <Landing />)
                }} />
                <Link to="/app">go to app</Link>
                <Link to="/">go home</Link>
            </div>)
    }
}

export { App };