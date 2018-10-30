import * as React from 'react';
import AuthModal from '../AuthModal'
import styled from 'styled-components'

const sofa = require('./assets/sofa.jpg');

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

class App extends React.Component {
    render() {
        return (
            <Bg>
                <AuthModal
                    visible={true}
                    toggleBtnText='Login'
                    toggleBtnType='primary'
                ></AuthModal>
            </Bg>)
    }
}

export default App 