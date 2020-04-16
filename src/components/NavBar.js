import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Menu, Icon, Container, Button} from 'semantic-ui-react';
import { formatPrice } from '../helpers';

class NavBar extends Component{

  static propTypes = {
    orderTotal: PropTypes.number,
    changeCurrency: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired
  }

  render(){
    return(
      <Menu fixed='top' borderless id='navbar'>
        <Container>
          <Menu.Item as={Link} to='/menu' id='navbar-header'>Pizza task</Menu.Item>
          <Menu.Item id='navbar-currency' position='right'>
            <Icon name={this.currency}/>
            <Button onClick={() => this.props.changeCurrency()} color='teal'>Add to order</Button>
          </Menu.Item>
          <Menu.Item id='navbar-total' position='right'>
            <Icon name='cart'/>
            {formatPrice(this.props.orderTotal, this.props.currency)}
            {this.props.children}
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default NavBar;
