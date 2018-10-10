import React from 'react'
import styled from 'styled-components'
import AuthPage from './AuthPage'

const Div = styled.div`
  border: 5px outset pink;
`;

export default class Header extends React.Component {
    render() {
        return (
            <Div>
                <h2> Onion Home 🚀</h2>
                <AuthPage
                    toggleBtnText='Signin'
                />
            </Div>
        )
    }
}