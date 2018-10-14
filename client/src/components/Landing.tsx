import * as React from 'react';
import { Row, Col } from 'antd';
import AuthModal from './AuthModal'

function UserJounry() {
  return (<ul>
    <li>Research</li>
    <li>Tour Home</li>
    <li>Make an Offer</li>
    <li>Closing</li>
  </ul>)
}

function FAQ() {
  return (<ul>
    <ul>
      <li>
        I was told buyers don't have to pay anything, what did you mean I could save money?
      </li>
      <li>
        Buyers are implicily pay the buying agent when they choose to work with one, because the agent's commision is baked into the price.
      </li>
    </ul>
  </ul>)
}

class ServiceDescription extends React.Component {
  render() {
    return (<ul>
      <li>No pressue home touring experiences</li>
      <li>World class but local kbuying agents</li>
    </ul>)
  }
}

class SavingCaculator extends React.Component {
  render() {
    return (
      <p>Saving calculator</p>
    )
  }
}

export default class Landing extends React.Component {
  render() {
    return (
      <div className="App">
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40 }}
          justify='space-around'
          type='flex'
        >
          <Col span={12}>
            <AuthModal
            toggleBtnText='Book a Home Tour' 
            toggleBtnType='primary'/>
          </Col>
          <Col span={12}>
            <AuthModal
            toggleBtnText='Make an Offer'
            toggleBtnType='default'/>
          </Col>
        </Row>
        <Row>
          <SavingCaculator></SavingCaculator>
        </Row>
        <Row>
          <ServiceDescription></ServiceDescription>
        </Row>
        <Row>
          <UserJounry></UserJounry>
        </Row>
        <Row>
          <FAQ></FAQ>
        </Row>
      </div>
    );
  }
}