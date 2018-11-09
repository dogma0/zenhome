import * as React from 'react'
import AuthModal from '../AuthModal'
import AuthedApp from '../AuthedApp'
import styled from 'styled-components'
import { Switch } from 'react-router-dom'

const sofa = require('../../../assets/sofa.jpg');

const Bg = styled.html`
    background: url(${sofa}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover
    height: 850px;
    text-align: center;
    line-height: 850px;
    white-space: no-wrap;
}
`

class App extends React.Component<{}, { authenticated: boolean }> {
    constructor(props) {
        super(props)
        this.state = {
            authenticated: localStorage.getItem('token') ? true : false
        }
    }

    render() {
        return (
            <div>
                {this.state.authenticated   ?
                    <AuthedApp></AuthedApp> :
                    <Bg>
                        <AuthModal
                            visible={true}
                            toggleBtnText='Login'
                            toggleBtnType='primary'
                        ></AuthModal>
                    </Bg>
                }
            </div>
        )
    }
}

export default App 