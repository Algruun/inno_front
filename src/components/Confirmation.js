import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Header, Menu, Button } from 'semantic-ui-react';


class Confirmation extends Component {
  static propTypes = {
    customerDetails: PropTypes.object,
    clearState: PropTypes.func.isRequired
  }

  state = {
    newOrder: false
  }

  handleClick = () => {
    this.props.clearState();
    this.setState({ newOrder: true });
  }

  render(){
    if(this.state.newOrder) {
      return <Redirect push to='/' />;
    }

    const { firstName, address } = this.props.customerDetails;

    return(
      <Fragment>
      <Menu secondary id='navbar'>
        <Menu.Item header id='navbar-header'>Slices</Menu.Item>
      </Menu>
        <Container textAlign='center' id='confirmation-container'>
          <Header as='h1' id='page-header'>Thanks, {firstName}!</Header>
          <p id='confirmation-text'>Your order, <strong>#2222</strong> is now being prepped and will be delivered to: </p>
          <p><strong>{address}</strong></p>
          <p>within the next hour <span role='img' aria-label='motorcycle'>🛵</span> </p>
          <Button onClick={this.handleClick} color='teal' size='large' id='confirmation-new-btn'>Start a new order</Button>
        </Container>
      </Fragment>
    )
  }
}

export default Confirmation;
