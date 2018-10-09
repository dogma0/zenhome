import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;

const Index = () => {
  return <Div>Hello React!!</Div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));