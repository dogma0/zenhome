import * as React from 'react'
import styled from 'styled-components'
import AuthModal from '../AuthModal'

const Div = styled.div`
  border: 5px outset pink;
`;

export default class Header extends React.Component {
    render() {
        return (
            <Div>
                <h2> ZenHome </h2>
                {/* <AuthModal
                    toggleBtnText='Login'
                    toggleBtnType='default' */}
                />
            </Div>
        )
    }
}