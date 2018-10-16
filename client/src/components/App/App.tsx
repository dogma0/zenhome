import * as React from 'react';
import Landing from '../Landing'
import Header from '../Heading'

// const ME_QUERY = gql`
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {/* <Route exact path="/" render={() => {
                    <Route exact path="/" render={()=> <Landing/>}/>
                    <Route exact path="/app" render={()=> <p>APP PAGE</p>}/>
                </Switch>
                <Link to="/app">go to app</Link>
                <Link to="/">go home</Link>
            </div>)
    }
}

export default App 